<template>
  <section>
    <div class="w-50 m-auto">
      <div class="col-sm-12 my-auto">
        <table class="table table-striped table-hover mt-3">
          <div class="text-center">
            <h2>Food Ingredients</h2>
            <h1 >

            </h1>
          </div>
          <tbody>
            <tr v-for="(detail, index) of ingredients.details" :key="index">
              <td style="text-align: center">
                {{ detail.product.name }} -------› {{ detail.portion }}
              </td>
            </tr>
          </tbody>
        </table>
        <div style="text-align: center">
          <nuxt-link class="btn btn-primary" to="/menu"> Back</nuxt-link>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  validate(context) {
    return /^\d+$/.test(context.params.id);
  },
  async asyncData({ params, error, store }) {
    const ingredient = await store.dispatch("getIngredient", params.id);
    return { ingredient };
  },
  computed: {
    ingredients() {
      return this.$store.getters.Ingredients;
    },
    }
};
</script>
