<template>
  <div class="container">
    <div>
      <div class="w-50 m-auto">
        <div class="menu_modal my-4">
          <div>
            <b-button
              id="show-btn"
              class="bg-success"
              @click="$bvModal.show('bv-modal-example')"
              >Add Food</b-button
            >
            <Ordermodal />
          </div>
        </div>
        <transition name="slide-fade">
          <form @submit.prevent="postOrders()">
            <table class="table table-bordered">
              <tbody>
                <tr>
                  <th>Name</th>
                </tr>
              </tbody>
              <tbody>
                <tr v-for="item in posts" :key="item.id">
                  <td>
                    <div class="d-flex justify-content-between">
                      <div>
                        <a
                          href=""
                          style="text-decoration: none; color: black"
                          @click.prevent="toIng(item)"
                        >
                          {{ item.name }}
                        </a>
                      </div>
                      <div class="d-flex align-items-center">
                        <div>
                          <span
                            class="btn btn-primary"
                            @click="order[item.id]--"
                          >
                            -
                          </span>
                          <input
                            type="number"
                            min="1"
                            max="10"
                            v-model="order[item.id]"
                          />
                          <span
                            class="btn btn-primary"
                            @click="order[item.id]++"
                          >
                            +
                          </span>
                        </div>
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
            <div style="text-align: center">
              <button class="btn btn-outline-success mb-2" type="submit">
                Order
              </button>
            </div>
          </form>
        </transition>

        <div class="d-flex" style="justify-content: center">
          <nav aria-label="Page navigation example">
            <ul class="pagination">
              <li
                class="page-item"
                :class="{ disabled: !pagination.prev_page_url }"
                @click.prevent="getPost(pagination.prev_page_url)"
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
  </div>
</template>

<script>
import Ordermodal from "@/components/modal/order.modal.vue";
export default {
  components: {
    Ordermodal,
  },
  data() {
    return {
      string: `<input type="text class="form-control">`,
      order: {},
      posts: [],
      pagination: {},
    };
  },
  methods: {
    getPost(page_url) {
      page_url = page_url || "/menu";
      this.$axios
        .get(page_url)
        .then((res) => {
          this.posts = res.data.foods.data;
          this.makePagination(res.data.foods);
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
    toIng(item) {
      this.$router.push("/menu/" + item.id);
    },
    postOrders() {
      try {
        this.$store.dispatch("postOrders", this.order);

        console.log(this.order);
        this.order = {};
      } catch (error) {
        
      }
    },
  },
  mounted() {
    this.getPost();
  },
};
</script>

<style></style>
