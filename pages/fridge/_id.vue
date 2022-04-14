<template>
  <section class="w-50 m-auto font">
    <table class="table table-bordered text-center mt-3 table-sm">
      <thead>
        <tr>
          <td colspan="2">
            <div class="d-flex justify-content-between">
              <div class="w-100 p-3">
                <select
                  v-model="food.id"
                  class="custom-select small"
                  id="inputGroupSelect01"
                >
                  <option selected>Choose...</option>
                  <option
                    v-for="food in products.foods"
                    :key="food.id"
                    :value="food.id"
                  >
                    {{ food.name }}
                  </option>
                </select>
              </div>
              <div class="w-100 p-3">
                <input
                  type="text"
                  class="form-control small"
                  placeholder="Amount"
                  v-model="food.amount"
                />
              </div>
              <div class="p-3">
                <button
                  type="button"
                  class="btn btn-outline-success small"
                  @click="makeFood()"
                >
                  Success
                </button>
              </div>
            </div>
          </td>
        </tr>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Amount</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in products.kitchens" :key="item.product.id">
          <td scope="row">
            {{ item.product.name }}
          </td>
          <td>
            <input
              type="text"
              class="form-control small w-50 m-auto"
              :placeholder="item.total"
            />
          </td>
        </tr>
      </tbody>
    </table>

    <div class="text-center mb-3">
      <button
        type="button"
        class="btn btn-outline-success"
        @click="returnProducts()"
      >
        Return Products
      </button>
      <nuxt-link to="/fridge" type="button" class="btn btn-outline-info"
        >Back</nuxt-link
      >
    </div>
  </section>
</template>

<script>
export default {
  async fetch({ store, params }) {
    await store.dispatch("fridge/getProducts", params.id);
  },
  data() {
    return {
      food: {
        id: "",
        amount: "",
      },
    };
  },
  computed: {
    products() {
      return this.$store.getters["fridge/products"];
    },

    name() {
      const result = {};
      for (let key in this.products.kitchens) {
        const id = this.products.kitchens[key].product_id;
        result[id] = this.products.kitchens[key].total;
      }
      return result;
    },
  },
  methods: {
    async returnProducts() {
      this.$store.dispatch("fridge/returnProducts", this.name);
      console.log(this.name);
      await this.$store.dispatch("fridge/getProducts", this.$route.params.id);
    },
    async makeFood() {
      this.$store.dispatch("fridge/makeFood", this.food);
      await this.$store.dispatch("fridge/getProducts", this.$route.params.id);
      (this.food.id = ""),
        (this.food.amount = ""),
        console.log(this.$route.params.id);
    },
  },
};
</script>

<style scoped>
.small {
  height: 30px;
  padding: 0 10px;
}
.font {
  font-size: 0.9rem;
  font-weight: normal;
}
</style>
