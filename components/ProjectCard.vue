<template>
  <base-card :heading="heading">
    <a :href="link">
      <v-img v-if="imagePath" :src="imagePath" :alt="getAlt()" />
      <slot></slot>
    </a>
  </base-card>
</template>

<script>
export default {
  props: {
    heading: { type: String, default: '' },
    link: { type: String, default: '' },
    description: { type: String, default: '' },
    imagePath: { type: String, default: '' },
  },
  methods: {
    getAlt() {
      return this.heading + ' image'
    },
  },
}
</script>
