<template>
  <section id="como-funciona" class="section section--alt process" aria-labelledby="process-title">
    <div class="container">
      <div class="process__header reveal">
        <p class="label">Simples e Direto</p>
        <h2 id="process-title" class="section-title">Como Funciona</h2>
        <p class="section-subtitle process__subtitle">
          Três passos para iniciar sua assessoria jurídica.
        </p>
      </div>

      <div class="process__grid">
        <article
          v-for="(step, idx) in steps"
          :key="step.title"
          class="process__step reveal"
          :class="`reveal--delay-${idx + 1}`"
        >
          <!-- Step number -->
          <div class="process__step-num" aria-hidden="true">
            <div class="process__step-icon" v-html="step.icon"></div>
          </div>

          <!-- Connector line -->
          <div v-if="idx < steps.length - 1" class="process__connector" aria-hidden="true">
            <span class="process__connector-line"></span>
            <span class="process__connector-arrow">→</span>
          </div>

          <div class="process__step-body">
            <span class="process__step-label">{{ step.num }}</span>
            <h3 class="process__step-title">{{ step.title }}</h3>
            <p class="process__step-desc">{{ step.desc }}</p>
          </div>
        </article>
      </div>

      <!-- CTA -->
      <div class="process__cta reveal reveal--delay-4">
        <a
          href="https://wa.me/5511947559278?text=Vim%20pelo%20site%2C%20gostaria%20de%20falar%20com%20advogado%20trabalhista"
          target="_blank"
          rel="noopener noreferrer"
          class="btn btn--gold btn--lg"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
          </svg>
          Iniciar pelo WhatsApp
        </a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const steps = [
  {
    num: '01',
    title: 'Entre em Contato',
    desc: 'Envie uma mensagem pelo WhatsApp descrevendo brevemente sua situação. Atendemos em São Paulo e região.',
    icon: '<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg>',
  },
  {
    num: '02',
    title: 'Avaliação do Caso',
    desc: 'O Dr. Wagner Valadão analisa as informações e orienta sobre as possibilidades jurídicas para a sua situação.',
    icon: '<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"/></svg>',
  },
  {
    num: '03',
    title: 'Assessoria Jurídica',
    desc: 'Com clareza e dedicação, acompanhamos cada etapa do seu processo para que você compreenda e exerça seus direitos.',
    icon: '<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 2L3 7v5c0 5.25 3.75 10.15 9 11.25C17.25 22.15 21 17.25 21 12V7L12 2z"/><path d="M9 12l2 2 4-4" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  },
]

useIntersectionReveal()
</script>

<style scoped>
.process__header {
  text-align: center;
  margin-bottom: var(--space-2xl);
}

.process__subtitle {
  margin: 0 auto;
}

.process__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-md);
  position: relative;
  align-items: start;
  margin-bottom: var(--space-2xl);
}

/* Step */
.process__step {
  position: relative;
  background: var(--color-bg-card);
  border: 1px solid var(--color-border-subtle);
  padding: var(--space-xl) var(--space-lg);
  text-align: center;
  transition: border-color var(--transition), box-shadow var(--transition);
}

.process__step:hover {
  border-color: var(--color-border);
  box-shadow: var(--shadow-gold);
}

.process__step-num {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: var(--space-md);
  height: 72px;
}


.process__step-icon {
  position: relative;
  z-index: 1;
  width: 56px;
  height: 56px;
  border: 1px solid var(--color-border);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-gold);
  background: var(--color-bg);
  transition: all var(--transition);
}

.process__step:hover .process__step-icon {
  border-color: var(--color-gold);
  background: var(--color-gold-pale);
  animation: pulse-gold 2s infinite;
}

.process__step-label {
  display: block;
  font-family: var(--font-display);
  font-size: 0.6rem;
  letter-spacing: 0.25em;
  color: var(--color-gold);
  text-transform: uppercase;
  margin-bottom: 8px;
}

.process__step-title {
  font-size: 1.1rem;
  color: var(--color-cream);
  margin-bottom: var(--space-sm);
}

.process__step-desc {
  font-size: 0.88rem;
  color: var(--color-text-muted);
  line-height: 1.75;
}

/* Connector */
.process__connector {
  display: none;
}

.process__cta {
  text-align: center;
}

@media (max-width: 768px) {
  .process__grid {
    grid-template-columns: 1fr;
    gap: var(--space-md);
  }
}
</style>
