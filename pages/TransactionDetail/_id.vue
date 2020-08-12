<template>
  <div>
    <Root />
  </div>
</template>
<script>
import Root from '~/components/TransactionDetails/root'
export default {
  components: {
    Root,
  },
  transition(to, from) {
    if (to) {
      return 'slide-fade'
    }
  },
}
</script>
<style scoped></style>
