<template>
  <section class="hero" aria-label="Apresentação Previdenciária">
    <div class="hero__bg-glow" aria-hidden="true"></div>
    <div class="hero__grain" aria-hidden="true"></div>

    <div class="container hero__container">
      <!-- Left: Content -->
      <div class="hero__content">
        <p class="label hero__label reveal">Advogado Previdenciário em São Paulo</p>

        <h1 class="hero__title reveal reveal--delay-1">
          <span class="hero__title-line">Seu Benefício do INSS</span>
          <span class="hero__title-line">Negado ou Atrasado?</span>
          <span class="hero__title-line hero__title-line--gold">Você Tem Direito de Recorrer.</span>
        </h1>

        <div class="hero__ornament reveal reveal--delay-2" aria-hidden="true">
          <span class="hero__ornament-line"></span>
          <span class="hero__ornament-diamond"></span>
          <span class="hero__ornament-line hero__ornament-line--rev"></span>
        </div>

        <p class="hero__text reveal reveal--delay-3">
          Aposentadoria, auxílio-doença, BPC/LOAS, pensão por morte. A Advocacia Valadão orienta seu caso pelo WhatsApp e acompanha cada etapa do processo junto ao INSS.
        </p>

        <ul class="hero__diferencias reveal reveal--delay-3" aria-label="Nossos diferenciais">
          <li class="hero__dif-item">
            <span class="hero__dif-check" aria-hidden="true"></span>
            Mais de 2.100 clientes atendidos
          </li>
          <li class="hero__dif-item">
            <span class="hero__dif-check" aria-hidden="true"></span>
            18 anos de atuação
          </li>
          <li class="hero__dif-item">
            <span class="hero__dif-check" aria-hidden="true"></span>
            Honorários apenas ao êxito da causa
          </li>
          <li class="hero__dif-item">
            <span class="hero__dif-check" aria-hidden="true"></span>
            Análise prévia pelo WhatsApp, sem custos
          </li>
        </ul>

        <div class="hero__actions reveal reveal--delay-4">
          <a
            href="https://wa.me/5511947559278?text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20gostaria%20de%20falar%20com%20um%20advogado%20previdenci%C3%A1rio."
            target="_blank"
            rel="noopener noreferrer"
            class="btn btn--gold btn--lg"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
            Fale pelo WhatsApp
          </a>
          <a href="#servicos-prev" class="btn btn--outline btn--lg">
            Áreas de Atuação
          </a>
        </div>

        <div class="hero__offices reveal reveal--delay-5">
          <div class="hero__office-tag">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/>
            </svg>
            Vila Joaniza — São Paulo
          </div>
          <div class="hero__office-tag">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/>
            </svg>
            Balneário São Francisco — SP
          </div>
        </div>
      </div>

      <!-- Right: Photo -->
      <div class="hero__photo-wrap reveal reveal--delay-2">
        <div class="hero__photo-glow" aria-hidden="true"></div>
        <div class="hero__photo-border-tl" aria-hidden="true"></div>
        <div class="hero__photo-border-br" aria-hidden="true"></div>
        <!-- TODO: substituir src pela imagem previdenciário quando Matheus enviar -->
        <img
          src="/images/hero-worker.webp"
          alt="Advogado previdenciário — Advocacia Valadão, São Paulo"
          class="hero__photo"
          width="560"
          height="420"
          loading="eager"
        />
        <div class="hero__urgency-chip">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
            <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
          </svg>
          Análise em até 24h pelo WhatsApp
        </div>
        <div class="hero__badge">
          <span class="hero__badge-icon" aria-hidden="true">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
              <path d="M12 2L3 7v5c0 5.25 3.75 10.15 9 11.25C17.25 22.15 21 17.25 21 12V7L12 2z"/>
              <path d="M8.5 12l2.5 2.5 5-5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </span>
          <span>
            <strong>Dr. Wagner Valadão</strong>
            <em>OAB/SP 267.973</em>
          </span>
        </div>
      </div>
    </div>

    <div class="hero__bottom-border" aria-hidden="true"></div>
  </section>
</template>

<script setup lang="ts">
onMounted(() => {
  const reveals = document.querySelectorAll('.hero .reveal')
  reveals.forEach((el, i) => {
    setTimeout(() => el.classList.add('is-visible'), 100 + i * 120)
  })
})
</script>

<style scoped>
.hero {
  position: relative;
  min-height: 100svh;
  display: flex;
  align-items: center;
  overflow: hidden;
  background-color: var(--color-bg);
  padding-top: 90px;
}

.hero__bg-glow {
  position: absolute;
  top: -10%;
  right: -5%;
  width: 700px;
  height: 700px;
  border-radius: 50%;
  background: radial-gradient(ellipse at center,
    rgba(196, 160, 74, 0.07) 0%,
    transparent 70%
  );
  pointer-events: none;
}

.hero__grain {
  position: absolute;
  inset: 0;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.025'/%3E%3C/svg%3E");
  background-repeat: repeat;
  background-size: 200px;
  pointer-events: none;
  opacity: 0.4;
}

.hero__container {
  display: grid;
  grid-template-columns: 1fr 480px;
  align-items: center;
  gap: var(--space-xl);
  padding-bottom: var(--space-xl);
}

.hero__content {
  max-width: 560px;
}

.hero__label {
  animation-delay: 0.1s;
  font-size: 0.9rem;
  letter-spacing: 0.22em;
}

.hero__title {
  font-size: clamp(1.5rem, 3vw, 2.2rem);
  font-weight: 900;
  letter-spacing: 0.03em;
  margin-bottom: var(--space-md);
  display: flex;
  flex-direction: column;
  gap: 0.08em;
}

.hero__title-line {
  display: block;
  line-height: 1;
}

.hero__title-line--gold {
  color: var(--color-gold);
  -webkit-text-stroke: 0;
  text-shadow: 0 0 40px rgba(196, 160, 74, 0.3);
}

.hero__ornament {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: var(--space-md);
  width: 200px;
}

.hero__ornament-line {
  flex: 1;
  height: 1px;
  background: linear-gradient(90deg, var(--color-gold-dark), var(--color-gold));
}

.hero__ornament-line--rev {
  background: linear-gradient(90deg, var(--color-gold), transparent);
}

.hero__ornament-diamond {
  width: 6px;
  height: 6px;
  background: var(--color-gold);
  transform: rotate(45deg);
  flex-shrink: 0;
}

.hero__text {
  font-size: 1.15rem;
  color: var(--color-text-muted);
  max-width: 44ch;
  margin-bottom: var(--space-lg);
  line-height: 1.75;
}

.hero__actions {
  display: flex;
  gap: var(--space-sm);
  flex-wrap: wrap;
  margin-bottom: var(--space-lg);
}

.hero__offices {
  display: flex;
  gap: var(--space-md);
  flex-wrap: wrap;
}

.hero__office-tag {
  display: flex;
  align-items: center;
  gap: 6px;
  font-family: var(--font-display);
  font-size: 0.65rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--color-text-muted);
  border-left: 1px solid var(--color-border);
  padding-left: 12px;
}

.hero__office-tag svg { color: var(--color-gold); }

.hero__diferencias {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: var(--space-lg);
}

.hero__dif-item {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 0.95rem;
  color: var(--color-text);
}

.hero__dif-check {
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: var(--color-gold-pale);
  border: 1px solid var(--color-gold-dark);
  flex-shrink: 0;
  position: relative;
}

.hero__dif-check::after {
  content: '';
  position: absolute;
  top: 4px;
  left: 3px;
  width: 10px;
  height: 6px;
  border-left: 2px solid var(--color-gold);
  border-bottom: 2px solid var(--color-gold);
  transform: rotate(-45deg);
}

.hero__photo-wrap {
  position: relative;
  display: flex;
  align-items: stretch;
  justify-content: center;
  min-height: 460px;
}

.hero__photo-glow {
  position: absolute;
  inset: -20%;
  background: radial-gradient(ellipse, rgba(196, 160, 74, 0.08) 0%, transparent 65%);
  pointer-events: none;
}

.hero__photo-border-tl {
  position: absolute;
  top: -8px;
  left: -8px;
  width: 60px;
  height: 60px;
  border-top: 2px solid var(--color-gold);
  border-left: 2px solid var(--color-gold);
  z-index: 2;
  pointer-events: none;
}

.hero__photo-border-br {
  position: absolute;
  bottom: 40px;
  right: -8px;
  width: 60px;
  height: 60px;
  border-bottom: 2px solid var(--color-gold);
  border-right: 2px solid var(--color-gold);
  z-index: 2;
  pointer-events: none;
}

.hero__photo {
  position: relative;
  z-index: 1;
  width: 100%;
  height: 100%;
  min-height: 460px;
  object-fit: cover;
  object-position: center 40%;
  filter: brightness(0.88) contrast(1.05);
  transition: filter 0.5s ease;
}

.hero__photo:hover {
  filter: brightness(0.95) contrast(1.05);
}

.hero__urgency-chip {
  position: absolute;
  top: -16px;
  right: var(--space-md);
  z-index: 3;
  display: flex;
  align-items: center;
  gap: 7px;
  background: rgba(196, 74, 74, 0.92);
  border: 1px solid rgba(255, 120, 120, 0.3);
  padding: 6px 14px;
  font-family: var(--font-display);
  font-size: 0.62rem;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #fff;
  backdrop-filter: blur(8px);
  animation: pulse-gold 3s infinite;
}

.hero__badge {
  position: absolute;
  bottom: 16px;
  left: 0;
  z-index: 2;
  display: flex;
  align-items: center;
  gap: 10px;
  background: rgba(8, 8, 8, 0.92);
  border: 1px solid var(--color-border);
  padding: 0.6rem 1rem;
  backdrop-filter: blur(8px);
}

.hero__badge-icon {
  color: var(--color-gold);
  display: flex;
  align-items: center;
}

.hero__badge span:last-child {
  display: flex;
  flex-direction: column;
}

.hero__badge strong {
  font-family: var(--font-display);
  font-size: 0.72rem;
  letter-spacing: 0.08em;
  color: var(--color-cream);
  font-weight: 600;
}

.hero__badge em {
  font-style: normal;
  font-family: var(--font-display);
  font-size: 0.58rem;
  letter-spacing: 0.2em;
  color: var(--color-gold);
  text-transform: uppercase;
}

.hero__bottom-border {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(90deg, transparent, var(--color-gold), transparent);
}

@media (min-width: 1440px) {
  .hero__container {
    grid-template-columns: 1fr 560px;
    gap: var(--space-2xl);
  }
  .hero__photo-wrap {
    min-height: 520px;
  }
}

@media (max-width: 1100px) {
  .hero__container {
    grid-template-columns: 1fr 360px;
  }
}

@media (max-width: 768px) {
  .hero {
    padding-top: 80px;
    padding-bottom: var(--space-lg);
  }

  .hero__container {
    grid-template-columns: 1fr;
    text-align: center;
  }

  .hero__content {
    max-width: 100%;
    order: 2;
  }

  .hero__photo-wrap {
    order: 1;
    min-height: 260px;
    height: 56vw;
    max-height: 340px;
    overflow: hidden;
    width: 100%;
  }

  .hero__photo {
    width: 100%;
    height: 100%;
    min-height: unset;
    object-position: center 35%;
  }

  .hero__photo-border-tl,
  .hero__photo-border-br,
  .hero__urgency-chip,
  .hero__ornament,
  .hero__badge {
    display: none;
  }

  .hero__title {
    font-size: clamp(1.35rem, 5.5vw, 1.7rem);
    align-items: center;
  }

  .hero__text {
    margin-left: auto;
    margin-right: auto;
  }

  .hero__actions {
    justify-content: center;
  }

  .hero__offices {
    justify-content: center;
  }
}
</style>
