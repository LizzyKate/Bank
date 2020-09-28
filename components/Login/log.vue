<template>
  <div>
    <main class="gtb">
      <div class="container">
        <div class="back">
          <nuxt-link to="/Bank">
            <img src="img/back.svg" />
          </nuxt-link>
        </div>

        <div class="logo">
          <img src="img/Guaranty Trust Bank Logo Copy 4.png" />
        </div>

        <h1 id="title">
          GTBank Internet Banking
        </h1>
        <notifications group="foo" position="top center" />
        <form class="form" @submit.prevent="submit">
          <div>
            <label for="email"> Email: </label>
            <input id="email" v-model="email" class="search" type="email" />
          </div>
          <div>
            <label for="password"> Password </label>

            <input
              id="password"
              v-model="password"
              type="password"
              class="search"
            />
          </div>
          <!-- <nuxt-link to="/Transaction"> -->
          <button
            class="select_account"
            :disabled="authenticate"
            :class="{ dim: authenticate === true }"
            type="submit"
          >
            Login
          </button>
          <!-- </nuxt-link> -->
        </form>
      </div>
    </main>
  </div>
</template>
<script>
export default {
  data() {
    return {
      email: '',
      password: '',
    }
  },
  computed: {
    authenticate() {
      if (this.email !== '' && this.password !== '') {
        return false
      } else {
        return true
      }
    },
  },
  methods: {
    async submit() {
      this.$store.commit('spin/loading', true)
      const data = {
        email: this.email,
        password: this.password,
      }
      try {
        const response = await this.$axios.$post('/signin', data)
        console.log(response)
        localStorage.setItem('auth-token', response.data)
        this.$router.push('/Transaction')
      } catch (error) {
        console.log(error.response)
        if (error.response?.data?.error) {
          this.$notify({
            group: 'foo',
            title: 'Important Message',
            type: 'error',
            text: error.response.data.error,
          })
        } else {
          this.$notify({
            group: 'foo',
            title: 'Important Message',
            type: 'error',
            text: 'An Error Occured',
          })
        }
      }
      this.$store.commit('spin/loading', false)
    },
  },
}
</script>
<style scoped>
.dim {
  opacity: 0.5;
}
</style>
