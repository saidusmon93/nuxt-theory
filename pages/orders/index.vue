<template>
  <div class="container d-flex justify-content-center">
    <div class="w-50 orders text-center">
      <h2>Orders</h2>
      <div class="orders_">
        <table class="table table-hover">
          <thead>
            <tr>
              <th scope="col">Food Name</th>
              <th scope="col">Order Amount</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(order, index) in posts.data" :key="index">
              <th class="hover_cursor" @click="toOrder(order)">
                {{ order.food.name }}
              </th>
              <td>{{ order.total }}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div
        class="orders_pagianton w-100 d-flex align-items-center justify-content-center p-3"
      >
        <nav aria-label="Page navigation example">
          <ul class="pagination ">
            <li
              class="page-item "
              :class="{ disabled: !pagination.prev_page_url }"
              @click.prevent="getPost(pagination.prev_page_url)"
            >
              <a class="page-link" href="#" aria-label="Previous">
                <span aria-hidden="true">&laquo; Prev</span>
              </a>
            </li>
            <li class="page-item "><span class="page-link text-dark " >
               Page {{pagination.current_page}} of {{  pagination.last_page }}
              </span></li>

            <li
              class="page-item"
              :class="{ disabled: !pagination.next_page_url }"
              @click.prevent="getPost(pagination.next_page_url)"
            >
              <a class="page-link" href="#" aria-label="Next">
                <span aria-hidden="true"> Next &raquo;</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
export default {

  data() {
    return {
      posts: [],
      pagination: {},
    };
  },

  methods: {
    toOrder(order) {
      this.$router.push("/orders/" + order.food.id);
    },
    getPost(page_url) {
      page_url = page_url || "/orders";
      this.$axios
        .get(page_url)
        .then((res) => {
          this.posts = res.data.orders;
          this.makePagination(res.data.orders);
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
  },
  mounted() {
    this.getPost();
  },
};
</script>

<style scoped>
.orders {
  width: 100%;
  height: 100%;
  border: 3px solid orange;
  padding: 10px;
}
.orders_ {
  width: 100%;
  height: 100%;
  border: 3px dotted red;
  padding: 10px;
}
.hover_cursor {
  cursor: pointer;
}
</style>
