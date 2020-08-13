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
        <form class="form">
          <div>
            <label for="name"> Name: </label>
            <input id="name" v-model="name" class="search" type="text" />
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
          <nuxt-link to="/Transaction">
            <button
              class="select_account"
              :disabled="authenticate"
              :class="{ dim: authenticate === true }"
            >
              Login
            </button>
          </nuxt-link>
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
      password: '',
    }
  },
  computed: {
    authenticate() {
      if (this.name !== '' && this.password !== '') {
        return false
      } else {
        return true
      }
    },
  },
}
</script>
<style scoped>
.dim {
  opacity: 0.5;
}
</style>
