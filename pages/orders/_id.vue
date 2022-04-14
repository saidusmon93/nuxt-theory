<template>
  <section>
    <div class="w-50 m-auto">
      <div class="col-sm-12 my-auto">
        <table class="table table-bordered table hover text-center">
          <thead>
            <tr>
              <td> Count </td>
              <td> Order times </td>
            </tr>
          </thead>
          <tbody>
            <tr  v-for="detail in Orders" :key="detail.id">
              <td style="text-align: center">
                {{detail.count}}
              </td>
              <td> {{detail.created_at}} </td>
            </tr>
          </tbody>
        </table>
        <div style="text-align: center">
          <nuxt-link class="btn btn-primary" to="/orders"> Back</nuxt-link>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  validate({params}) {
    return true // /^\d+$/.test(params.id);
  },
  async asyncData({ params, error, store }) {
    const ingredient = await store.dispatch("ORDER_DETAILS", params.id);
    return { ingredient };
  },
  computed: {
    Orders() {
      return this.$store.getters.detail;
    },
    }
};
</script>
