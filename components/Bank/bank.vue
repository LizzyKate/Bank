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
            <label for="name"> GTBank User ID: </label>
            <input id="name" class="search" value="John Doe" />
          </div>
          <div>
            <label for="password"> Password </label>

            <input id="password" type="password" class="search" />
          </div>
          <nuxt-link to="/Link">
            <button class="select_account">
              Link Account
            </button>
          </nuxt-link>
        </form>
      </div>
    </main>
  </div>
</template>
<script>
export default {}
</script>
<style scoped></style>
