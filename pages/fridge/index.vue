<template>
  <section class="w-50 m-auto">
    <table class="table table-bordered table-striped text-center mt-3">
      <thead>
        <tr>
          <th>Days | Product amount</th>
          <th>Amount</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in dailys" :key="index">
          <td>
            <span class="cursor" @click="toAmountProd(item.date)">
              {{ item.date }}
            </span>
          </td>
          <td>{{ item.total }}</td>
        </tr>
      </tbody>
    </table>
  </section>
</template>

<script>
export default {
  async asyncData({ store }) {
    const daily = await store.dispatch("fridge/getDaily");
    return { daily };
  },
  computed: {
    dailys() {
      return this.$store.getters["fridge/daily"];
    },
  },
  methods: {
    toAmountProd(date) {
      this.$router.push("/fridge/" + date);
    },
  },
};
</script>

<style scoped>
.cursor {
  cursor: pointer;
}
</style>
