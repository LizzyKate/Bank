<template>
  <div>
    <main id="swup" class="transition-fade">
      <div id="link" class="container">
        <div class="box-container">
          <div class="box-1"></div>
          <div class="box-2"></div>
          <div class="box-3"></div>
          <div class="box-4"></div>
        </div>
        <div class="link">
          <img src="img/link.png" class="scale-in-center" />
        </div>
        <div class="linked-images">
          <div><img src="img/logo.png" /></div>
          <div><img src="img/Group 5320.png" /></div>
          <div>
            <img src="img/lastgtb.png" style="margin-left: 7px;" />
          </div>
        </div>
        <h1 id="title">
          Account Linked!
        </h1>
        <p class="subtitle">
          Your bank account has been succesfully linked to <b> Muney. </b>
        </p>
        <nuxt-link to="/Institution">
          <button class="select_account">
            Continue
          </button>
        </nuxt-link>

        <div class="powered">
          <button>
            Link another account
          </button>
        </div>
      </div>
    </main>
  </div>
</template>
<script>
export default {}
</script>
<style scoped></style>
