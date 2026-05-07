<template>
  <section id="unidades" class="section offices" aria-labelledby="offices-title">
    <div class="container">
      <div class="offices__header reveal">
        <p class="label">Onde Estamos</p>
        <h2 id="offices-title" class="section-title">Nossas Unidades</h2>
        <p class="section-subtitle offices__subtitle">
          Duas unidades em São Paulo para melhor atendê-lo.
        </p>
      </div>

      <div class="offices__grid">
        <!-- Office 1 -->
        <article class="office-card reveal reveal--delay-1" itemscope itemtype="https://schema.org/LocalBusiness">
          <div class="office-card__img-wrap">
            <img
              src="/images/escritorio-1.jpg"
              alt="Escritório Wagner Valadão Advocacia — Vila Joaniza, São Paulo"
              class="office-card__img"
              width="600"
              height="340"
              loading="lazy"
              itemprop="image"
            />
            <div class="office-card__img-overlay" aria-hidden="true"></div>
            <span class="office-card__num" aria-hidden="true">01</span>
          </div>

          <div class="office-card__body">
            <div class="office-card__tag">Unidade 1</div>
            <h3 class="office-card__title" itemprop="name">Vila Joaniza</h3>
            <p class="office-card__sub">São Paulo — SP</p>

            <ul class="office-card__info" aria-label="Informações do escritório">
              <li class="office-card__info-item">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/>
                </svg>
                <span itemprop="address">Av. Yervant Kissajikian — Vila Joaniza, São Paulo/SP</span>
              </li>
              <li class="office-card__info-item">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.7A2 2 0 012 1h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
                </svg>
                <a href="tel:+5511947559278" itemprop="telephone">(11) 94755-9278</a>
              </li>
              <li class="office-card__info-item">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                  <rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>
                </svg>
                <span>Segunda a Sexta, 9h às 18h</span>
              </li>
            </ul>

            <a
              :href="`https://wa.me/5511947559278?text=${encodeURIComponent('Olá, gostaria de agendar um atendimento na unidade Vila Joaniza.')}`"
              target="_blank"
              rel="noopener noreferrer"
              class="office-card__btn btn btn--outline"
            >
              Agendar Atendimento
            </a>
          </div>
        </article>

        <!-- Office 2 -->
        <article class="office-card reveal reveal--delay-2" itemscope itemtype="https://schema.org/LocalBusiness">
          <div class="office-card__img-wrap">
            <img
              src="/images/escritorio-2.webp"
              alt="Escritório Wagner Valadão Advocacia — Balneário São Francisco, São Paulo"
              class="office-card__img"
              width="600"
              height="340"
              loading="lazy"
              itemprop="image"
            />
            <div class="office-card__img-overlay" aria-hidden="true"></div>
            <span class="office-card__num" aria-hidden="true">02</span>
          </div>

          <div class="office-card__body">
            <div class="office-card__tag">Unidade 2</div>
            <h3 class="office-card__title" itemprop="name">Balneário São Francisco</h3>
            <p class="office-card__sub">São Paulo — SP</p>

            <ul class="office-card__info" aria-label="Informações do escritório">
              <li class="office-card__info-item">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/>
                </svg>
                <span itemprop="address">Av. das Garoupas — Balneário São Francisco, São Paulo/SP</span>
              </li>
              <li class="office-card__info-item">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.7A2 2 0 012 1h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
                </svg>
                <a href="tel:+5511947559278" itemprop="telephone">(11) 94755-9278</a>
              </li>
              <li class="office-card__info-item">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                  <rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>
                </svg>
                <span>Segunda a Sexta, 9h às 18h</span>
              </li>
            </ul>

            <a
              :href="`https://wa.me/5511947559278?text=${encodeURIComponent('Olá, gostaria de agendar um atendimento na unidade Balneário São Francisco.')}`"
              target="_blank"
              rel="noopener noreferrer"
              class="office-card__btn btn btn--outline"
            >
              Agendar Atendimento
            </a>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
useIntersectionReveal()
</script>

<style scoped>
.offices {
  background: var(--color-bg);
}

.offices__header {
  text-align: center;
  margin-bottom: var(--space-2xl);
}

.offices__subtitle {
  margin: 0 auto;
}

.offices__grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--space-lg);
}

/* Card */
.office-card {
  background: var(--color-bg-card);
  border: 1px solid var(--color-border-subtle);
  overflow: hidden;
  transition: border-color var(--transition), box-shadow var(--transition);
}

.office-card:hover {
  border-color: var(--color-border);
  box-shadow: var(--shadow-card);
}

/* Image */
.office-card__img-wrap {
  position: relative;
  overflow: hidden;
  height: 240px;
}

.office-card__img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s ease;
}

.office-card:hover .office-card__img {
  transform: scale(1.04);
}

.office-card__img-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, transparent 40%, rgba(8, 8, 8, 0.8) 100%);
}

.office-card__num {
  position: absolute;
  top: var(--space-md);
  right: var(--space-md);
  font-family: var(--font-display);
  font-size: 0.65rem;
  letter-spacing: 0.2em;
  color: var(--color-gold);
  background: rgba(8, 8, 8, 0.7);
  padding: 4px 10px;
  border: 1px solid var(--color-border);
  backdrop-filter: blur(4px);
}

/* Body */
.office-card__body {
  padding: var(--space-lg);
}

.office-card__tag {
  display: inline-block;
  font-family: var(--font-display);
  font-size: 0.58rem;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: var(--color-gold);
  border: 1px solid var(--color-border);
  padding: 3px 10px;
  margin-bottom: var(--space-sm);
}

.office-card__title {
  font-size: 1.4rem;
  color: var(--color-cream);
  margin-bottom: 4px;
}

.office-card__sub {
  font-size: 0.82rem;
  color: var(--color-text-muted);
  margin-bottom: var(--space-md);
}

.office-card__info {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: var(--space-lg);
  padding-bottom: var(--space-lg);
  border-bottom: 1px solid var(--color-border-subtle);
}

.office-card__info-item {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  font-size: 0.88rem;
  color: var(--color-text-muted);
}

.office-card__info-item svg {
  color: var(--color-gold);
  flex-shrink: 0;
  margin-top: 2px;
}

.office-card__info-item a {
  color: var(--color-text-muted);
  transition: color var(--transition);
}

.office-card__info-item a:hover {
  color: var(--color-gold);
}

.office-card__btn {
  width: 100%;
  text-align: center;
  font-size: 0.65rem;
}

@media (max-width: 768px) {
  .offices__grid {
    grid-template-columns: 1fr;
  }
}
</style>
