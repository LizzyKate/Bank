<template>
  <div>
    <main>
      <div class="container">
        <nuxt-link to="/Transaction" class="back">
          <img src="/img/back.svg" />
        </nuxt-link>
        <div class="identifaction">
          <div class="pic image">
            <img :src="`/img/${currentImage[0]}`" class="" alt="" />
          </div>
          <div class="accountName">
            <h5>{{ currentImage[1] }}</h5>
          </div>
          <div class="accountId">
            <h5>Account Id: {{ currentImage[2] }}</h5>
          </div>
          <form class="form">
            <div>
              <label for="name"> Name: </label>
              <input id="name" v-model="name" class="search" />
            </div>
            <div>
              <label for="password"> Password: </label>

              <input
                id="password"
                v-model="pass"
                type="password"
                class="search"
              />
            </div>
            <div class="logOut">
              <div id="special" class="powered">
                <button>
                  Update
                </button>
              </div>
              <nuxt-link to="/Login">
                <div id="special" class="powered">
                  <button>
                    Log Out
                  </button>
                </div>
              </nuxt-link>
            </div>
          </form>
        </div>
      </div>
    </main>
  </div>
</template>
<script>
export default {
  data() {
    return {
      name: 'Jhon Doe',
      pass: 12345,
    }
  },
  computed: {
    currentImage() {
      const move = this.$store.state.pay.image
      const propertyValue = Object.values(move)
      return propertyValue
    },
  },
}
</script>
<style scoped></style>
