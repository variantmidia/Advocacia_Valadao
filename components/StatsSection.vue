<template>
  <section class="stats" aria-label="Destaques do escritório">
    <div class="stats__line stats__line--top" aria-hidden="true"></div>
    <div class="container stats__container">
      <div
        v-for="(stat, idx) in stats"
        :key="stat.label"
        class="stats__item reveal"
        :class="`reveal--delay-${idx + 1}`"
      >
        <div class="stats__icon" aria-hidden="true" v-html="stat.icon"></div>
        <div class="stats__content">
          <span class="stats__value">{{ stat.value }}</span>
          <span class="stats__label">{{ stat.label }}</span>
          <p class="stats__desc">{{ stat.desc }}</p>
        </div>
      </div>
    </div>
    <div class="stats__line stats__line--bottom" aria-hidden="true"></div>
  </section>
</template>

<script setup lang="ts">
const stats = [
  {
    value: '1.500+',
    label: 'Clientes Atendidos',
    desc: 'Trabalhadores orientados em SP',
    icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg>',
  },
  {
    value: '15+',
    label: 'Anos de Experiência',
    desc: 'Atuação em Direito do Trabalho',
    icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="9"/><path d="M12 6v6l4 2"/></svg>',
  },
  {
    value: 'R$200mi+',
    label: 'Em Direitos Recuperados',
    desc: 'Valores compensados a trabalhadores',
    icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/></svg>',
  },
  {
    value: '2',
    label: 'Unidades em São Paulo',
    desc: 'Vila Joaniza e Balneário São Francisco',
    icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>',
  },
]

useIntersectionReveal()
</script>

<style scoped>
.stats {
  background: var(--color-bg);
  position: relative;
  padding: var(--space-xl) 0;
}

.stats__line {
  position: absolute;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(90deg, transparent, var(--color-gold), transparent);
}

.stats__line--top    { top: 0; }
.stats__line--bottom { bottom: 0; }

.stats__container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0;
}

.stats__item {
  display: flex;
  align-items: center;
  gap: var(--space-md);
  padding: var(--space-lg) var(--space-xl);
  border-right: 1px solid var(--color-border-subtle);
  transition: background var(--transition);
}

.stats__item:last-child {
  border-right: none;
}

.stats__item:hover {
  background: var(--color-gold-pale);
}

.stats__icon {
  color: var(--color-gold);
  opacity: 0.8;
  flex-shrink: 0;
}

.stats__content {
  display: flex;
  flex-direction: column;
}

.stats__value {
  font-family: var(--font-display);
  font-size: 2rem;
  font-weight: 700;
  color: var(--color-gold);
  line-height: 1;
  margin-bottom: 4px;
  letter-spacing: -0.02em;
}

.stats__label {
  font-family: var(--font-display);
  font-size: 0.65rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--color-cream);
  margin-bottom: 4px;
}

.stats__desc {
  font-size: 0.78rem;
  color: var(--color-text-muted);
  line-height: 1.4;
}

@media (max-width: 900px) {
  .stats__container {
    grid-template-columns: repeat(2, 1fr);
  }

  .stats__item:nth-child(2) {
    border-right: none;
  }

  .stats__item:nth-child(1),
  .stats__item:nth-child(2) {
    border-bottom: 1px solid var(--color-border-subtle);
  }
}

@media (max-width: 480px) {
  .stats__container {
    grid-template-columns: 1fr;
  }

  .stats__item {
    border-right: none;
    border-bottom: 1px solid var(--color-border-subtle);
  }

  .stats__item:last-child {
    border-bottom: none;
  }
}
</style>
