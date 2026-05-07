<template>
  <section class="prequal" aria-labelledby="prequal-title">
    <!-- Urgency banner -->
    <div class="prequal__banner">
      <div class="container prequal__banner-inner">
        <div class="prequal__banner-icon" aria-hidden="true">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
          </svg>
        </div>
        <p class="prequal__banner-text">
          <strong>Atenção:</strong> Você tem apenas <strong>2 anos</strong> após a demissão para buscar seus direitos trabalhistas na Justiça.
          Principalmente se trabalhou <strong>6 meses ou mais</strong> na empresa, com ou sem registro em carteira.
        </p>
      </div>
    </div>

    <div class="container">
      <div class="prequal__body">
        <!-- Left: text -->
        <div class="prequal__text-col">
          <p class="label reveal">Quanto você pode ter direito</p>
          <h2 id="prequal-title" class="section-title reveal reveal--delay-1">
            Conheça os Valores<br>de Referência
          </h2>
          <p class="prequal__desc reveal reveal--delay-2">
            Com base em casos acompanhados pelo escritório, quanto mais tempo
            de empresa, maior tende a ser o valor a que o trabalhador tem direito.
            Avalie seu caso com um advogado antes que o prazo expire.
          </p>
          <p class="prequal__note reveal reveal--delay-2">
            ⚠ Se você está no período de experiência ou trabalhou menos de 3 meses,
            os valores costumam ser menores. Cada caso é único — consulte um advogado
            para uma análise precisa.
          </p>
          <a
            :href="`https://wa.me/5511947559278?text=${encodeURIComponent('Olá, gostaria de avaliar meu caso trabalhista.')}`"
            target="_blank"
            rel="noopener noreferrer"
            class="btn btn--gold btn--lg reveal reveal--delay-3"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
            Avaliar Meu Caso
          </a>
        </div>

        <!-- Right: value grid -->
        <div class="prequal__grid-col reveal reveal--delay-1">
          <div class="prequal__grid">
            <div
              v-for="(faixa, idx) in faixas"
              :key="faixa.periodo"
              class="prequal__card reveal"
              :class="`reveal--delay-${idx + 1}`"
            >
              <span class="prequal__card-period">{{ faixa.periodo }}</span>
              <span class="prequal__card-label">de trabalho na empresa</span>
              <div class="prequal__card-divider" aria-hidden="true"></div>
              <span class="prequal__card-value">{{ faixa.valor }}</span>
              <span class="prequal__card-sublabel">valores médios de referência*</span>
            </div>
          </div>
          <p class="prequal__disclaimer">
            * Os valores apresentados são estimativas baseadas em casos anteriores
            e não constituem promessa ou garantia de resultado. Cada caso possui
            suas próprias particularidades. OAB/SP 267.973 — Provimento 205/2021.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const faixas = [
  { periodo: '3 a 6 meses', valor: 'R$ 5.900 — R$ 11.800' },
  { periodo: '1 a 2 anos',  valor: 'R$ 23.800 — R$ 47.600' },
  { periodo: '3 a 5 anos',  valor: 'R$ 71.400 — R$ 119.000' },
  { periodo: '5 anos ou mais', valor: 'R$ 119.000 — R$ 150.000+' },
]

useIntersectionReveal()
</script>

<style scoped>
.prequal {
  background: var(--color-bg);
  padding-bottom: var(--space-3xl);
}

/* Urgency banner */
.prequal__banner {
  background: rgba(196, 74, 60, 0.12);
  border-top: 1px solid rgba(220, 80, 60, 0.25);
  border-bottom: 1px solid rgba(220, 80, 60, 0.25);
  padding: var(--space-md) 0;
  margin-bottom: var(--space-2xl);
}

.prequal__banner-inner {
  display: flex;
  align-items: center;
  gap: var(--space-md);
}

.prequal__banner-icon {
  color: #e05050;
  flex-shrink: 0;
}

.prequal__banner-text {
  font-size: 0.95rem;
  color: var(--color-text);
  line-height: 1.6;
}

.prequal__banner-text strong {
  color: #f07070;
}

/* Body layout */
.prequal__body {
  display: grid;
  grid-template-columns: 1fr 1.1fr;
  gap: var(--space-3xl);
  align-items: start;
}

/* Left col */
.prequal__desc {
  font-size: 1rem;
  color: var(--color-text-muted);
  line-height: 1.8;
  max-width: 44ch;
  margin-bottom: var(--space-md);
}

.prequal__note {
  font-size: 0.82rem;
  color: var(--color-text-muted);
  line-height: 1.7;
  padding: var(--space-sm) var(--space-md);
  border-left: 3px solid var(--color-gold-dark);
  background: var(--color-gold-pale);
  margin-bottom: var(--space-xl);
}

/* Right col — value grid */
.prequal__grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1px;
  background: var(--color-border-subtle);
  margin-bottom: var(--space-sm);
}

.prequal__card {
  background: var(--color-bg-card);
  padding: var(--space-lg);
  display: flex;
  flex-direction: column;
  gap: 4px;
  transition: background var(--transition);
  position: relative;
  overflow: hidden;
}

.prequal__card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: linear-gradient(90deg, var(--color-gold-dark), var(--color-gold));
  transform: scaleX(0);
  transition: transform 0.4s ease;
  transform-origin: left;
}

.prequal__card:hover {
  background: rgba(196, 160, 74, 0.05);
}

.prequal__card:hover::before {
  transform: scaleX(1);
}

.prequal__card-period {
  font-family: var(--font-display);
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  color: var(--color-gold);
  text-transform: uppercase;
}

.prequal__card-label {
  font-size: 0.72rem;
  color: var(--color-text-muted);
  margin-bottom: 8px;
}

.prequal__card-divider {
  height: 1px;
  background: var(--color-border-subtle);
  margin: 6px 0;
}

.prequal__card-value {
  font-family: var(--font-display);
  font-size: 1rem;
  font-weight: 700;
  color: var(--color-cream);
  line-height: 1.3;
}

.prequal__card-sublabel {
  font-size: 0.65rem;
  color: var(--color-text-muted);
  letter-spacing: 0.05em;
}

.prequal__disclaimer {
  font-size: 0.68rem;
  color: rgba(122, 115, 103, 0.6);
  line-height: 1.65;
  padding-top: var(--space-sm);
  border-top: 1px solid var(--color-border-subtle);
}

@media (max-width: 900px) {
  .prequal__body {
    grid-template-columns: 1fr;
    gap: var(--space-xl);
  }

  .prequal__desc {
    max-width: 100%;
  }
}

@media (max-width: 480px) {
  .prequal__grid {
    grid-template-columns: 1fr;
  }
}
</style>
