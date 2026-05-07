<template>
  <div>
    <AppHeader />

    <main id="main-content">
      <HeroSection />
      <StatsSection />
      <PreQualSection />
      <AboutSection />
      <ReviewsSection />
      <ServicesSection />
      <PracticeAreasSection />
      <ProcessSection />
      <OfficesSection />
      <CTASection />
    </main>

    <AppFooter />
    <AppWhatsApp />
  </div>
</template>

<script setup lang="ts">
// JSON-LD structured data — two LocalBusiness schemas for both offices
useHead({
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify([
        {
          '@context': 'https://schema.org',
          '@type': ['LegalService', 'LocalBusiness'],
          '@id': 'https://advogadowagnervaladao.com.br#escritorio-1',
          name: 'Wagner Valadão Advocacia — Vila Joaniza',
          legalName: 'Wagner Valadão Advocacia',
          image: 'https://advogadowagnervaladao.com.br/images/logo.png',
          url: 'https://advogadowagnervaladao.com.br',
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
            'Assessoria jurídica em Direito do Trabalho e Direito Previdenciário em São Paulo. Rescisão indireta, aposentadoria, auxílio doença, acidente de trabalho e mais.',
          areaServed: 'São Paulo',
          knowsAbout: [
            'Direito do Trabalho',
            'Direito Previdenciário',
            'Rescisão Indireta',
            'Aposentadoria',
            'Auxílio Doença',
            'Acidente de Trabalho',
            'BPC LOAS',
            'Pensão por Morte',
          ],
          sameAs: ['https://advogadowagnervaladao.com.br'],
        },
        {
          '@context': 'https://schema.org',
          '@type': ['LegalService', 'LocalBusiness'],
          '@id': 'https://advogadowagnervaladao.com.br#escritorio-2',
          name: 'Wagner Valadão Advocacia — Balneário São Francisco',
          legalName: 'Wagner Valadão Advocacia',
          image: 'https://advogadowagnervaladao.com.br/images/logo.png',
          url: 'https://advogadowagnervaladao.com.br',
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
            'Assessoria jurídica em Direito do Trabalho e Direito Previdenciário em São Paulo. Rescisão indireta, aposentadoria, auxílio doença, acidente de trabalho e mais.',
          areaServed: 'São Paulo',
          knowsAbout: [
            'Direito do Trabalho',
            'Direito Previdenciário',
            'Rescisão Indireta',
            'Aposentadoria',
            'Auxílio Doença',
            'Acidente de Trabalho',
            'BPC LOAS',
            'Pensão por Morte',
          ],
          sameAs: ['https://advogadowagnervaladao.com.br'],
        },
        {
          '@context': 'https://schema.org',
          '@type': 'Person',
          name: 'Wagner Valadão',
          jobTitle: 'Advogado',
          worksFor: {
            '@type': 'LegalService',
            name: 'Wagner Valadão Advocacia',
          },
          knowsAbout: ['Direito do Trabalho', 'Direito Previdenciário'],
          url: 'https://advogadowagnervaladao.com.br',
        },
        {
          '@context': 'https://schema.org',
          '@type': 'WebSite',
          name: 'Wagner Valadão Advocacia',
          url: 'https://advogadowagnervaladao.com.br',
          description:
            'Advogado Trabalhista em São Paulo — assessoria jurídica em Direito do Trabalho e Previdenciário.',
          potentialAction: {
            '@type': 'SearchAction',
            target: 'https://advogadowagnervaladao.com.br/?s={search_term_string}',
            'query-input': 'required name=search_term_string',
          },
        },
      ]),
    },
  ],
})
</script>
