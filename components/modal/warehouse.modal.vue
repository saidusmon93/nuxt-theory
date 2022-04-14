<template>
  <b-modal id="bv-modal-warehouse" hide-footer>
    <template #modal-title> Add New Products </template>
    <div class="container">
      <form @submit.prevent="addProduct()">
        <input
          type="text"
          v-model="form.name"
          placeholder="Product Name"
          class="form-control"
        />
        <input
          type="text"
          v-model="form.amount"
          placeholder="Product Amount"
          class="form-control my-2"
        />
        <select
          v-model="form.unit_id"
          class="custom-select"
          id="inputGroupSelect01"
        >
          <option selected>Select unit...</option>
          <option :value="unit.id" v-for="unit in units" :key="unit.id">
            {{ unit.name }}
          </option>
        </select>
        <button class="btn btn-primary float-right my-3" type="submit">
          Insert
        </button>
      </form>
    </div>
  </b-modal>
</template>

<script>
export default {
  props: ["units"],
  data() {
    return {
      form: {
        name: "",
        amount: "",
        unit_id: "",
      },
    };
  },
  methods: {
    addProduct() {
      this.$store.dispatch("warehouse_id/addProduct", this.form);
      this.form.name ='',
      this.form.amount ='',
      this.form.unit_id ='',

      console.log(this.form);
    },
  },
};
</script>

<style></style>
