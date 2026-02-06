<template>
  <v-app>
    <the-header />
    <v-main>
      <nuxt id="main-content" class="main-content" role="main" />
    </v-main>
    <the-footer />
  </v-app>
</template>

<script>
export default {
  head() {
    return {
      link: [
        {
          rel: 'canonical',
          href: 'https://florentin-schleuss.de' + this.$route.path,
        },
      ],
    }
  },
}
</script>

<style>
.main-content {
  word-wrap: break-word;
}

.main-content :first-child {
  margin-top: 0;
}

@media screen and (min-width: 64em) {
  .main-content {
    max-width: 64rem;
    padding: 2rem 6rem;
    margin: 0 auto;
    font-size: 1.1rem;
  }
}

@media screen and (min-width: 42em) and (max-width: 64em) {
  .main-content {
    padding: 2rem 4rem;
    font-size: 1.1rem;
  }
}

@media screen and (max-width: 42em) {
  .main-content {
    padding: 2rem 1rem;
    font-size: 1rem;
  }
}

.main-content img {
  max-width: 100%;
}

.main-content h1,
.main-content h2,
.main-content h3,
.main-content h4,
.main-content h5,
.main-content h6 {
  margin-top: 2rem;
  margin-bottom: 1rem;
  font-weight: normal;
  color: $theme-color-base;
}

.main-content p {
  margin-bottom: 1em;
}
</style>
