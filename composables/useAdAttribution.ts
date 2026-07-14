type AttributionData = Record<string, string>

const STORAGE_KEY = 'valadao_ad_attribution'
const MAX_AGE_DAYS = 90
const CAPTURE_KEYS = [
  'gclid',
  'gbraid',
  'wbraid',
  'utm_source',
  'utm_medium',
  'utm_campaign',
  'utm_content',
  'utm_term',
  'mtype',
  'matchtype',
  'ssg',
]

const readStoredAttribution = (): AttributionData => {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY)
    if (!raw) return {}

    const parsed = JSON.parse(raw) as { savedAt?: number; data?: AttributionData }
    if (!parsed.savedAt || !parsed.data) return {}

    const maxAgeMs = MAX_AGE_DAYS * 24 * 60 * 60 * 1000
    if (Date.now() - parsed.savedAt > maxAgeMs) {
      window.localStorage.removeItem(STORAGE_KEY)
      return {}
    }

    return parsed.data
  } catch {
    return {}
  }
}

const writeStoredAttribution = (data: AttributionData) => {
  window.localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify({
      savedAt: Date.now(),
      data,
    }),
  )
}

const captureAttributionFromUrl = () => {
  const params = new URLSearchParams(window.location.search)
  const current = readStoredAttribution()
  let changed = false

  for (const key of CAPTURE_KEYS) {
    const value = params.get(key)
    if (value) {
      current[key] = value
      changed = true
    }
  }

  if (changed) writeStoredAttribution(current)
}

const buildAttributionText = (data: AttributionData) => {
  const entries = [
    ['gclid', data.gclid || data.ssg],
    ['gbraid', data.gbraid],
    ['wbraid', data.wbraid],
    ['utm_source', data.utm_source],
    ['utm_medium', data.utm_medium],
    ['utm_campaign', data.utm_campaign],
    ['utm_content', data.utm_content],
    ['utm_term', data.utm_term],
    ['matchtype', data.matchtype || data.mtype],
  ].filter(([, value]) => Boolean(value))

  if (!entries.length) return ''

  return entries.map(([key, value]) => `${key}: ${value}`).join(' | ')
}

const updateWhatsappLink = (link: HTMLAnchorElement, attributionText: string) => {
  const url = new URL(link.href)
  const originalText = url.searchParams.get('text') || ''
  const cleanText = originalText.replace(/\n\nDados do clique: .+$/s, '')
  url.searchParams.set('text', `${cleanText}\n\nDados do clique: ${attributionText}`)
  link.href = url.toString()
}

export const useAdAttribution = () => {
  if (!import.meta.client) return

  onMounted(() => {
    captureAttributionFromUrl()

    const applyAttribution = () => {
      const attributionText = buildAttributionText(readStoredAttribution())
      if (!attributionText) return

      document
        .querySelectorAll<HTMLAnchorElement>('a[href*="wa.me/"]')
        .forEach((link) => updateWhatsappLink(link, attributionText))
    }

    applyAttribution()

    document.addEventListener('click', (event) => {
      const link = (event.target as HTMLElement | null)?.closest<HTMLAnchorElement>('a[href*="wa.me/"]')
      const attributionText = buildAttributionText(readStoredAttribution())
      if (link && attributionText) updateWhatsappLink(link, attributionText)
    }, true)
  })
}
