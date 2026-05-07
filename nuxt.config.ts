export default defineNuxtConfig({
  devtools: { enabled: false },
  css: ['~/assets/css/main.css'],

  app: {
    head: {
      htmlAttrs: { lang: 'pt-BR' },
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'Advogado Trabalhista em São Paulo | Wagner Valadão Advocacia',
      meta: [
        {
          name: 'description',
          content:
            'Wagner Valadão Advocacia — assessoria jurídica em Direito do Trabalho e Direito Previdenciário em São Paulo. Rescisão indireta, aposentadoria, auxílio doença, acidente de trabalho e mais. Duas unidades na capital paulista.',
        },
        {
          name: 'keywords',
          content:
            'advogado trabalhista, advogado trabalhista São Paulo, advogado previdenciário, rescisão indireta, aposentadoria, auxílio doença, acidente de trabalho, advogado previdenciário São Paulo, BPC LOAS, pensão por morte',
        },
        { property: 'og:type', content: 'website' },
        {
          property: 'og:title',
          content: 'Advogado Trabalhista em São Paulo | Wagner Valadão Advocacia',
        },
        {
          property: 'og:description',
          content:
            'Assessoria jurídica em Direito do Trabalho e Previdenciário. Duas unidades em São Paulo — Vila Joaniza e Balneário São Francisco.',
        },
        { property: 'og:url', content: 'https://advogadowagnervaladao.com.br' },
        {
          property: 'og:image',
          content: 'https://advogadowagnervaladao.com.br/images/og-image.jpg',
        },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'robots', content: 'index, follow' },
        { name: 'theme-color', content: '#080808' },
      ],
      script: [
        {
          innerHTML: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-KDQ72J8N');`,
        },
      ],
      noscript: [
        {
          innerHTML: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-KDQ72J8N" height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
          tagPosition: 'bodyOpen',
        },
      ],
      link: [
        { rel: 'canonical', href: 'https://advogadowagnervaladao.com.br' },
        { rel: 'icon', type: 'image/png', href: '/images/logo.png' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600;700;900&family=EB+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500&display=swap',
        },
      ],
    },
  },
})
