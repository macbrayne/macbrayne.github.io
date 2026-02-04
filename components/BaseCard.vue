<template>
  <v-responsive>
    <v-card outlined class="card">
      <h3 v-if="heading">
        <a v-if="link" :href="link">{{ heading }}</a>
        <span v-else>{{ heading }}</span>
        <span v-if="status">- {{ status }}</span>
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
    status: { type: String, default: '' },
  },
}
</script>

<style>
.card {
  padding: 1em;
}
</style>
