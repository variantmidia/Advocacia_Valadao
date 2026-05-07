/**
 * Triggers .is-visible on elements with .reveal class
 * when they enter the viewport. Call once per component.
 */
export function useIntersectionReveal(selector = '.reveal') {
  onMounted(() => {
    if (typeof IntersectionObserver === 'undefined') return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    )

    document.querySelectorAll(selector).forEach((el) => observer.observe(el))

    onUnmounted(() => observer.disconnect())
  })
}
