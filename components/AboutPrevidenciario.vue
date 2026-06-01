<template>
  <section id="sobre-prev" class="section about" aria-labelledby="about-prev-title">
    <div class="container about__container">
      <!-- Photo column -->
      <div class="about__photo-col reveal">
        <div class="about__photo-frame">
          <img
            src="/images/wagner.webp"
            alt="Dr. Wagner Valadão — Advogado Previdenciário em São Paulo"
            class="about__photo"
            width="440"
            height="560"
            loading="lazy"
          />
          <div class="about__photo-border" aria-hidden="true"></div>
          <div class="about__photo-accent" aria-hidden="true"></div>
        </div>

        <!-- Floating expertise card -->
        <div class="about__card reveal reveal--delay-2">
          <p class="about__card-label">Especialidades</p>
          <div class="about__card-items">
            <span class="about__card-item">Aposentadoria INSS</span>
            <span class="about__card-item">BPC/LOAS</span>
            <span class="about__card-item">Auxílio-Doença</span>
            <span class="about__card-item">Revisão de Benefícios</span>
          </div>
        </div>
      </div>

      <!-- Text column -->
      <div class="about__text-col">
        <p class="label reveal">Sobre o Advogado</p>

        <h2 id="about-prev-title" class="section-title about__title reveal reveal--delay-1">
          Dr. Wagner Valadão
        </h2>
        <p class="about__oab reveal reveal--delay-1">OAB/SP 267.973</p>

        <div class="about__ornament reveal reveal--delay-1" aria-hidden="true">
          <span class="about__orn-line"></span>
          <span class="about__orn-diamond"></span>
        </div>

        <p class="about__body reveal reveal--delay-2">
          O Dr. Wagner Valadão é advogado com atuação dedicada ao Direito Previdenciário
          há mais de 18 anos. Com escritórios em Vila Joaniza e Balneário São Francisco,
          em São Paulo, oferece assessoria jurídica personalizada para pessoas que buscam
          seus direitos junto ao INSS.
        </p>

        <p class="about__body reveal reveal--delay-3">
          Entendemos que cada situação é única. Por isso, o atendimento é sempre
          individualizado — ouvindo com atenção, explicando com clareza e atuando
          com seriedade em cada etapa do processo previdenciário.
        </p>

        <ul class="about__list reveal reveal--delay-3" aria-label="Diferenciais do escritório">
          <li class="about__list-item">
            <span class="about__list-icon" aria-hidden="true"></span>
            18 anos de dedicação ao Direito Previdenciário
          </li>
          <li class="about__list-item">
            <span class="about__list-icon" aria-hidden="true"></span>
            Mais de 2.100 clientes atendidos em todo o Brasil
          </li>
          <li class="about__list-item">
            <span class="about__list-icon" aria-hidden="true"></span>
            Honorários apenas ao êxito da causa
          </li>
          <li class="about__list-item">
            <span class="about__list-icon" aria-hidden="true"></span>
            Contato direto pelo WhatsApp, sem burocracia
          </li>
        </ul>

        <a
          href="https://wa.me/5511947559278?text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20gostaria%20de%20falar%20com%20um%20advogado%20previdenci%C3%A1rio."
          target="_blank"
          rel="noopener noreferrer"
          class="btn btn--outline about__cta reveal reveal--delay-4"
        >
          Entre em Contato
        </a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
useIntersectionReveal()
</script>

<style scoped>
.about {
  background-color: var(--color-bg-alt);
  overflow: hidden;
}

.about__container {
  display: grid;
  grid-template-columns: 440px 1fr;
  gap: var(--space-3xl);
  align-items: center;
}

/* Photo */
.about__photo-col {
  position: relative;
  padding-bottom: 80px;
}

.about__photo-frame {
  position: relative;
  display: block;
  width: 100%;
}

.about__photo {
  position: relative;
  z-index: 1;
  width: 100%;
  max-width: 420px;
  height: 520px;
  object-fit: cover;
  object-position: top center;
  display: block;
  filter: grayscale(15%);
  transition: filter var(--transition);
}

.about__photo:hover {
  filter: grayscale(0%);
}

.about__photo-border {
  position: absolute;
  top: 20px;
  left: 20px;
  right: -20px;
  bottom: -20px;
  border: 1px solid var(--color-border);
  z-index: 0;
  pointer-events: none;
}

.about__photo-accent {
  position: absolute;
  top: -1px;
  left: -1px;
  width: 60px;
  height: 60px;
  border-top: 2px solid var(--color-gold);
  border-left: 2px solid var(--color-gold);
  z-index: 2;
  pointer-events: none;
}

/* Floating card */
.about__card {
  position: absolute;
  bottom: var(--space-md);
  right: 0;
  background: rgba(13, 13, 13, 0.96);
  border: 1px solid var(--color-border);
  padding: var(--space-md);
  min-width: 200px;
  max-width: 220px;
  box-shadow: var(--shadow-card);
  z-index: 3;
  backdrop-filter: blur(8px);
}

.about__card-label {
  font-family: var(--font-display);
  font-size: 0.6rem;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: var(--color-gold);
  margin-bottom: 10px;
}

.about__card-items {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.about__card-item {
  font-size: 0.82rem;
  color: var(--color-text);
  padding-left: 12px;
  border-left: 2px solid var(--color-gold-dark);
}

/* Text */
.about__title {
  margin-top: var(--space-xs);
}

.about__oab {
  font-family: var(--font-display);
  font-size: 0.68rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--color-gold);
  margin-bottom: var(--space-md);
}

.about__ornament {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: var(--space-lg);
  width: 120px;
}

.about__orn-line {
  height: 1px;
  flex: 1;
  background: linear-gradient(90deg, var(--color-gold), transparent);
}

.about__orn-diamond {
  width: 5px;
  height: 5px;
  background: var(--color-gold);
  transform: rotate(45deg);
  flex-shrink: 0;
}

.about__body {
  font-size: 1.08rem;
  color: var(--color-text-muted);
  margin-bottom: var(--space-md);
  max-width: 50ch;
  line-height: 1.8;
}

.about__list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: var(--space-lg);
}

.about__list-item {
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 0.95rem;
  color: var(--color-text);
}

.about__list-icon {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 1px solid var(--color-gold);
  flex-shrink: 0;
  position: relative;
}

.about__list-icon::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 6px;
  height: 6px;
  background: var(--color-gold);
  border-radius: 50%;
}

.about__cta {
  display: inline-flex;
}

@media (max-width: 1024px) {
  .about__container {
    grid-template-columns: 360px 1fr;
    gap: var(--space-xl);
  }
}

@media (max-width: 768px) {
  .about__container {
    grid-template-columns: 1fr;
    gap: var(--space-xl);
  }

  .about__photo-col {
    padding-bottom: 70px;
  }

  .about__photo {
    max-width: 100%;
    height: 340px;
  }

  .about__photo-border {
    display: none;
  }

  .about__card {
    right: 0;
    bottom: 0;
    max-width: 100%;
    min-width: unset;
    width: calc(100% - 40px);
    left: 0;
    margin: 0 auto;
  }

  .about__body {
    max-width: 100%;
  }
}
</style>
