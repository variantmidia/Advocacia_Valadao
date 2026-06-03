<template>
  <header class="header" :class="{ 'header--scrolled': scrolled, 'header--open': menuOpen }">
    <div class="header__inner container">
      <!-- Logo -->
      <a href="/" class="header__logo" aria-label="Wagner Valadão Advocacia">
        <img src="/images/logo.png" alt="Wagner Valadão Advocacia" width="52" height="52" />
        <span class="header__brand">
          <span class="header__brand-name">Advocacia Valadão</span>
          <span class="header__brand-sub">OAB/SP 267973</span>
        </span>
      </a>

      <!-- Desktop Nav -->
      <nav class="header__nav" aria-label="Navegação principal">
        <a href="#sobre" class="header__link">Sobre</a>
        <a href="#rodape" class="header__link">Áreas de Atuação</a>
        <a href="#como-funciona" class="header__link">Como Funciona</a>
        <a href="#unidades" class="header__link">Unidades</a>
      </nav>

      <!-- CTA -->
      <a
        href="https://wa.me/5511947559278?text=Vim%20pelo%20site%2C%20gostaria%20de%20falar%20com%20advogado%20trabalhista"
        target="_blank"
        rel="noopener noreferrer"
        class="btn btn--gold header__cta"
        aria-label="Fale pelo WhatsApp"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
        </svg>
        WhatsApp
      </a>

      <!-- Mobile burger -->
      <button
        class="header__burger"
        :class="{ 'is-open': menuOpen }"
        @click="menuOpen = !menuOpen"
        :aria-expanded="menuOpen"
        aria-label="Menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>

    <!-- Mobile Menu -->
    <div class="header__mobile" :class="{ 'is-open': menuOpen }">
      <nav class="header__mobile-nav" aria-label="Menu mobile">
        <a href="#sobre"         class="header__mobile-link" @click="menuOpen = false">Sobre</a>
        <a href="#rodape"        class="header__mobile-link" @click="menuOpen = false">Áreas de Atuação</a>
        <a href="#como-funciona" class="header__mobile-link" @click="menuOpen = false">Como Funciona</a>
        <a href="#unidades"      class="header__mobile-link" @click="menuOpen = false">Unidades</a>
        <a
          href="https://wa.me/5511947559278?text=Vim%20pelo%20site%2C%20gostaria%20de%20falar%20com%20advogado%20trabalhista"
          target="_blank"
          rel="noopener noreferrer"
          class="btn btn--gold header__mobile-cta"
        >
          Fale pelo WhatsApp
        </a>
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
const scrolled = ref(false)
const menuOpen = ref(false)

onMounted(() => {
  const onScroll = () => { scrolled.value = window.scrollY > 60 }
  window.addEventListener('scroll', onScroll, { passive: true })
  onUnmounted(() => window.removeEventListener('scroll', onScroll))
})
</script>

<style scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  transition: background 0.4s ease, box-shadow 0.4s ease, padding 0.3s ease;
  padding: 1.4rem 0;
}

.header--scrolled {
  background: rgba(8, 8, 8, 0.96);
  backdrop-filter: blur(12px);
  box-shadow: 0 1px 0 var(--color-border);
  padding: 0.9rem 0;
}

.header__inner {
  display: flex;
  align-items: center;
  gap: var(--space-lg);
}

.header__logo {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  text-decoration: none;
  flex-shrink: 0;
}

.header__logo img {
  width: 42px;
  height: 42px;
  object-fit: contain;
}

.header__brand {
  display: flex;
  flex-direction: column;
  line-height: 1.1;
}

.header__brand-name {
  font-family: var(--font-display);
  font-size: 0.85rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  color: var(--color-cream);
  text-transform: uppercase;
}

.header__brand-sub {
  font-family: var(--font-display);
  font-size: 0.58rem;
  letter-spacing: 0.25em;
  color: var(--color-gold);
  text-transform: uppercase;
}

.header__nav {
  display: flex;
  align-items: center;
  gap: var(--space-lg);
  margin-left: auto;
}

.header__link {
  font-family: var(--font-display);
  font-size: 0.68rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--color-text-muted);
  text-decoration: none;
  transition: color var(--transition);
  position: relative;
}

.header__link::after {
  content: '';
  position: absolute;
  bottom: -3px;
  left: 0;
  right: 0;
  height: 1px;
  background: var(--color-gold);
  transform: scaleX(0);
  transition: transform var(--transition);
  transform-origin: right;
}

.header__link:hover {
  color: var(--color-cream);
}

.header__link:hover::after {
  transform: scaleX(1);
  transform-origin: left;
}

.header__cta {
  padding: 0.65em 1.4em;
  font-size: 0.65rem;
  flex-shrink: 0;
}

.header__burger {
  display: none;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  width: 36px;
  height: 36px;
  background: none;
  border: 1px solid var(--color-border);
  cursor: pointer;
  padding: 7px;
  margin-left: auto;
}

.header__burger span {
  display: block;
  width: 100%;
  height: 1px;
  background: var(--color-gold);
  transition: all 0.28s ease;
  transform-origin: center;
}

.header__burger.is-open span:nth-child(1) {
  transform: translateY(6px) rotate(45deg);
}
.header__burger.is-open span:nth-child(2) {
  opacity: 0;
  transform: scaleX(0);
}
.header__burger.is-open span:nth-child(3) {
  transform: translateY(-6px) rotate(-45deg);
}

.header__mobile {
  display: none;
  overflow: hidden;
  max-height: 0;
  transition: max-height 0.4s ease;
  background: rgba(8, 8, 8, 0.98);
  border-top: 1px solid var(--color-border);
}

.header__mobile.is-open {
  max-height: 420px;
}

.header__mobile-nav {
  display: flex;
  flex-direction: column;
  padding: var(--space-md) var(--space-md) var(--space-lg);
  gap: var(--space-sm);
}

.header__mobile-link {
  font-family: var(--font-display);
  font-size: 0.78rem;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--color-text);
  padding: 0.6rem 0;
  border-bottom: 1px solid var(--color-border-subtle);
}

.header__mobile-cta {
  margin-top: var(--space-sm);
  text-align: center;
  font-size: 0.7rem;
}

@media (max-width: 900px) {
  .header__nav,
  .header__cta {
    display: none;
  }

  .header__burger,
  .header__mobile {
    display: flex;
  }

  .header__mobile {
    display: block;
  }
}
</style>
