<template>
  <section>
    <h1>{{ pageTitle }}</h1>
    <ul>
      <li v-for="user in users" :key="user.id">
        <a href="" @click.prevent="goTo(user)"> {{ user.name }}</a>
      </li>
    </ul>
  </section>
</template>
<script>
export default {
  // async fetch({ store, error }) {
  //   try {
  //     if (store.getters["users/users"].length === 0) {
  //       await store.dispatch("users/fetchUsers");
  //     }
  //   } catch (e) {
  //     error(e);
  //   }
  // },
  data() {
    return {
      pageTitle: "Page Users",
    };
  },
  computed: {
    users() {
      return this.$store.getters["users/users"];
    },
  },
  methods: {
    goTo(user) {
      this.$router.push("/users/" + user.id);
    },
  },
};
</script>
