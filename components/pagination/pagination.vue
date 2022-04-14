<template>
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
</template>
<script>
export default {
  props: ["pagination"],
  methods: {
    getWarehouse() {},
  },
};
</script>
