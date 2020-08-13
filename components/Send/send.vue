<template>
  <div>
    <main class="gtb">
      <div class="container">
        <div class="back">
          <nuxt-link to="/Transaction">
            <img src="img/back.svg" />
          </nuxt-link>
        </div>

        <h1 id="title">
          Send Money
        </h1>
        <form class="form">
          <div>
            <label for="name"> Reciever Name: </label>
            <input
              id="name"
              v-model="name"
              class="search"
              type="text"
              required
            />
          </div>
          <div>
            <label for="number"> Reciever ID: </label>
            <input
              id="reciever"
              v-model="Id"
              class="search"
              type="number"
              required
            />
          </div>
          <div>
            <label for="number"> Amount </label>
            <input
              id="amount"
              v-model="amount"
              class="search"
              type="number"
              required
            />
          </div>
          <div>
            <label for="password"> Password </label>

            <input
              id="password"
              v-model="password"
              type="password"
              class="search"
              required
            />
          </div>
          <div class="decide">
            <div class="send">
              <button
                class="select_account"
                :disabled="authenticate"
                :class="{ dim: authenticate === true }"
              >
                Send Money
              </button>
            </div>
            <div class="cancel">
              <button class="select_account" @click="cancel()">
                Cancel
              </button>
            </div>
          </div>
        </form>
      </div>
    </main>
  </div>
</template>
<script>
export default {
  data() {
    return {
      name: '',
      Id: '',
      amount: '',
      password: '',
    }
  },
  computed: {
    authenticate() {
      if (
        this.name !== '' &&
        this.Id !== '' &&
        this.amount !== '' &&
        this.password !== ''
      ) {
        return false
      } else {
        return true
      }
    },
  },
  methods: {
    cancel() {
      this.name = ''
      this.Id = ''
      this.amount = ''
      this.password = ''
    },
  },
}
</script>
<style scoped>
.dim {
  opacity: 0.5;
}
</style>
