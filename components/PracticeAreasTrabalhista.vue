<template>
  <section class="section section--alt areas">
    <div class="container">
      <div class="areas__grid">
        <article
          v-for="(area, idx) in areas"
          :key="area.title"
          class="area-card reveal"
          :class="`reveal--delay-${(idx % 4) + 1}`"
        >
          <div class="area-card__icon" aria-hidden="true" v-html="area.icon"></div>
          <h3 class="area-card__title">{{ area.title }}</h3>
          <p class="area-card__text">{{ area.desc }}</p>
          <a
            href="https://wa.me/5511947559278?text=Vim%20pelo%20site%2C%20gostaria%20de%20falar%20com%20advogado%20trabalhista"
            target="_blank"
            rel="noopener noreferrer"
            class="area-card__link"
            :aria-label="`Falar sobre ${area.title}`"
          >
            Saiba mais →
          </a>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const areas = [
  {
    title: 'Rescisão Indireta',
    desc: 'Quando o empregador comete falta grave, o trabalhador pode encerrar o contrato e receber todas as verbas rescisórias como em demissão sem justa causa.',
    icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M9 14l-4-4 4-4"/><path d="M5 10h11a4 4 0 000-8h-1"/><path d="M15 10l4 4-4 4"/><path d="M19 14H8a4 4 0 000 8h1"/></svg>',
  },
  {
    title: 'Vínculo MEI/PJ',
    desc: 'Trabalhadores contratados como MEI ou PJ podem ter direito ao reconhecimento de vínculo empregatício com todos os benefícios da CLT.',
    icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>',
  },
  {
    title: 'Horas Extras',
    desc: 'Horas extras trabalhadas e não remuneradas, adicional noturno e intervalos suprimidos geram direito a pagamento retroativo.',
    icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="9"/><path d="M12 6v6l4 2"/></svg>',
  },
  {
    title: 'Adicional de Periculosidade',
    desc: 'Trabalhadores expostos a agentes perigosos têm direito ao adicional de periculosidade de 30% sobre o salário base.',
    icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>',
  },
  {
    title: 'Acidente de Trabalho',
    desc: 'Vítimas de acidentes no ambiente de trabalho têm direito a afastamento, benefícios previdenciários e podem pleitear indenizações.',
    icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>',
  },
  {
    title: 'Dano Moral',
    desc: 'Casos de assédio moral, sexual, humilhação ou ambiente de trabalho degradante dão direito à reparação por danos morais.',
    icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 2a10 10 0 100 20A10 10 0 0012 2z"/><path d="M12 8v4M12 16h.01"/></svg>',
  },
  {
    title: 'Verbas Rescisórias',
    desc: 'Análise e contestação de cálculos incorretos de férias, 13º salário, multa do FGTS e demais verbas devidas na rescisão.',
    icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/></svg>',
  },
  {
    title: 'FGTS Não Depositado',
    desc: 'Quando o empregador não deposita regularmente o FGTS, o trabalhador tem direito à cobrança integral dos valores em atraso.',
    icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>',
  },
]

useIntersectionReveal()
</script>

<style scoped>
.areas__header {
  text-align: center;
  margin-bottom: var(--space-xl);
}

.areas__subtitle {
  margin: 0 auto;
}

.areas__grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1px;
  background: var(--color-border-subtle);
}

.area-card {
  background: var(--color-bg-card);
  padding: var(--space-lg);
  transition: background var(--transition);
  position: relative;
  overflow: hidden;
}

.area-card::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: var(--color-gold);
  transform: scaleX(0);
  transition: transform 0.4s ease;
  transform-origin: left;
}

.area-card:hover {
  background: rgba(196, 160, 74, 0.04);
}

.area-card:hover::after {
  transform: scaleX(1);
}

.area-card__icon {
  color: var(--color-gold);
  margin-bottom: var(--space-md);
  opacity: 0.9;
}

.area-card__title {
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--color-cream);
  margin-bottom: 10px;
  letter-spacing: 0.04em;
}

.area-card__text {
  font-size: 0.82rem;
  color: var(--color-text-muted);
  line-height: 1.7;
  margin-bottom: var(--space-sm);
}

.area-card__link {
  font-family: var(--font-display);
  font-size: 0.6rem;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--color-gold);
  transition: color var(--transition);
}

.area-card__link:hover {
  color: var(--color-gold-light);
}

@media (max-width: 1100px) {
  .areas__grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 768px) {
  .areas__grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .area-card {
    padding: var(--space-md);
  }
}

@media (max-width: 480px) {
  .areas__grid {
    grid-template-columns: 1fr;
  }
}
</style>
