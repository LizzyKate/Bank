<template>
  <div>
    <Home />
  </div>
</template>
<script>
import Home from '~/components/Home/home'
export default {
  components: {
    Home,
  },
  transition(to, from) {
    if (to) {
      return 'slide-fade'
    }
  },
}
</script>
<style scoped></style>
