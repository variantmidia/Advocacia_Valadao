<template>
  <section class="section reviews" aria-labelledby="reviews-title">
    <div class="container">

      <!-- Header -->
      <div class="reviews__header reveal">
        <p class="label">Depoimentos</p>
        <h2 id="reviews-title" class="section-title">
          O que nossos clientes<br>falam sobre nós
        </h2>

        <!-- Google badge -->
        <div class="reviews__badge reveal reveal--delay-1" aria-label="Avaliação geral no Google">
          <svg class="reviews__badge-icon" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
          </svg>
          <div class="reviews__badge-stars" aria-label="5 estrelas">
            <span v-for="i in 5" :key="i" class="reviews__star reviews__star--filled" aria-hidden="true">★</span>
          </div>
          <span class="reviews__badge-score">5,0</span>
          <span class="reviews__badge-sep" aria-hidden="true">·</span>
          <span class="reviews__badge-count">+50 avaliações no Google</span>
        </div>
      </div>

      <!-- Cards track -->
      <div class="reviews__track" role="list">
        <article
          v-for="(review, idx) in reviews"
          :key="review.name"
          class="review-card reveal"
          :class="`reveal--delay-${(idx % 4) + 1}`"
          role="listitem"
        >
          <!-- Top row: avatar + name + Google icon -->
          <div class="review-card__top">
            <div
              class="review-card__avatar"
              :style="{ background: review.color }"
              aria-hidden="true"
            >{{ review.initial }}</div>

            <div class="review-card__meta">
              <span class="review-card__name">{{ review.name }}</span>
              <span class="review-card__date">{{ review.date }}</span>
            </div>

            <svg class="review-card__google" viewBox="0 0 24 24" aria-label="Google" role="img">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
          </div>

          <!-- Stars -->
          <div class="review-card__stars" :aria-label="`${review.rating} estrelas`">
            <span
              v-for="i in 5"
              :key="i"
              class="reviews__star"
              :class="i <= review.rating ? 'reviews__star--filled' : 'reviews__star--empty'"
              aria-hidden="true"
            >★</span>
          </div>

          <!-- Text -->
          <blockquote class="review-card__text">
            <p>{{ review.text }}</p>
          </blockquote>
        </article>
      </div>

      <!-- CTA link -->
      <div class="reviews__cta reveal">
        <a
          href="https://share.google/3FWuW8viJ72FK0Pmn"
          target="_blank"
          rel="noopener noreferrer"
          class="reviews__cta-link"
        >
          Ver todas as avaliações no Google
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
            <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/>
            <polyline points="15 3 21 3 21 9"/>
            <line x1="10" y1="14" x2="21" y2="3"/>
          </svg>
        </a>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
interface Review {
  name: string
  initial: string
  color: string
  rating: number
  text: string
  date: string
}

const reviews: Review[] = [
  {
    name: 'Amanda Leite',
    initial: 'A',
    color: '#4285F4',
    rating: 5,
    text: 'Fui bem atendida no primeiro contato. Destaco a agilidade e a atenção ao meu caso. Até o momento, experiência positiva.',
    date: 'há 5 dias',
  },
  {
    name: 'David Junior Rodrigues',
    initial: 'D',
    color: '#EA4335',
    rating: 5,
    text: 'O Dr. Valadão, com vasta experiência e expertise, elaborou a petição referente às dívidas em aberto junto ao banco. Graças à sua atuação técnica e estratégica, obtivemos êxito no caso.',
    date: 'há 5 semanas',
  },
  {
    name: 'Rogerio Tadeu Alves Pereira',
    initial: 'R',
    color: '#34A853',
    rating: 5,
    text: 'Trabalho sério e de excelência. Precisei dos serviços em processos e tive o retorno positivo! Parabéns pelo trabalho. Recomendo a todos.',
    date: 'há 6 semanas',
  },
  {
    name: 'Regiane Gouveia',
    initial: 'R',
    color: '#F4A025',
    rating: 5,
    text: 'Atendimento excelente, rápido, prático e esclarecedor. Quer agilidade? Super indico. Minha audiência foi rápida e o resultado foi bom.',
    date: 'há 6 semanas',
  },
  {
    name: 'Cleia Gonçalves',
    initial: 'C',
    color: '#8E44AD',
    rating: 5,
    text: 'Ótimo local, experiência bem atendida e com bom profissionalismo.',
    date: 'há 6 semanas',
  },
]

useIntersectionReveal()
</script>

<style scoped>
.reviews {
  background: var(--color-bg);
  overflow: hidden;
}

/* ── Header ── */
.reviews__header {
  text-align: center;
  margin-bottom: var(--space-xl);
}

/* Google badge */
.reviews__badge {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  margin-top: var(--space-md);
  background: var(--color-bg-card);
  border: 1px solid var(--color-border);
  padding: 0.6rem 1.4rem;
  border-radius: 100px;
}

.reviews__badge-icon {
  width: 20px;
  height: 20px;
  flex-shrink: 0;
}

.reviews__badge-stars {
  display: flex;
  gap: 2px;
}

.reviews__badge-score {
  font-family: var(--font-display);
  font-size: 0.88rem;
  font-weight: 700;
  color: var(--color-cream);
  letter-spacing: 0.03em;
}

.reviews__badge-sep {
  color: var(--color-text-muted);
  font-size: 0.9rem;
}

.reviews__badge-count {
  font-family: var(--font-display);
  font-size: 0.65rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--color-text-muted);
}

/* ── Stars ── */
.reviews__star {
  font-size: 0.88rem;
  line-height: 1;
}
.reviews__star--filled { color: #FBBC05; }
.reviews__star--empty  { color: rgba(251,188,5,0.2); }

/* ── Cards grid ── */
.reviews__track {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-lg);
  justify-content: center;
}

.review-card {
  flex: 0 0 calc((100% - 2 * var(--space-lg)) / 3);
  min-width: 0;
}

/* ── Single card ── */
.review-card {
  background: var(--color-bg-card);
  border: 1px solid var(--color-border-subtle);
  padding: var(--space-lg);
  display: flex;
  flex-direction: column;
  gap: var(--space-md);
  transition: border-color var(--transition), box-shadow var(--transition), transform var(--transition);
  position: relative;
  overflow: hidden;
}

.review-card::before {
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

.review-card:hover {
  border-color: var(--color-border);
  box-shadow: var(--shadow-gold);
  transform: translateY(-4px);
}

.review-card:hover::before {
  transform: scaleX(1);
}

/* Top row */
.review-card__top {
  display: flex;
  align-items: center;
  gap: var(--space-sm);
}

.review-card__avatar {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: var(--font-display);
  font-size: 1rem;
  font-weight: 700;
  color: #fff;
  flex-shrink: 0;
  letter-spacing: 0;
}

.review-card__meta {
  display: flex;
  flex-direction: column;
  gap: 3px;
  flex: 1;
  min-width: 0;
}

.review-card__name {
  font-family: var(--font-display);
  font-size: 0.78rem;
  font-weight: 600;
  color: var(--color-cream);
  letter-spacing: 0.04em;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.review-card__date {
  font-size: 0.72rem;
  color: var(--color-text-muted);
}

.review-card__google {
  width: 22px;
  height: 22px;
  flex-shrink: 0;
  opacity: 0.85;
}

/* Stars row */
.review-card__stars {
  display: flex;
  gap: 3px;
}

.review-card__stars .reviews__star {
  font-size: 1rem;
}

/* Text */
.review-card__text {
  font-size: 0.95rem;
  color: var(--color-text);
  line-height: 1.85;
  flex: 1;
  border: none;
  padding: 0;
  margin: 0;
  font-style: normal;
}

.review-card__text p::before {
  content: '"';
  color: var(--color-gold);
  font-size: 1.4rem;
  line-height: 0;
  vertical-align: -0.3em;
  margin-right: 2px;
  font-family: Georgia, serif;
}

.review-card__text p::after {
  content: '"';
  color: var(--color-gold);
  font-size: 1.4rem;
  line-height: 0;
  vertical-align: -0.3em;
  margin-left: 2px;
  font-family: Georgia, serif;
}

/* ── CTA ── */
.reviews__cta {
  text-align: center;
  margin-top: var(--space-xl);
}

.reviews__cta-link {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-family: var(--font-display);
  font-size: 0.7rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--color-text-muted);
  border-bottom: 1px solid var(--color-border-subtle);
  padding-bottom: 3px;
  transition: color var(--transition), border-color var(--transition);
}

.reviews__cta-link:hover {
  color: var(--color-gold);
  border-color: var(--color-gold);
}

/* ── Responsive ── */
@media (max-width: 1024px) {
  .review-card {
    flex: 0 0 calc((100% - var(--space-lg)) / 2);
  }
}

@media (max-width: 640px) {
  .reviews__track {
    gap: var(--space-md);
  }

  .review-card {
    flex: 0 0 100%;
    padding: var(--space-md);
  }
}
</style>
