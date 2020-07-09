export const state = () => ({
  categories: [
    "Top headlines",
    "Business",
    "Entertainment",
    "General",
    "Health",
    "Science",
    "Sports",
    "Technology"
  ],
  articles: []
});

export const mutations = {
  SET_ARTICLES(state, data) {
    state.articles = data;
  },
  UPDATE_ARTICLES(state, data) {
    state.articles = data;
  }
};

export const actions = {
  async loadArticles({ commit }) {
    const { articles } = await this.$axios.$get(
      `https://newsapi.org/v2/top-headlines?country=us&apiKey=2dcb0240ad6848cb9ae7f7464dbfe6f3`
    );
    commit("SET_ARTICLES", articles);
  },
  async updateArticles({ commit }, { param }) {
    if (param === "top-headlines") {
      const { articles } = await this.$axios.$get(
        `https://newsapi.org/v2/top-headlines?country=us&apiKey=2dcb0240ad6848cb9ae7f7464dbfe6f3`
      );
      commit("UPDATE_ARTICLES", articles);
    } else {
      const { articles } = await this.$axios.$get(
        `https://newsapi.org/v2/top-headlines?country=us&category=${param}&apiKey=2dcb0240ad6848cb9ae7f7464dbfe6f3`
      );
      commit("UPDATE_ARTICLES", articles);
    }
  }
};
