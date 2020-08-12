<template>
  <div>
    <Detail :information="currentInfo" />
    <!-- <Detail
      :name="currentInfo.name"
      :time="currentInfo.time"
      :date="currentInfo.date"
      :paid="currentInfo.paid"
      :from="currentInfo.accountId"
      :category="currentInfo.category"
      :amount="currentInfo.amount"
    /> -->
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
      console.log(meter)
      return meter.find((e) => e.accountId === +this.$route.params.id)
    },
  },
}
</script>
<style></style>
