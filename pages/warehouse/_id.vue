<template>
  <div class="mt-3">
    <form class="w-50 m-auto" @submit.prevent="onSubmit">
      <div class="input-group mb-3">
        <div class="input-group-prepend">
          <span class="input-group-text"> {{amount.edit.name}} </span>
        </div>
        <input
          type="text"
          class="form-control"
          v-model="form.amount"
          aria-label="Amount (to the nearest dollar)"
        />
        <div class="input-group-append">
          <span class="input-group-text"> {{amount.edit.unit.name}}  </span>
        </div>
      </div>
      <div class="mt-2 d-flex justify-content-center">
        <button class="btn btn-primary mr-2" type="submit">Update</button>
        <nuxt-link class="btn btn-danger" to="/warehouse">Back</nuxt-link>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  validate({ params }) {
    return true; // /^\d+$/.test(params.id);
  },
  async fetch({ store, error, params }) {
    await store.dispatch("warehouse_id/getWarehouseId", params.id);
  },
  data() {
    return {
      form: {
        id: "",
        amount: "",
      },
    };
  },
  computed: {
    amount() {
      return this.$store.getters["warehouse_id/warehouse"];
    },
  },
  methods: {
    onSubmit() {
      this.form.id = this.amount.edit.id;
      this.$store.dispatch("warehouse_id/postWarehouse", this.form);
      this.form.amount = "";
      this.form.id = "";
    },
  },
};
</script>

<style></style>
