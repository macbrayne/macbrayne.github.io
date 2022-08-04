<template>
  <v-responsive max-width="20rem">
    <v-card outlined class="card">
      <h3 v-if="heading">{{ heading }}</h3>
      <slot />
    </v-card>
  </v-responsive>
</template>

<script>
export default {
  props: {
    heading: { type: String, default: '' },
  },
}
</script>

<style>
.card {
  padding: 1em;
}
</style>
