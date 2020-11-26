<template>
  <div>
    <h3 v-if="heading">{{ heading }}</h3>
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    heading: { type: String, default: '' },
  },
}
</script>
