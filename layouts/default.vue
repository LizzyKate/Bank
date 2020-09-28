<template>
  <div>
    <Nuxt />
    <Load v-if="wait" />
  </div>
</template>
<script>
import Load from '~/components/spinner'
export default {
  components: {
    Load,
  },
  computed: {
    wait() {
      return this.$store.state.spin.load
    },
  },
}
</script>
<style scoped></style>
