<template>
  <section id="servicos-prev" class="section section--alt servicos-prev" aria-labelledby="servicos-prev-title">
    <div class="container">
      <div class="servicos-prev__header reveal">
        <p class="label">Áreas de Atuação</p>
        <h2 id="servicos-prev-title" class="section-title">Direito Previdenciário</h2>
        <p class="section-subtitle servicos-prev__subtitle">
          Atuamos em todas as frentes perante o INSS — da análise prévia até o resultado final.
        </p>
      </div>

      <div class="servicos-prev__grid">
        <article
          v-for="(servico, idx) in servicos"
          :key="servico.title"
          class="servico-card reveal"
          :class="`reveal--delay-${(idx % 4) + 1}`"
        >
          <div class="servico-card__icon" aria-hidden="true" v-html="servico.icon"></div>
          <div class="servico-card__body">
            <h3 class="servico-card__title">{{ servico.title }}</h3>
            <p class="servico-card__desc">{{ servico.desc }}</p>
          </div>
          <a
            href="https://wa.me/5511947559278?text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20gostaria%20de%20falar%20com%20um%20advogado%20previdenci%C3%A1rio."
            target="_blank"
            rel="noopener noreferrer"
            class="servico-card__link"
          >
            Consultar caso
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const servicos = [
  {
    title: 'Aposentadoria por Idade',
    desc: 'Para homens a partir de 65 anos e mulheres a partir de 62 anos com contribuições ao INSS. Orientamos desde o requerimento até o recurso em caso de negativa.',
    icon: '<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/></svg>',
  },
  {
    title: 'Aposentadoria por Tempo de Contribuição',
    desc: 'Para quem completou o tempo de contribuição antes da Reforma da Previdência de 2019 e tem direito adquirido. Analisamos seu CNIS e defendemos esse direito.',
    icon: '<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>',
  },
  {
    title: 'Aposentadoria Especial',
    desc: 'Para trabalhadores expostos a agentes nocivos (ruído, químicos, calor). Verificamos o PPP, analisamos laudos e defendemos a concessão junto ao INSS.',
    icon: '<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 2L3 7v5c0 5.25 3.75 10.15 9 11.25C17.25 22.15 21 17.25 21 12V7L12 2z"/><path d="M9 12l2 2 4-4" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  },
  {
    title: 'Auxílio-Doença',
    desc: 'Para quem está incapaz de trabalhar por motivo de saúde e teve o benefício negado, cortado ou cancelado pelo INSS. Recorremos e, se necessário, acionamos a Justiça.',
    icon: '<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>',
  },
  {
    title: 'Auxílio Acidente',
    desc: 'Para quem sofreu acidente (de trabalho ou não) e ficou com sequelas permanentes que reduzem a capacidade de trabalho. Atuamos no reconhecimento e na concessão do benefício.',
    icon: '<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>',
  },
  {
    title: 'BPC/LOAS Idoso',
    desc: 'Benefício assistencial de 1 salário mínimo para idosos a partir de 65 anos em situação de vulnerabilidade econômica. Não exige contribuição ao INSS.',
    icon: '<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="8" r="4"/><path d="M6 20v-2a4 4 0 014-4h4a4 4 0 014 4v2"/></svg>',
  },
  {
    title: 'BPC/LOAS Deficiente',
    desc: 'Benefício de 1 salário mínimo para pessoas com deficiência física, mental ou intelectual em situação de baixa renda. Auxiliamos na perícia, documentação e recurso.',
    icon: '<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="11" cy="4" r="2"/><path d="M11 6v7l-3 5"/><path d="M8 13h6"/><path d="M16 18a4 4 0 01-8 0"/></svg>',
  },
  {
    title: 'Pensão por Morte',
    desc: 'Para cônjuges, filhos e demais dependentes de segurado falecido. Atuamos no requerimento e no recurso quando o INSS nega ou cessa o benefício.',
    icon: '<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/></svg>',
  },
  {
    title: 'Revisão de Benefícios',
    desc: 'Para quem já recebe aposentadoria ou auxílio com valor abaixo do devido. Revisamos o cálculo e buscamos o pagamento correto, inclusive com parcelas retroativas.',
    icon: '<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>',
  },
  {
    title: 'Salário-Maternidade',
    desc: 'Para trabalhadoras (empregadas, MEIs e contribuintes individuais) que tiveram o salário-maternidade negado, cortado ou pago a menor pelo INSS. Atuamos do requerimento até a ação judicial.',
    icon: '<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 2a5 5 0 015 5c0 2.5-1.5 4.5-3.5 5.4V14h2a1 1 0 010 2h-2v1h2a1 1 0 010 2h-2v1a1 1 0 01-2 0v-1H9a1 1 0 010-2h2v-1H9a1 1 0 010-2h2v-1.6C9 11.5 7 9.5 7 7a5 5 0 015-5z"/></svg>',
  },
  {
    title: 'Reversão de Benefícios Negados',
    desc: 'Para quem recebeu negativa do INSS em qualquer benefício. Recorremos administrativamente e, se necessário, na Justiça Federal, para garantir o direito que o INSS se recusou a conceder.',
    icon: '<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M3 12a9 9 0 109-9 9 9 0 00-9 9"/><path d="M3 3v5h5"/><path d="M12 8v4l3 3" stroke-linecap="round"/></svg>',
  },
]

useIntersectionReveal()
</script>

<style scoped>
.servicos-prev__header {
  text-align: center;
  margin-bottom: var(--space-2xl);
}

.servicos-prev__subtitle {
  margin: 0 auto;
}

.servicos-prev__grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: var(--space-md);
}

.servico-card {
  flex: 0 0 calc((100% - 2 * var(--space-md)) / 3);
  min-width: 0;
  background: var(--color-bg-card);
  border: 1px solid var(--color-border-subtle);
  padding: var(--space-lg);
  display: flex;
  flex-direction: column;
  gap: var(--space-sm);
  transition: border-color var(--transition), box-shadow var(--transition), transform var(--transition);
  position: relative;
  overflow: hidden;
}

.servico-card::before {
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

.servico-card:hover {
  border-color: var(--color-border);
  box-shadow: var(--shadow-gold);
  transform: translateY(-4px);
}

.servico-card:hover::before {
  transform: scaleX(1);
}

.servico-card__icon {
  width: 52px;
  height: 52px;
  border: 1px solid var(--color-border);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-gold);
  background: var(--color-bg);
  transition: all var(--transition);
  flex-shrink: 0;
  margin-bottom: var(--space-sm);
}

.servico-card:hover .servico-card__icon {
  border-color: var(--color-gold);
  background: var(--color-gold-pale);
}

.servico-card__body {
  flex: 1;
}

.servico-card__title {
  font-size: 1rem;
  color: var(--color-cream);
  margin-bottom: var(--space-xs, 6px);
  line-height: 1.3;
}

.servico-card__desc {
  font-size: 0.875rem;
  color: var(--color-text-muted);
  line-height: 1.7;
}

.servico-card__link {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-family: var(--font-display);
  font-size: 0.62rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--color-gold);
  margin-top: auto;
  padding-top: var(--space-sm);
  border-top: 1px solid var(--color-border-subtle);
  transition: gap var(--transition), color var(--transition);
}

.servico-card__link:hover {
  gap: 10px;
  color: var(--color-gold);
}

@media (max-width: 1024px) {
  .servico-card {
    flex: 0 0 calc((100% - var(--space-md)) / 2);
  }
}

@media (max-width: 640px) {
  .servico-card {
    flex: 0 0 100%;
  }
}
</style>
