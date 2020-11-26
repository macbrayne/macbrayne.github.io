<template>
  <base-card :heading="heading">
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
  },
}
</script>
