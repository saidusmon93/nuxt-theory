<template>
  <section class="w-50 m-auto">
    <div class="text-center">
      <h2>Warehouse</h2>
    </div>
    <b-button
      id="show-btn"
      class="bg-success float-right my-2"
      @click="$bvModal.show('bv-modal-warehouse')"
      >Add Products</b-button
    >
    <WarehouseModal :units="units"  />
      <table class="table table-hover table-bordered">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Amount</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="product in warehouse.data" :key="product.id">
            <td @click="toDetails(product)">{{ product.name }}</td>
            <td>
              {{ product.warehouse.amount }} {{ product.unit.name }}
              <input
                type="number"
                class="input float-right"
                v-model="addProduct[product.id]"
              />
            </td>
          </tr>
        </tbody>
      </table>
      <div class="text-center my-3">
        <button class="btn btn-primary" @click="onSubmit" >Submit</button>
      </div>

    <div class="d-flex" style="justify-content: center">
      <nav aria-label="Page navigation example">
        <ul class="pagination">
          <li
            class="page-item"
            :class="{ disabled: !pagination.prev_page_url }"
            @click.prevent="getWarehouse(pagination.prev_page_url)"
          >
            <a class="page-link" href="#" aria-label="Previous">
              <span aria-hidden="true">&laquo; Prev</span>
            </a>
          </li>
          <li class="page-item">
            <span class="page-link text-dark">
              Page {{ pagination.current_page }} of
              {{ pagination.last_page }}
            </span>
          </li>

          <li
            class="page-item"
            :class="{ disabled: !pagination.next_page_url }"
            @click.prevent="getWarehouse(pagination.next_page_url)"
          >
            <a class="page-link" href="#" aria-label="Next">
              <span aria-hidden="true"> Next &raquo;</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </section>
</template>

<script>
import WarehouseModal from "@/components/modal/warehouse.modal.vue";
export default {
  components: {
    WarehouseModal,
  },
  data() {
    return {
      units: [],
      addProduct: {},
      warehouse: [],
      pagination: {},
    };
  },
  methods: {
    toDetails(product) {
      this.$router.push("/warehouse/" + product.id);
    },
    getWarehouse(page_url) {
      page_url = page_url || "/warehouse";
      this.$axios
        .get(page_url)
        .then((res) => {
          this.warehouse = res.data.products;
          this.units  = res.data.units;
          console.log(this.units);
          this.makePagination(res.data.products);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    makePagination(res) {
      let pagination = {
        current_page: res.current_page,
        last_page: res.last_page,
        prev_page_url: res.prev_page_url,
        next_page_url: res.next_page_url,
      };
      this.pagination = pagination;
    },
    onSubmit() {
      this.$store.dispatch("warehouse_id/addFridge", this.addProduct);
      this.addProduct = {};
    },
  },
  mounted() {
    this.getWarehouse();
  },
};
</script>

<style scoped>
.input {
  width: 60px;
  height: 25px;
}
</style>
