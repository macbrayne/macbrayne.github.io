<template>
  <base-card :heading="heading" :link="link">
    <slot></slot>
  </base-card>
</template>

<script>
export default {
  props: {
    heading: { type: String, default: '' },
    link: { type: String, default: '' },
    description: { type: String, default: '' },
  },
}
</script>

<style>
.card {
  margin: 1em;
}
</style>
