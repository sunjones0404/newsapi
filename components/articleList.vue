<template>
  <b-container fluid>
    <b-card-group columns>
      <b-card
        v-for="(article, index) in articles"
        :key="index"
        border-variant="danger"
        :header="
          article.source.name ? 'Source: ' + article.source.name : 'Uncredited'
        "
        header-bg-variant="danger"
        header-text-variant="white"
        :img-src="
          article.urlToImage
            ? article.urlToImage
            : 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'
        "
        :img-alt="article.title"
        img-top
        class="card-header--reduced"
      >
        <b-card-title>
          <b-link :href="article.url" target="_blank" class="text-dark">
            {{ article.title }}
          </b-link>
        </b-card-title>
        <b-card-text>
          {{ article.description }}
        </b-card-text>
        <template v-slot:footer>
          <small class="text-muted"
            ><strong>Published:</strong>
            {{
              $moment(article.publishedAt)
                .startOf("hour")
                .fromNow()
            }}</small
          >
        </template>
      </b-card>
    </b-card-group>
  </b-container>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "articleList",
  computed: {
    ...mapState("articles", ["articles"])
  },
  created() {
    this.$store.dispatch("articles/loadArticles");
  }
};
</script>

<style>
.card-header {
  font-size: 14px;
  padding-top: 5px;
  padding-bottom: 5px;
}
</style>
