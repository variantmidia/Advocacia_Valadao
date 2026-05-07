<template>
  <footer class="footer" role="contentinfo">
    <div class="footer__top-line" aria-hidden="true"></div>

    <div class="container footer__container">
      <!-- Brand -->
      <div class="footer__brand">
        <a href="/" class="footer__logo" aria-label="Wagner Valadão Advocacia">
          <img src="/images/logo.png" alt="Wagner Valadão Advocacia" width="64" height="64" loading="lazy" />
        </a>
        <p class="footer__brand-name">Wagner Valadão</p>
        <p class="footer__brand-sub">Advocacia</p>
        <p class="footer__brand-oab">OAB/SP</p>
        <p class="footer__brand-desc">
          Assessoria jurídica dedicada ao trabalhador.<br>
          Direito do Trabalho e Direito Previdenciário.
        </p>
        <!-- Social / WhatsApp -->
        <a
          :href="`https://wa.me/5511947559278`"
          target="_blank"
          rel="noopener noreferrer"
          class="footer__social"
          aria-label="WhatsApp do escritório"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
          </svg>
          (11) 94755-9278
        </a>
      </div>

      <!-- Trabalhista links -->
      <nav class="footer__nav" aria-label="Direito do Trabalho">
        <h3 class="footer__nav-title">Direito do Trabalho</h3>
        <ul class="footer__nav-list">
          <li><a href="#atuacao" class="footer__nav-link">Rescisão Indireta</a></li>
          <li><a href="#atuacao" class="footer__nav-link">Vínculo Empregatício MEI/PJ</a></li>
          <li><a href="#atuacao" class="footer__nav-link">Horas Extras</a></li>
          <li><a href="#atuacao" class="footer__nav-link">Adicional de Periculosidade</a></li>
          <li><a href="#atuacao" class="footer__nav-link">Acidente de Trabalho</a></li>
          <li><a href="#atuacao" class="footer__nav-link">Dano Moral</a></li>
          <li><a href="#atuacao" class="footer__nav-link">Verbas Rescisórias</a></li>
        </ul>
      </nav>

      <!-- Previdenciário links -->
      <nav class="footer__nav" aria-label="Direito Previdenciário">
        <h3 class="footer__nav-title">Direito Previdenciário</h3>
        <ul class="footer__nav-list">
          <li><a href="#atuacao" class="footer__nav-link">Aposentadoria por Idade</a></li>
          <li><a href="#atuacao" class="footer__nav-link">Aposentadoria Especial</a></li>
          <li><a href="#atuacao" class="footer__nav-link">Auxílio Doença</a></li>
          <li><a href="#atuacao" class="footer__nav-link">Auxílio Acidente</a></li>
          <li><a href="#atuacao" class="footer__nav-link">BPC/LOAS</a></li>
          <li><a href="#atuacao" class="footer__nav-link">Pensão por Morte</a></li>
          <li><a href="#atuacao" class="footer__nav-link">Revisão de Benefícios</a></li>
        </ul>
      </nav>

      <!-- Offices -->
      <div class="footer__offices">
        <h3 class="footer__nav-title">Unidades</h3>

        <address class="footer__address">
          <p class="footer__address-name">Unidade 1 — Vila Joaniza</p>
          <p>Av. Yervant Kissajikian</p>
          <p>Vila Joaniza, São Paulo — SP</p>
          <a href="tel:+5511947559278">(11) 94755-9278</a>
        </address>

        <address class="footer__address">
          <p class="footer__address-name">Unidade 2 — Balneário São Francisco</p>
          <p>Av. das Garoupas</p>
          <p>Balneário São Francisco, São Paulo — SP</p>
          <a href="tel:+5511947559278">(11) 94755-9278</a>
        </address>
      </div>
    </div>

    <!-- Bottom bar -->
    <div class="footer__bottom">
      <div class="container footer__bottom-inner">
        <p class="footer__copy">
          &copy; {{ year }} Wagner Valadão Advocacia. Todos os direitos reservados.
        </p>
        <p class="footer__oab-note">
          Este site está em conformidade com o Provimento 205/2021 do Conselho Federal da OAB.
          As informações aqui contidas são de caráter meramente informativo e não constituem
          aconselhamento jurídico.
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const year = new Date().getFullYear()
</script>

<style scoped>
.footer {
  background: #050505;
  position: relative;
}

.footer__top-line {
  height: 1px;
  background: linear-gradient(90deg, transparent, var(--color-gold), transparent);
}

.footer__container {
  display: grid;
  grid-template-columns: 1.2fr 1fr 1fr 1.2fr;
  gap: var(--space-xl);
  padding-top: var(--space-2xl);
  padding-bottom: var(--space-2xl);
}

/* Brand */
.footer__logo {
  display: block;
  margin-bottom: var(--space-sm);
}

.footer__logo img {
  width: 54px;
  height: 54px;
  object-fit: contain;
}

.footer__brand-name {
  font-family: var(--font-display);
  font-size: 0.9rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--color-cream);
  line-height: 1.2;
}

.footer__brand-sub {
  font-family: var(--font-display);
  font-size: 0.6rem;
  letter-spacing: 0.25em;
  text-transform: uppercase;
  color: var(--color-gold);
  margin-bottom: 4px;
}

.footer__brand-oab {
  font-family: var(--font-display);
  font-size: 0.6rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--color-text-muted);
  margin-bottom: var(--space-sm);
}

.footer__brand-desc {
  font-size: 0.82rem;
  color: var(--color-text-muted);
  line-height: 1.7;
  margin-bottom: var(--space-md);
}

.footer__social {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-family: var(--font-display);
  font-size: 0.7rem;
  letter-spacing: 0.1em;
  color: var(--color-gold);
  border: 1px solid var(--color-border);
  padding: 0.5em 1em;
  transition: all var(--transition);
}

.footer__social:hover {
  background: var(--color-gold-pale);
  border-color: var(--color-gold);
  color: var(--color-gold-light);
}

/* Nav */
.footer__nav-title {
  font-family: var(--font-display);
  font-size: 0.65rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--color-gold);
  margin-bottom: var(--space-md);
  padding-bottom: var(--space-sm);
  border-bottom: 1px solid var(--color-border-subtle);
}

.footer__nav-list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.footer__nav-link {
  font-size: 0.84rem;
  color: var(--color-text-muted);
  transition: color var(--transition), padding-left var(--transition);
}

.footer__nav-link:hover {
  color: var(--color-text);
  padding-left: 4px;
}

/* Offices */
.footer__address {
  font-style: normal;
  font-size: 0.82rem;
  color: var(--color-text-muted);
  margin-bottom: var(--space-md);
  line-height: 1.7;
}

.footer__address-name {
  font-family: var(--font-display);
  font-size: 0.68rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-text);
  margin-bottom: 4px;
}

.footer__address a {
  color: var(--color-gold);
  display: block;
  margin-top: 4px;
}

/* Bottom */
.footer__bottom {
  border-top: 1px solid var(--color-border-subtle);
  padding: var(--space-md) 0;
}

.footer__bottom-inner {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.footer__copy {
  font-family: var(--font-display);
  font-size: 0.65rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--color-text-muted);
}

.footer__oab-note {
  font-size: 0.72rem;
  color: rgba(122, 115, 103, 0.6);
  line-height: 1.6;
  max-width: 80ch;
}

@media (max-width: 1024px) {
  .footer__container {
    grid-template-columns: 1fr 1fr;
    gap: var(--space-xl) var(--space-lg);
  }
}

@media (max-width: 600px) {
  .footer__container {
    grid-template-columns: 1fr;
    gap: var(--space-lg);
    padding-top: var(--space-xl);
    padding-bottom: var(--space-xl);
  }
}
</style>
