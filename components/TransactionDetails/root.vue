<template>
  <div>
    <Detail :information="currentInfo" />
  </div>
</template>

<script>
import Detail from './detail'

export default {
  components: {
    Detail,
  },
  computed: {
    currentInfo() {
      const meter = this.$store.state.pay.details
      return meter.find((e) => e.accountId === +this.$route.params.id)
    },
  },
}
</script>
<style></style>
