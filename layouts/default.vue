<template>
  <div>
    <div id="skip"><a href="#main-content">Skip to Main Content</a></div>
    <the-header />
    <nuxt id="main-content" role="main" />
    <the-footer />
  </div>
</template>

<script>
import TheHeader from '~/components/TheHeader.vue'
import TheFooter from '~/components/TheFooter.vue'

export default {
  components: {
    TheHeader,
    TheFooter,
  },
}
</script>
