<template>
  <div>
    <main class="change">
      <div class="container">
        <div class="profile">
          <div class="send">
            <nuxt-link :to="'/Profile/' + user._id" class="remove">
              <div class="name">
                <div class="pic">
                  <img :src="`/img/${pic.pic}`" class="" alt="" />
                </div>
                <div class="greet">
                  <h5>Hi, {{ user.name }}</h5>
                </div>
              </div>
            </nuxt-link>
            <nuxt-link to="/Send" class="money">
              <div class="">
                <p>Send Money</p>
              </div>
            </nuxt-link>
          </div>
          <div class="balance">
            <div class="describe">
              <p>Account Balance</p>
            </div>
            <div class="naira">
              <h4>#{{ user.total }}</h4>
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
                  <nuxt-link
                    :to="'/TransactionDetail/' + detail.accountId"
                    class="remove"
                  >
                    <div class="first">
                      <div class="person">
                        <div>
                          <h5>{{ detail.name }}</h5>
                        </div>
                        <div>
                          <h6>#{{ detail.amount }}</h6>
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
                  </nuxt-link>
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
  data() {
    return {
      user: {},
    }
  },
  computed: {
    payment() {
      return this.$store.state.pay.Info
    },
    pic() {
      return this.$store.state.pay.image
    },
  },
  async mounted() {
    this.$store.commit('spin/loading', true)
    try {
      const response = await this.$axios.$get('/user')
      this.user = response.data
      console.log(response)
    } catch (error) {
      console.log(error.response)
    }
    this.$store.commit('spin/loading', false)
  },
}
</script>
<style scoped></style>
