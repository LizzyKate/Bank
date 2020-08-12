<template>
  <div>
    <main>
      <div class="container">
        <div class="event">
          <div class="">
            <nuxt-link to="/Transaction">
              <img src="/img/back.svg" />
            </nuxt-link>
          </div>
          <div class="title">
            <h5>Transaction</h5>
          </div>
        </div>
        <div class="lined"></div>
        <div class="benefactor">
          <div class="identity">
            <p>{{ information.name }}</p>
          </div>
          <div class="amount">
            <h6>{{ '#' + information.amount }}</h6>
          </div>
        </div>
        <div class="reciept">
          <div class="paidOn">
            <div class="session">
              <div class="from">
                <div v-if="information.paid">
                  <p>Paid On</p>
                </div>
                <div v-else>Recieved on</div>
              </div>
              <div class="explain">
                <h6>{{ information.date }} at {{ information.time }}</h6>
              </div>
            </div>
          </div>
          <div class="lined"></div>
          <div class="method">
            <div class="session">
              <div class="from">
                <p>Payment Method</p>
              </div>
              <div class="explain">
                <div v-if="information.paid">
                  <h6>Money Paid</h6>
                </div>
                <div v-else>
                  <h6>Money Recieved</h6>
                </div>
              </div>
            </div>
          </div>
          <div class="lined"></div>
          <div class="id">
            <div class="session">
              <div class="from">
                <p>Account Id</p>
              </div>
              <div class="explain">
                <div v-if="information.paid">
                  <h6>{{ information.accountId }}</h6>
                </div>
                <div v-else-if="information.recieved">
                  <h6>{{ information.accountId }}</h6>
                </div>
              </div>
            </div>
          </div>
          <div class="lined"></div>
          <div class="category">
            <div class="session">
              <div class="from">
                <p>Category</p>
              </div>
              <div class="explain">
                <h6>{{ information.category }}</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>
<script>
export default {
  props: {
    information: {
      type: Object,
      required: true,
    },
  },
}
</script>
<style scoped></style>
