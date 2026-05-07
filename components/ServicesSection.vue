<template>
  <section class="section services" aria-labelledby="services-title">
    <div class="container">
      <div class="services__header reveal">
        <p class="label">O que fazemos</p>
        <h2 id="services-title" class="section-title">
          Frentes de Atuação Jurídica
        </h2>
        <p class="section-subtitle services__subtitle">
          Especialização em Direito do Trabalho e Previdenciário, com atuação
          complementar em Direito de Família.
        </p>
      </div>

      <div class="services__grid">
        <!-- Trabalhista -->
        <article class="services__card reveal reveal--delay-1">
          <div class="services__card-header">
            <div class="services__card-icon" aria-hidden="true">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                <rect x="2" y="7" width="20" height="14" rx="2"/>
                <path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2"/>
                <line x1="12" y1="12" x2="12" y2="16"/>
                <line x1="10" y1="14" x2="14" y2="14"/>
              </svg>
            </div>
            <span class="services__card-roman" aria-hidden="true">I</span>
          </div>

          <h3 class="services__card-title">Direito<br>do Trabalho</h3>

          <p class="services__card-text">
            Assessoria jurídica para trabalhadores que enfrentam situações
            irregulares, rescisões abusivas ou que desejam compreender
            e fazer valer seus direitos trabalhistas.
          </p>

          <ul class="services__card-list" aria-label="Áreas do Direito do Trabalho">
            <li v-for="item in trabalhista" :key="item" class="services__card-item">
              <span class="services__card-bullet" aria-hidden="true"></span>
              {{ item }}
            </li>
          </ul>

          <a
            :href="`https://wa.me/5511947559278?text=${encodeURIComponent('Olá, preciso de assessoria em Direito do Trabalho.')}`"
            target="_blank"
            rel="noopener noreferrer"
            class="services__card-link"
          >
            Fale sobre seu caso
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
        </article>

        <!-- Divider -->
        <div class="services__divider" aria-hidden="true">
          <span class="services__divider-line"></span>
          <span class="services__divider-diamond"></span>
          <span class="services__divider-line"></span>
        </div>

        <!-- Previdenciário -->
        <article class="services__card reveal reveal--delay-2">
          <div class="services__card-header">
            <div class="services__card-icon" aria-hidden="true">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                <path d="M12 2L3 7v5c0 5.25 3.75 10.15 9 11.25C17.25 22.15 21 17.25 21 12V7L12 2z"/>
                <path d="M9 12l2 2 4-4" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
            <span class="services__card-roman" aria-hidden="true">II</span>
          </div>

          <h3 class="services__card-title">Direito<br>Previdenciário</h3>

          <p class="services__card-text">
            Orientação jurídica para trabalhadores que buscam seus
            benefícios junto ao INSS — desde a análise do caso até
            o acompanhamento de cada etapa do processo.
          </p>

          <ul class="services__card-list" aria-label="Áreas do Direito Previdenciário">
            <li v-for="item in previdenciario" :key="item" class="services__card-item">
              <span class="services__card-bullet" aria-hidden="true"></span>
              {{ item }}
            </li>
          </ul>

          <a
            :href="`https://wa.me/5511947559278?text=${encodeURIComponent('Olá, preciso de assessoria em Direito Previdenciário.')}`"
            target="_blank"
            rel="noopener noreferrer"
            class="services__card-link"
          >
            Fale sobre seu caso
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
        </article>
      </div>

      <!-- Família — atuação complementar -->
      <div class="services__familia reveal">
        <div class="services__familia-inner">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true">
            <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 000-7.78z"/>
          </svg>
          <span class="services__familia-label">Atuação Complementar</span>
          <span class="services__familia-title">Direito de Família</span>
          <span class="services__familia-items">Divórcio &nbsp;·&nbsp; Guarda e Visitação &nbsp;·&nbsp; Pensão Alimentícia &nbsp;·&nbsp; Inventário e Herança</span>
          <a
            href="#atuacao"
            class="services__familia-link"
            @click.prevent="$el.closest('section').nextElementSibling?.querySelector('[data-tab=familia]')?.click()"
          >
            Ver detalhes →
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const trabalhista = [
  'Rescisão Indireta',
  'Vínculo Empregatício (MEI e PJ)',
  'Horas Extras e Adicional Noturno',
  'Adicional de Periculosidade',
  'Acidente de Trabalho',
  'Dano Moral e Assédio',
  'Verbas Rescisórias',
  'FGTS não depositado',
]

const previdenciario = [
  'Aposentadoria por Idade',
  'Aposentadoria por Tempo de Contribuição',
  'Aposentadoria Especial',
  'Auxílio Doença',
  'Auxílio Acidente',
  'BPC/LOAS — Idoso e Deficiente',
  'Pensão por Morte',
  'Revisão de Benefícios',
]

useIntersectionReveal()
</script>

<style scoped>
.services {
  background: var(--color-bg);
}

.services__header {
  text-align: center;
  margin-bottom: var(--space-2xl);
}

.services__subtitle {
  margin: 0 auto;
}

.services__grid {
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  gap: 0;
  align-items: start;
}

/* Card */
.services__card {
  background: var(--color-bg-card);
  border: 1px solid var(--color-border-subtle);
  padding: var(--space-xl);
  transition: border-color var(--transition), box-shadow var(--transition);
  position: relative;
  overflow: hidden;
}

.services__card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: linear-gradient(90deg, transparent, var(--color-gold), transparent);
  transform: scaleX(0);
  transition: transform 0.5s ease;
}

.services__card:hover {
  border-color: var(--color-border);
  box-shadow: var(--shadow-gold);
}

.services__card:hover::before {
  transform: scaleX(1);
}

.services__card-header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: var(--space-md);
}

.services__card-icon {
  width: 52px;
  height: 52px;
  border: 1px solid var(--color-border);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-gold);
}

.services__card-roman {
  font-family: var(--font-display);
  font-size: 3.5rem;
  font-weight: 900;
  color: rgba(196, 160, 74, 0.08);
  line-height: 1;
  letter-spacing: -0.02em;
}

.services__card-title {
  font-size: 1.7rem;
  color: var(--color-cream);
  margin-bottom: var(--space-md);
  line-height: 1.2;
}

.services__card-text {
  font-size: 0.95rem;
  color: var(--color-text-muted);
  line-height: 1.75;
  margin-bottom: var(--space-lg);
  max-width: 40ch;
}

.services__card-list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: var(--space-lg);
}

.services__card-item {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 0.9rem;
  color: var(--color-text);
  padding-bottom: 8px;
  border-bottom: 1px solid var(--color-border-subtle);
}

.services__card-bullet {
  width: 4px;
  height: 4px;
  background: var(--color-gold);
  border-radius: 50%;
  flex-shrink: 0;
}

.services__card-link {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-family: var(--font-display);
  font-size: 0.68rem;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--color-gold);
  transition: gap var(--transition), color var(--transition);
}

.services__card-link:hover {
  gap: 12px;
  color: var(--color-gold-light);
}

/* Divider */
.services__divider {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: var(--space-xl) var(--space-md);
  gap: var(--space-md);
  align-self: stretch;
}

.services__divider-line {
  flex: 1;
  width: 1px;
  background: linear-gradient(180deg, transparent, var(--color-border), transparent);
}

.services__divider-diamond {
  width: 8px;
  height: 8px;
  background: var(--color-gold);
  transform: rotate(45deg);
  flex-shrink: 0;
  opacity: 0.55;
}

/* Família complementar */
.services__familia {
  margin-top: var(--space-lg);
  border: 1px solid var(--color-border-subtle);
  border-left: 3px solid var(--color-gold-dark);
  background: rgba(196, 160, 74, 0.03);
}

.services__familia-inner {
  display: flex;
  align-items: center;
  gap: var(--space-md);
  padding: var(--space-md) var(--space-lg);
  flex-wrap: wrap;
}

.services__familia-inner svg {
  color: var(--color-gold-dark);
  flex-shrink: 0;
}

.services__familia-label {
  font-family: var(--font-display);
  font-size: 0.58rem;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: var(--color-gold-dark);
  border: 1px solid var(--color-gold-dark);
  padding: 2px 8px;
  flex-shrink: 0;
}

.services__familia-title {
  font-family: var(--font-display);
  font-size: 0.82rem;
  font-weight: 600;
  color: var(--color-cream);
  flex-shrink: 0;
}

.services__familia-items {
  font-size: 0.82rem;
  color: var(--color-text-muted);
  flex: 1;
}

.services__familia-link {
  font-family: var(--font-display);
  font-size: 0.62rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--color-gold-dark);
  flex-shrink: 0;
  transition: color var(--transition);
}

.services__familia-link:hover {
  color: var(--color-gold);
}

@media (max-width: 900px) {
  .services__grid {
    grid-template-columns: 1fr;
  }

  .services__divider {
    flex-direction: row;
    padding: var(--space-md);
    align-self: auto;
  }

  .services__divider-line {
    flex: 1;
    width: auto;
    height: 1px;
    background: linear-gradient(90deg, transparent, var(--color-border), transparent);
  }

  .services__card {
    padding: var(--space-lg);
  }

  .services__card-text {
    max-width: 100%;
  }
}
</style>
