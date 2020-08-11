<template>
  <div>
    <Select />
  </div>
</template>
<script>
import Select from '~/components/Institute/select'
export default {
  components: {
    Select,
  },
  transition(to, from) {
    if (to) {
      return 'slide-fade'
    }
  },
}
</script>
<style scoped></style>
