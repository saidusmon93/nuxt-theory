export const state = () => ({
  daily: null,
  products: [],
})
export const mutations = {
  setDaily(state, daily) {
    state.daily = daily
  },
  setProducts(state, products) {
    state.products = products
  },

}
export const actions = {
  async returnProducts({}, product) {
    try {
      const response = await this.$axios.$post('/return/product', {
        name: product
      })
      this.$toast.success(response)
    } catch (error) {
      console.log(error)
    }
  },
  async makeFood({}, payload) {
    try {
      const res = await this.$axios.$post('/cook/food', {
        food_id: payload.id,
        amount: payload.amount,
      })
      this.$toast.success(res)
      console.log(res)
    } catch (e) {
      console.log(e)
    }
  },
  async getProducts({
    commit
  }, payload) {
    await this.$axios.$get(`/product/days/${payload}`).then(res => {
        commit('setProducts', res)
        console.log('is', res)
      })
      .catch(err => {
        console.log(err)
      })
  },
  async getDaily({
    commit
  }) {
    await this.$axios.$get('/fridge').then(res => {
        commit('setDaily', res.dailys)
        console.log(res.dailys)
      })
      .catch(err => {
        console.log(err)
      })
  }
}
export const getters = {
  daily: state => state.daily,
  products: state => state.products
}
