<template>
  <v-responsive>
    <v-card outlined class="card">
      <h3 v-if="heading">
        <a :href="link">{{ heading }}</a>
      </h3>
      <slot />
    </v-card>
  </v-responsive>
</template>

<script>
export default {
  props: {
    heading: { type: String, default: '' },
    link: { type: String, default: '' },
  },
}
</script>

<style>
.card {
  padding: 1em;
}
</style>
