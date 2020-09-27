<template>
  <div>
    <main class="gtb">
      <div class="container">
        <div class="back">
          <nuxt-link to="/Institution">
            <img src="img/back.svg" />
          </nuxt-link>
        </div>

        <div class="logo">
          <img src="img/Guaranty Trust Bank Logo Copy 4.png" />
        </div>

        <h1 id="title">
          GTBank Internet Banking
        </h1>
        <form class="form" @submit.prevent="submit">
          <div>
            <label for="name"> Name </label>
            <input
              id="name"
              v-model="name"
              class="search"
              type="text"
              required
            />
          </div>
          <div>
            <label for="middleName"> Middle Name </label>
            <input
              id="middle"
              v-model="middleName"
              class="search"
              type="text"
              required
            />
          </div>
          <div>
            <label for="email"> Email </label>
            <input
              id="email"
              v-model="email"
              class="search"
              type="email"
              required
            />
          </div>
          <div>
            <label for="country"> Country </label>
            <input
              id="country"
              v-model="country"
              class="search"
              type="text"
              required
            />
          </div>
          <div>
            <label for="phone"> Phone Number </label>
            <input
              id="phone"
              v-model="phone"
              class="search"
              type="text"
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
          <div id="app">
            <div class="file-wrapper search">
              <input
                type="file"
                name="file-input"
                class=""
                accept="image/*"
                @input="change"
              />
              <div v-if="files.name">{{ files.name }}</div>
              <div v-else>Your Image</div>
            </div>
          </div>
          <!-- <nuxt-link to="/Link"> -->
          <button
            class="select_account"
            :disabled="authenticate"
            :class="{ dim: authenticate === true }"
            type="submit"
          >
            Link Account
          </button>
          <!-- </nuxt-link> -->
          <nuxt-link to="/Login">
            <button class="select_account">
              Already linked your account ? Log In
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
      files: {},
      name: '',
      password: '',
      email: '',
      country: '',
      phone: '',
      middleName: '',
    }
  },
  computed: {
    authenticate() {
      if (
        this.name !== '' &&
        this.password !== '' &&
        this.email !== '' &&
        this.country !== '' &&
        this.phone !== '' &&
        this.middleName !== '' &&
        this.files.name
      ) {
        return false
      } else {
        return true
      }
    },
  },
  methods: {
    change(e) {
      this.files = e.target.files[0]
    },
    async submit() {
      const data = {
        name: this.name,
        password: this.password,
        email: this.email,
        country: this.country,
        phone: this.phone,
        middleName: this.middleName,
      }
      try {
        const response = await this.$axios.$post('/signup', data)
        console.log(response)
        // localStorage.setItem('auth-token', response.data.token)
      } catch (error) {
        console.log(error)
      }
    },
  },
}
</script>
<style scoped>
.file-wrapper {
  text-align: center;
  height: 5em;
  vertical-align: middle;
  position: relative;
}

.file-wrapper input {
  position: absolute;
  top: 0;
  left: 200px;
  cursor: pointer;
  opacity: 0;
  filter: alpha(opacity=0);
  height: 100%;
}
.dim {
  opacity: 0.5;
}
</style>
