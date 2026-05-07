<template>
  <section class="cta" aria-labelledby="cta-title">
    <div class="cta__bg" aria-hidden="true">
      <div class="cta__bg-glow"></div>
      <div class="cta__bg-grid"></div>
    </div>

    <div class="container cta__container">
      <div class="cta__ornament reveal" aria-hidden="true">
        <span class="cta__orn-line"></span>
        <img src="/images/logo.png" alt="" width="40" height="40" class="cta__orn-logo" />
        <span class="cta__orn-line"></span>
      </div>

      <h2 id="cta-title" class="cta__title reveal reveal--delay-1">
        Conheça Seus Direitos.
        <br>
        <span class="cta__title-sub">Estamos aqui para orientá-lo.</span>
      </h2>

      <p class="cta__text reveal reveal--delay-2">
        Se você enfrenta uma situação trabalhista ou previdenciária e não sabe
        por onde começar, entre em contato. Ouviremos seu caso com atenção
        e apresentaremos as possibilidades jurídicas disponíveis.
      </p>

      <div class="cta__actions reveal reveal--delay-3">
        <a
          :href="`https://wa.me/5511947559278?text=${encodeURIComponent('Olá, gostaria de orientação jurídica sobre meu caso.')}`"
          target="_blank"
          rel="noopener noreferrer"
          class="btn btn--gold btn--lg cta__btn-primary"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
          </svg>
          Fale pelo WhatsApp
        </a>

        <a href="tel:+5511947559278" class="btn btn--outline btn--lg cta__btn-secondary">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true">
            <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.7A2 2 0 012 1h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
          </svg>
          (11) 94755-9278
        </a>
      </div>

      <p class="cta__disclaimer reveal reveal--delay-4">
        Atendemos em São Paulo — Vila Joaniza e Balneário São Francisco.<br>
        Também via WhatsApp para sua comodidade.
      </p>
    </div>

    <div class="cta__bottom-line" aria-hidden="true"></div>
  </section>
</template>

<script setup lang="ts">
useIntersectionReveal()
</script>

<style scoped>
.cta {
  position: relative;
  padding: var(--space-3xl) 0;
  overflow: hidden;
  background: var(--color-bg-alt);
  text-align: center;
}

.cta__bg {
  position: absolute;
  inset: 0;
  pointer-events: none;
}

.cta__bg-glow {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 600px;
  height: 400px;
  border-radius: 50%;
  background: radial-gradient(ellipse, rgba(196, 160, 74, 0.06) 0%, transparent 70%);
}

.cta__bg-grid {
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(var(--color-border-subtle) 1px, transparent 1px),
    linear-gradient(90deg, var(--color-border-subtle) 1px, transparent 1px);
  background-size: 60px 60px;
  mask-image: radial-gradient(ellipse 80% 70% at 50% 50%, black 30%, transparent 100%);
}

.cta__container {
  position: relative;
  z-index: 1;
}

.cta__ornament {
  display: flex;
  align-items: center;
  gap: var(--space-md);
  max-width: 400px;
  margin: 0 auto var(--space-xl);
}

.cta__orn-line {
  flex: 1;
  height: 1px;
  background: linear-gradient(90deg, transparent, var(--color-gold));
}

.cta__orn-line:last-child {
  background: linear-gradient(90deg, var(--color-gold), transparent);
}

.cta__orn-logo {
  width: 36px;
  height: 36px;
  object-fit: contain;
  opacity: 0.7;
}

.cta__title {
  font-size: clamp(2rem, 5vw, 3.5rem);
  color: var(--color-cream);
  margin-bottom: var(--space-md);
  line-height: 1.1;
}

.cta__title-sub {
  color: var(--color-gold);
  font-style: italic;
}

.cta__text {
  font-size: 1.05rem;
  color: var(--color-text-muted);
  max-width: 52ch;
  margin: 0 auto var(--space-xl);
  line-height: 1.8;
}

.cta__actions {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-md);
  flex-wrap: wrap;
  margin-bottom: var(--space-lg);
}

.cta__btn-primary {
  min-width: 220px;
}

.cta__disclaimer {
  font-family: var(--font-display);
  font-size: 0.65rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--color-text-muted);
  line-height: 1.8;
}

.cta__bottom-line {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(90deg, transparent, var(--color-gold), transparent);
}

@media (max-width: 480px) {
  .cta__actions {
    flex-direction: column;
    align-items: stretch;
  }

  .cta__btn-primary,
  .cta__btn-secondary {
    text-align: center;
  }
}
</style>
