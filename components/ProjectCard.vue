<template>
  <base-card :heading="heading">
    <img
      v-if="imagePath"
      :src="require('~/assets/' + imagePath)"
      :alt="getAlt"
    />
    <slot></slot>
    <a :href="link">{{ heading }}</a>
  </base-card>
</template>

<script>
import BaseCard from '@/components/BaseCard'

export default {
  components: {
    BaseCard,
  },
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
