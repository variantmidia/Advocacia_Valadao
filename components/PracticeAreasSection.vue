<template>
  <section id="atuacao" class="section section--alt areas" aria-labelledby="areas-title">
    <div class="container">
      <div class="areas__header reveal">
        <p class="label">Causas que Defendemos</p>
        <h2 id="areas-title" class="section-title">Áreas de Atuação</h2>
        <p class="section-subtitle areas__subtitle">
          Especialização em Direito do Trabalho e Previdenciário, com atuação complementar em Direito de Família.
        </p>
      </div>

      <!-- Tabs -->
      <div class="areas__tabs reveal reveal--delay-1" role="tablist" aria-label="Categorias de atuação">
        <button
          v-for="tab in tabs"
          :key="tab.id"
          class="areas__tab"
          :class="{ 'is-active': activeTab === tab.id }"
          role="tab"
          :aria-selected="activeTab === tab.id"
          :aria-controls="`panel-${tab.id}`"
          @click="activeTab = tab.id"
        >
          {{ tab.label }}
        </button>
      </div>

      <!-- Panels -->
      <div
        v-for="tab in tabs"
        :key="tab.id"
        :id="`panel-${tab.id}`"
        role="tabpanel"
        :aria-labelledby="tab.id"
        :hidden="activeTab !== tab.id"
        class="areas__panel"
        :class="{ 'is-active': activeTab === tab.id }"
      >
        <div class="areas__grid">
          <article
            v-for="(area, idx) in tab.areas"
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
    </div>
  </section>
</template>

<script setup lang="ts">
const activeTab = ref('trabalhista')

const tabs = [
  {
    id: 'trabalhista',
    label: 'Direito do Trabalho',
    areas: [
      {
        title: 'Rescisão Indireta',
        desc: 'Quando o empregador comete falta grave, o trabalhador pode encerrar o contrato e receber todas as verbas rescisórias como em demissão sem justa causa.',
        icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M9 14l-4-4 4-4"/><path d="M5 10h11a4 4 0 000-8h-1"/><path d="M15 10l4 4-4 4"/><path d="M19 14H8a4 4 0 000 8h1"/></svg>',
      },
      {
        title: 'Vínculo Empregatício MEI/PJ',
        desc: 'Trabalhadores contratados como MEI ou PJ podem ter direito ao reconhecimento de vínculo empregatício com todos os benefícios da CLT.',
        icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>',
      },
      {
        title: 'Horas Extras e Adicional Noturno',
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
        title: 'Dano Moral e Assédio',
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
    ],
  },
  {
    id: 'previdenciario',
    label: 'Direito Previdenciário',
    areas: [
      {
        title: 'Aposentadoria por Idade',
        desc: 'Orientação sobre os requisitos e procedimentos para requerer a aposentadoria por idade junto ao INSS, para homens e mulheres.',
        icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="7" r="4"/><path d="M5 20v-1a7 7 0 0114 0v1"/></svg>',
      },
      {
        title: 'Aposentadoria por Tempo de Contribuição',
        desc: 'Análise das contribuições ao INSS e orientação sobre as regras de transição da Reforma Previdenciária de 2019.',
        icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 2L3 7v5c0 5.25 3.75 10.15 9 11.25C17.25 22.15 21 17.25 21 12V7L12 2z"/></svg>',
      },
      {
        title: 'Aposentadoria Especial',
        desc: 'Para trabalhadores expostos a agentes nocivos à saúde, com análise do PPP e tempo de contribuição reduzido.',
        icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>',
      },
      {
        title: 'Auxílio Doença',
        desc: 'Assessoria para solicitação, manutenção e recurso do auxílio doença quando o INSS nega ou cessa o benefício indevidamente.',
        icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>',
      },
      {
        title: 'Auxílio Acidente',
        desc: 'Benefício permanente para segurados que sofreram acidente e ficaram com sequelas que reduzem sua capacidade de trabalho.',
        icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M18 8h1a4 4 0 010 8h-1"/><path d="M2 8h16v9a4 4 0 01-4 4H6a4 4 0 01-4-4V8z"/><line x1="6" y1="1" x2="6" y2="4"/><line x1="10" y1="1" x2="10" y2="4"/><line x1="14" y1="1" x2="14" y2="4"/></svg>',
      },
      {
        title: 'BPC/LOAS — Idoso',
        desc: 'Benefício assistencial para idosos acima de 65 anos em situação de vulnerabilidade social que não têm renda suficiente.',
        icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg>',
      },
      {
        title: 'BPC/LOAS — Deficiente',
        desc: 'Benefício de prestação continuada para pessoas com deficiência em situação de vulnerabilidade, independente de contribuições ao INSS.',
        icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="5" r="2"/><path d="M12 7v6M8 9h4M12 13l2 5"/><path d="M8 21s1-3 4-3 4 3 4 3"/></svg>',
      },
      {
        title: 'Pensão por Morte',
        desc: 'Orientação jurídica para dependentes que têm direito à pensão por morte após o falecimento do segurado do INSS.',
        icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 000-7.78z"/></svg>',
      },
    ],
  },
]

const familia = [
  {
    title: 'Divórcio e Separação',
    desc: 'Orientação jurídica nos processos de divórcio consensual ou litigioso, com foco na proteção dos direitos de todas as partes.',
    icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 000-7.78z"/></svg>',
  },
  {
    title: 'Guarda e Visitação',
    desc: 'Assessoria em acordos e disputas de guarda de filhos, regulamentação de visitas e alienação parental.',
    icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg>',
  },
  {
    title: 'Pensão Alimentícia',
    desc: 'Fixação, revisão ou exoneração de alimentos para filhos ou cônjuges, com base na capacidade e necessidade de cada parte.',
    icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/></svg>',
  },
  {
    title: 'Inventário e Herança',
    desc: 'Orientação no processo de inventário judicial ou extrajudicial, partilha de bens e regularização de heranças.',
    icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>',
  },
]

// Adiciona aba Família ao array de tabs
tabs.push({
  id: 'familia',
  label: 'Direito de Família',
  areas: familia,
})

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

/* Tabs */
.areas__tabs {
  display: flex;
  justify-content: center;
  gap: 0;
  margin-bottom: var(--space-xl);
  border: 1px solid var(--color-border);
  width: fit-content;
  margin-left: auto;
  margin-right: auto;
}

.areas__tab {
  padding: 0.85em 2.5em;
  font-family: var(--font-display);
  font-size: 0.7rem;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--color-text-muted);
  background: transparent;
  border: none;
  cursor: pointer;
  transition: all var(--transition);
  position: relative;
}

.areas__tab + .areas__tab {
  border-left: 1px solid var(--color-border);
}

.areas__tab.is-active {
  background: var(--color-gold-pale);
  color: var(--color-gold);
}

.areas__tab.is-active::after {
  content: '';
  position: absolute;
  bottom: -1px;
  left: 0;
  right: 0;
  height: 2px;
  background: var(--color-gold);
}

.areas__tab:hover:not(.is-active) {
  color: var(--color-text);
  background: rgba(255, 255, 255, 0.02);
}

/* Panel */
.areas__panel {
  display: none;
}

.areas__panel.is-active {
  display: block;
  animation: fadeIn 0.4s ease;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to   { opacity: 1; transform: translateY(0); }
}

/* Grid */
.areas__grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1px;
  background: var(--color-border-subtle);
}

/* Area card */
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
  .areas__tabs {
    flex-direction: column;
    width: 100%;
  }

  .areas__tab + .areas__tab {
    border-left: none;
    border-top: 1px solid var(--color-border);
  }

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
