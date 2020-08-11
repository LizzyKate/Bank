<template>
  <div>
    <Login />
  </div>
</template>
<script>
import Login from '~/components/Login/log'
export default {
  components: {
    Login,
  },
  transition(to, from) {
    if (to) {
      return 'slide-fade'
    }
  },
}
</script>
<style scoped></style>
