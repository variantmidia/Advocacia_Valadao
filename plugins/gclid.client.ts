// Captura o GCLID da URL, persiste em cookie de 90 dias e anexa
// [ref:GCLID] no parâmetro `text` de todos os links wa.me da página.
// Permite atribuir vendas reais do Chatwoot ao clique do Google Ads.

const COOKIE_NAME = 'gclid'
const MAX_AGE_SECONDS = 90 * 24 * 60 * 60

function readGclidCookie(): string | null {
  const match = document.cookie.match(new RegExp(`(?:^|;\\s*)${COOKIE_NAME}=([^;]*)`))
  return match ? decodeURIComponent(match[1]) : null
}

function writeGclidCookie(value: string) {
  document.cookie = `${COOKIE_NAME}=${encodeURIComponent(value)}; max-age=${MAX_AGE_SECONDS}; path=/; SameSite=Lax`
}

function augmentWhatsAppLinks(gclid: string) {
  document.querySelectorAll<HTMLAnchorElement>('a[href*="wa.me"]').forEach((link) => {
    try {
      const url = new URL(link.href)
      const text = url.searchParams.get('text') || ''
      if (text.includes('[ref:')) return
      url.searchParams.set('text', `${text} [ref:${gclid}]`)
      link.href = url.toString()
    } catch {
      // ignore malformed hrefs
    }
  })
}

export default defineNuxtPlugin(() => {
  const incoming = new URLSearchParams(window.location.search).get('gclid')
  if (incoming) writeGclidCookie(incoming)

  const stored = readGclidCookie()
  if (!stored) return

  const run = () => augmentWhatsAppLinks(stored)

  if (document.readyState === 'complete' || document.readyState === 'interactive') {
    setTimeout(run, 0)
  } else {
    window.addEventListener('DOMContentLoaded', run, { once: true })
  }

  useRouter().afterEach(() => setTimeout(run, 0))
})
