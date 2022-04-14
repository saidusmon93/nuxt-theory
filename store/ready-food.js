export const state = () => ({
  readyFood: [],
})

export const mutations = {
  setReadyFood(state, readyFood) {
    state.readyFood = readyFood
  }
}
export const actions = {
  async getReadyFood({
    commit
  }) {
    await this.$axios.$get('/ready/food')
      .then(res => {
        commit('setReadyFood', res.getFoods)
      })
      .catch(err => {
        console.log(err)
      })
  }
}
export const getters = {
  readyFood: state => state.readyFood,
}
