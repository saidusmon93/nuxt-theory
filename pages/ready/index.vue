<template>
  <div class="w-50 m-auto">
    <h4 class="text-center">Ready Foods</h4>
    <table class="table table-striped">
      <thead class="thead-dark">
        <tr>
          <th>Name</th>
          <th>Portion</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(food,index) in readyFoods" :key="index">
          <td>{{food.food.name}}</td>
          <td> {{food.amount}} </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  async fetch({ store, error, params }) {
    await store.dispatch("ready-food/getReadyFood");
  },
  computed: {
    readyFoods() {
      return this.$store.getters["ready-food/readyFood"];
    },
  },
};
</script>

<style></style>
