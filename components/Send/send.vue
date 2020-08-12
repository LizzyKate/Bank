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
            <input id="name" class="search" type="text" required />
          </div>
          <div>
            <label for="number"> Reciever ID: </label>
            <input id="reciever" class="search" type="number" required />
          </div>
          <div>
            <label for="number"> Amount </label>
            <input id="amount" class="search" type="number" required />
          </div>
          <div>
            <label for="password"> Password </label>

            <input id="password" type="password" class="search" required />
          </div>
          <div class="decide">
            <div class="send">
              <button class="select_account">
                Send Money
              </button>
            </div>
            <div class="cancel">
              <button class="select_account">
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
export default {}
</script>
<style scoped></style>
