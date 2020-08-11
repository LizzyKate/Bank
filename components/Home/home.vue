<template>
  <div>
    <main>
      <div class="container">
        <div class="logo">
          <img src="img/logo.png" />
        </div>
        <h1 id="title">
          Muney links all your finance apps
        </h1>
        <p class="subtitle">
          Click “Select Account” to continue
        </p>
        <div class="features">
          <ul>
            <li>
              <img src="img/Checkmark.png" />
              <div>
                <p>Secure</p>
                <p>100% data security on Mono app</p>
              </div>
            </li>
            <li>
              <img src="img/Checkmark.png" />
              <div>
                <p>Private by design</p>
                <p>100% data security on Mono app</p>
              </div>
            </li>
            <li>
              <img src="img/Checkmark.png" />
              <div>
                <p>Finance Protection</p>
                <p>We don’t have access to your funds</p>
              </div>
            </li>
          </ul>
        </div>
        <nuxt-link to="/Institution">
          <button class="select_account">
            Select Account
          </button>
        </nuxt-link>
        <div class="powered">
          <button>
            Powered with Mono
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
