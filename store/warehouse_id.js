export const state = () => ({
  warehouse_id: null
})

export const mutations = {
  setWarehouseId(state, warehouse_id) {
    state.warehouse_id = warehouse_id
  }
}
export const actions = {
  async addProduct({},payload) {
    await this.$axios.post('/add/product',{
      amount:payload.amount,
      name:payload.name,
      unit_id:payload.unit_id,
    })
    .then(res => {
      console.log(res)
    })
    .catch(e => {
      console.log(e)
    })

  },
  async getWarehouseId({
    commit
  }, payload) {
    await this.$axios.$get('/edit/Warehouse/' + payload).then(res => {
        commit('setWarehouseId', res)
      })
      .catch(err => {
        console.log(err)
      })

  },
  async postWarehouse({}, payload) {
    await this.$axios.$post(`/update/Warehouse/Products/${payload.id} `, {
      id: payload.id,
      amount: payload.amount,
    }).then(res => {
      this.$toast.success(res)
      console.log(res)
    })
  },
  async addFridge({}, payload) {
    await this.$axios.$post('/storeToFridge', {
      name: payload
    })  .then(res => {
      this.$toast.success(res)
      console.log(res)
    }).catch(err => {
      console.log(err)
    })
  }

}
export const getters = {
  warehouse: state => state.warehouse_id
}
