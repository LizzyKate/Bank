<template>
  <div>
    <main>
      <div class="container">
        <nuxt-link to="/" class="back">
          <img src="img/back.svg" />
        </nuxt-link>

        <h1 id="title">
          Select a financial institution 🏦
        </h1>
        <div class="search-holder">
          <img src="img/search 1.svg" class="search-icon" />
          <input
            type="search"
            class="search"
            placeholder="Search banks, fintechs etc"
          />
        </div>
        <div class="grid-layout">
          <nuxt-link to="/Bank">
            <div>
              <img src="img/Guaranty Trust Bank Logo.svg" />
            </div>
          </nuxt-link>

          <nuxt-link to="/Bank">
            <div>
              <img src="img/polaris.svg" />
            </div>
          </nuxt-link>
          <nuxt-link to="/Bank">
            <div>
              <img src="img/ccowryrise.svg" />
            </div>
          </nuxt-link>
          <nuxt-link to="/Bank">
            <div>
              <img src="img/piggy.png" />
            </div>
          </nuxt-link>
        </div>
      </div>
    </main>
  </div>
</template>
<script>
export default {}
</script>
<style scoped></style>
