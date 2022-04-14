export const state = () => ({
  ingredients: [],
  details: [],
})
export const mutations = {
  clearToken(state) {
    state.token = null
  },
  setIngredients(state, ingredients) {
    state.ingredients = ingredients
  },
  SET_ORDERS(state, detail) {
    state.details = detail
  }

}
export const actions = {
  async ORDER_DETAILS({
    commit,
    state,getters
  }, payload) {
    await this.$axios.$get(`/orders/detail/${payload}`)
      .then(res => {
        commit('SET_ORDERS', res.detail.data)
        console.log(getters.detail)
      })
      .catch(error => {
        console.log(error)
      })
  },
  async getIngredient({
    commit,
    state
  }, payload) {
    await this.$axios.$get(`/foods/ingredient/${payload}`)
      .then(res => {
        commit('setIngredients', res)
        console.log(res)
      })
      .catch(error => {
        console.log(error)
      })
  },
  logout({
    commit
  }) {
    commit('clearToken')
  },
  async nuxtServerInit({
    dispatch
  }) {
    await dispatch('users/fetchUsers')
  },
  async postOrders({
    commit,
    state
  }, payload) {
    await this.$axios.$post('/orders/store', {
      name: payload,
    })
    .then(res => {
      this.$toast.success(res)
    })
    .catch(err => {
      this.$toast.error(err.message);
    })
  }
}
export const getters = {
  Ingredients: state => state.ingredients,
  Orders: state => state.orders,
  detail: state => state.details,

}
