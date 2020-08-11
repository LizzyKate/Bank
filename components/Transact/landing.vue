<template>
  <div>
    <main class="change">
      <div class="container">
        <div class="profile">
          <div class="send">
            <div class="name">
              <div class="pic">
                <img src="img/profile-small-1.jpg" class="" alt="" />
              </div>
              <div class="greet">
                <h5>Hi Jhon Doe</h5>
              </div>
            </div>
            <div class="money">
              <p>Send Money</p>
            </div>
          </div>
          <div class="balance">
            <div class="describe">
              <p>Account Balance</p>
            </div>
            <div class="naira">
              <h4>#20000.00</h4>
            </div>
          </div>
          <div v-for="(transact, i) in payment" :key="i" class="cashBook">
            <div
              v-for="(newDay, a) in transact.daily"
              :key="a"
              class="transactions"
            >
              <div class="date">
                <p>{{ newDay.date }}</p>
              </div>
              <div class="modify">
                <div
                  v-for="(detail, b) in newDay.details"
                  :key="b"
                  class="detail"
                >
                  <div class="first">
                    <div class="person">
                      <div>
                        <h5>{{ detail.name }}</h5>
                      </div>
                      <div>
                        <h6>{{ detail.amount }}</h6>
                      </div>
                    </div>
                    <div class="activity">
                      <div v-if="detail.paid">
                        <p>Paid</p>
                      </div>
                      <div v-else>
                        <p>Recieved</p>
                      </div>
                    </div>
                    <div class="time">
                      <p>{{ detail.time }}</p>
                    </div>
                  </div>
                  <div class="line"></div>
                </div>
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
  computed: {
    payment() {
      return this.$store.state.pay.Info
    },
  },
}
</script>
<style scoped></style>
