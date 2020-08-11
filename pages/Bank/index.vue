<template>
  <div>
    <Bank />
  </div>
</template>
<script>
import Bank from '~/components/Bank/bank'
export default {
  components: {
    Bank,
  },
  transition(to) {
    if (to) {
      return 'slide-fade'
    }
  },
}
</script>
<style scoped></style>
