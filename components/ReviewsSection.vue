<template>
  <section class="section section--alt reviews" aria-labelledby="reviews-title">
    <div class="container">
      <div class="reviews__header reveal">
        <p class="label">Depoimentos</p>
        <h2 id="reviews-title" class="section-title">
          O que nossos clientes<br>falam sobre nós
        </h2>
        <p class="section-subtitle reviews__subtitle">
          Avaliações verificadas de clientes reais no Google.
        </p>
      </div>

      <div class="reviews__widget reveal reveal--delay-1">
        <div
          class="elfsight-app-171a4d6f-c666-430b-87f3-d6eb52e5d0be"
          data-elfsight-app-lazy
        ></div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
useHead({
  script: [
    {
      src: 'https://elfsightcdn.com/platform.js',
      async: true,
      tagPosition: 'bodyClose',
    },
  ],
})

useIntersectionReveal()
</script>

<style scoped>
.reviews__header {
  text-align: center;
  margin-bottom: var(--space-xl);
}

.reviews__subtitle {
  margin: 0 auto;
}

.reviews__widget {
  width: 100%;
}
</style>
