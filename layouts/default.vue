<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="danger" class="mb-3">
      <b-navbar-brand href="/">{{ appName }}</b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item-dropdown text="Categories" right>
            <b-dropdown-item
              href="#"
              v-for="(category, index) in categories"
              :key="index"
              @click="updateArticles(category)"
              >{{ category }}</b-dropdown-item
            >
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <Nuxt />
  </div>
</template>

<script>
export default {
  data() {
    return {
      appName: "The News Room"
    };
  },
  computed: {
    categories() {
      return this.$store.state.articles.categories;
    }
  },
  methods: {
    updateArticles(category) {
      let payload = {
        param: category.replace(/\s+/g, "-").toLowerCase()
      };
      this.$store.dispatch("articles/updateArticles", payload);
    }
  }
};
</script>

<style>
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}
</style>
