<template>
  <div>
    <AppHeader :whatsapp-href="previdenciarioWhatsappHref" />

    <main id="main-content">
      <HeroPrevidenciario />
      <ServicosPrevidenciario />
      <AboutPrevidenciario />
      <ProcessSection :whatsapp-href="previdenciarioWhatsappHref" />
      <ReviewsSection />
      <OfficesSection
        :unit1-whatsapp-href="previdenciarioUnit1WhatsappHref"
        :unit2-whatsapp-href="previdenciarioWhatsappHref"
      />
      <CTASection
        :whatsapp-href="previdenciarioWhatsappHref"
        phone-href="tel:+5511942727198"
        phone-label="(11) 94272-7198"
      />
    </main>

    <AppFooter
      :whatsapp-href="previdenciarioWhatsappHref"
      whatsapp-label="(11) 94272-7198"
    />
    <AppWhatsAppPrevidenciario />
  </div>
</template>

<script setup lang="ts">
const previdenciarioMessage = 'ola vim pelo site gostaria de falar com um Advogado previdenciário .'
const previdenciarioWhatsappText = encodeURIComponent(previdenciarioMessage)
const previdenciarioWhatsappHref = `https://wa.me/5511942727198?text=${previdenciarioWhatsappText}`
const previdenciarioUnit1WhatsappHref = `https://wa.me/5511947559278?text=${previdenciarioWhatsappText}`

useHead({
  title: 'Advogado Previdenciário em São Paulo | Wagner Valadão Advocacia',
  meta: [
    {
      name: 'description',
      content:
        'Aposentadoria, auxílio-doença, BPC/LOAS e revisão de benefícios INSS. Análise prévia pelo WhatsApp em 24h.',
    },
    {
      property: 'og:title',
      content: 'Advogado Previdenciário em São Paulo | Wagner Valadão Advocacia',
    },
    {
      property: 'og:description',
      content:
        'Aposentadoria, auxílio-doença, BPC/LOAS e revisão de benefícios INSS. Análise prévia pelo WhatsApp em 24h.',
    },
    {
      property: 'og:url',
      content: 'https://advogadowagnervaladao.com.br/previdenciario',
    },
  ],
  link: [
    {
      rel: 'canonical',
      href: 'https://advogadowagnervaladao.com.br/previdenciario',
    },
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify([
        {
          '@context': 'https://schema.org',
          '@type': ['LegalService', 'LocalBusiness'],
          '@id': 'https://advogadowagnervaladao.com.br/previdenciario#escritorio-1',
          name: 'Wagner Valadão Advocacia — Previdenciário | Vila Joaniza',
          legalName: 'Wagner Valadão Advocacia',
          image: 'https://advogadowagnervaladao.com.br/images/logo.png',
          url: 'https://advogadowagnervaladao.com.br/previdenciario',
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
            'Advogado Previdenciário em São Paulo — aposentadoria, auxílio-doença, BPC/LOAS, pensão por morte e revisão de benefícios INSS.',
          areaServed: 'São Paulo',
          knowsAbout: [
            'Direito Previdenciário',
            'Aposentadoria por Idade',
            'Aposentadoria por Tempo de Contribuição',
            'Aposentadoria Especial',
            'Auxílio-Doença',
            'Auxílio Acidente',
            'BPC LOAS',
            'Pensão por Morte',
            'Revisão de Benefícios',
          ],
          sameAs: ['https://advogadowagnervaladao.com.br'],
        },
        {
          '@context': 'https://schema.org',
          '@type': ['LegalService', 'LocalBusiness'],
          '@id': 'https://advogadowagnervaladao.com.br/previdenciario#escritorio-2',
          name: 'Wagner Valadão Advocacia — Previdenciário | Balneário São Francisco',
          legalName: 'Wagner Valadão Advocacia',
          image: 'https://advogadowagnervaladao.com.br/images/logo.png',
          url: 'https://advogadowagnervaladao.com.br/previdenciario',
          telephone: '+5511942727198',
          address: {
            '@type': 'PostalAddress',
            streetAddress: 'Av. das Garoupas',
            addressLocality: 'São Paulo',
            addressRegion: 'SP',
            postalCode: '',
            addressCountry: 'BR',
          },
          description:
            'Advogado Previdenciário em São Paulo — aposentadoria, auxílio-doença, BPC/LOAS, pensão por morte e revisão de benefícios INSS.',
          areaServed: 'São Paulo',
          knowsAbout: [
            'Direito Previdenciário',
            'Aposentadoria por Idade',
            'Aposentadoria por Tempo de Contribuição',
            'Aposentadoria Especial',
            'Auxílio-Doença',
            'Auxílio Acidente',
            'BPC LOAS',
            'Pensão por Morte',
            'Revisão de Benefícios',
          ],
          sameAs: ['https://advogadowagnervaladao.com.br'],
        },
      ]),
    },
  ],
})
</script>
