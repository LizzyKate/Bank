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
        <form class="form">
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
                @change="change"
              />
              <div v-if="files.name">{{ files.name }}</div>
              <div v-else>Your Image</div>
            </div>
          </div>
          <nuxt-link to="/Link">
            <button
              class="select_account"
              :disabled="authenticate"
              :class="{ dim: authenticate === true }"
            >
              Link Account
            </button>
          </nuxt-link>
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
    }
  },
  computed: {
    authenticate() {
      if (this.name !== '' && this.password !== '' && this.files.name) {
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
  height: 200px;
}
.dim {
  opacity: 0.5;
}
</style>
