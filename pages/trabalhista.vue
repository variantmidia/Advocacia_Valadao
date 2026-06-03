<template>
  <div>
    <AppHeaderTrabalhista />

    <main id="main-content">
      <HeroTrabalhista />
      <StatsSection />
      <PreQualSection />
      <PracticeAreasTrabalhista />
      <AboutSection />
      <ReviewsSection />
      <ProcessSection />
      <OfficesSection />
      <CTASection />
    </main>

    <AppFooter />
    <AppWhatsApp />
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Advogado Trabalhista em São Paulo | Wagner Valadão Advocacia',
  meta: [
    {
      name: 'description',
      content:
        'Rescisão indireta, vínculo empregatício, horas extras, FGTS e acidente de trabalho. Análise prévia pelo WhatsApp, sem custos.',
    },
    {
      property: 'og:title',
      content: 'Advogado Trabalhista em São Paulo | Wagner Valadão Advocacia',
    },
    {
      property: 'og:description',
      content:
        'Rescisão indireta, vínculo empregatício, horas extras, FGTS e acidente de trabalho. Análise prévia pelo WhatsApp, sem custos.',
    },
    {
      property: 'og:url',
      content: 'https://advogadowagnervaladao.com.br/trabalhista',
    },
  ],
  link: [
    {
      rel: 'canonical',
      href: 'https://advogadowagnervaladao.com.br/trabalhista',
    },
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify([
        {
          '@context': 'https://schema.org',
          '@type': ['LegalService', 'LocalBusiness'],
          '@id': 'https://advogadowagnervaladao.com.br/trabalhista#escritorio-1',
          name: 'Wagner Valadão Advocacia — Trabalhista | Vila Joaniza',
          legalName: 'Wagner Valadão Advocacia',
          image: 'https://advogadowagnervaladao.com.br/images/logo.png',
          url: 'https://advogadowagnervaladao.com.br/trabalhista',
          telephone: '+5511947559278',
          address: {
            '@type': 'PostalAddress',
            streetAddress: 'Av. Yervant Kissajikian',
            addressLocality: 'São Paulo',
            addressRegion: 'SP',
            postalCode: '',
            addressCountry: 'BR',
          },
          geo: {
            '@type': 'GeoCoordinates',
            latitude: -23.67362287692564,
            longitude: -46.6645544613756,
          },
          openingHoursSpecification: {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
            opens: '09:00',
            closes: '18:00',
          },
          description:
            'Advogado Trabalhista em São Paulo — rescisão indireta, vínculo empregatício MEI/PJ, horas extras, FGTS e acidente de trabalho.',
          areaServed: 'São Paulo',
          knowsAbout: [
            'Direito do Trabalho',
            'Rescisão Indireta',
            'Vínculo Empregatício',
            'Horas Extras',
            'Adicional Noturno',
            'Acidente de Trabalho',
            'Dano Moral Trabalhista',
            'Verbas Rescisórias',
            'FGTS Não Depositado',
          ],
          sameAs: ['https://advogadowagnervaladao.com.br'],
        },
        {
          '@context': 'https://schema.org',
          '@type': ['LegalService', 'LocalBusiness'],
          '@id': 'https://advogadowagnervaladao.com.br/trabalhista#escritorio-2',
          name: 'Wagner Valadão Advocacia — Trabalhista | Balneário São Francisco',
          legalName: 'Wagner Valadão Advocacia',
          image: 'https://advogadowagnervaladao.com.br/images/logo.png',
          url: 'https://advogadowagnervaladao.com.br/trabalhista',
          telephone: '+5511947559278',
          address: {
            '@type': 'PostalAddress',
            streetAddress: 'Av. das Garoupas',
            addressLocality: 'São Paulo',
            addressRegion: 'SP',
            postalCode: '',
            addressCountry: 'BR',
          },
          description:
            'Advogado Trabalhista em São Paulo — rescisão indireta, vínculo empregatício MEI/PJ, horas extras, FGTS e acidente de trabalho.',
          areaServed: 'São Paulo',
          knowsAbout: [
            'Direito do Trabalho',
            'Rescisão Indireta',
            'Vínculo Empregatício',
            'Horas Extras',
            'Adicional Noturno',
            'Acidente de Trabalho',
            'Dano Moral Trabalhista',
            'Verbas Rescisórias',
            'FGTS Não Depositado',
          ],
          sameAs: ['https://advogadowagnervaladao.com.br'],
        },
      ]),
    },
  ],
})
</script>
