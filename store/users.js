export const state = () => ({
  users: []
})
export const mutations = {
  setUsers(state, users) {
    state.users = users
  }
}

export const actions = {
  async fetchUsers({
    commit
  }) {
    try {
      const users = await this.$axios.$get('https://jsonplaceholder.typicode.com/users')
      commit('setUsers', users)
    } catch (e) {
      throw (e)
    }

  },
  async fetchUsersById({}, userId) {
    try {
      const user = await this.$axios.$get(`https://jsonplaceholder.typicode.com/users/${userId}`)
      return user
    } catch (e) {
      error(e)
    }
  },
}
export const getters = {
  users: state => state.users
}
