<template>
  <div>
    <Profile />
  </div>
</template>
<script>
import Profile from '~/components/Transact/landing'
export default {
  components: {
    Profile,
  },
  transition(to, from) {
    if (to) {
      return 'slide-fade'
    }
  },
  middleware: ['auth'],
}
</script>
<style scoped></style>
