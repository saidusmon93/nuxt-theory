<template>
  <header >
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container">
  <a class="navbar-brand" href="#"> {{navbar.title}} </a>
      <div class="collapse navbar-collapse justify-content-end">
        <div class="d-flex ">
 <ul class="navbar-nav mr-auto">
          <li class="nav-item"  v-for="(item,index) of navbar.links" :key="index" >
            <nuxt-link exact active-class="active" class="nav-link active" :to="item.to"
              >{{item.text}}</nuxt-link
            >
          </li>
          <li class="nav-item" v-if="isAuth">
            <a class="nav-link" @click.prevent="logout" href="#">LogOut</a>
          </li>
        </ul>
        </div>

      </div>
      </div>

    </nav>
  </header>
</template>
<script>
export default {
  data() {
    return {
      navbar: {
        title: 'Restaurant',
        links: [
          {
            to: "/menu",
            text: "Menu",
          },
          {
            to: "/warehouse",
            text: "Warehouse",
          },
          {
            to: "/orders",
            text: "Orders",
          },
          {
            to: "/statistics",
            text: "Statistics",
          },
          {
            to: "/about",
            text: "About",
          },
          {
            to: "/fridge",
            text: "Fridge",
          },
          {
            to: "/ready",
            text: "Ready Foods",
          },
          {
            to: "/login",
            text: "Login",
          },
        ],
      },
    };
  },
  computed: {
    isAuth() {
      return this.$store.getters.isAuth;
    },
  },
  methods: {
    logout() {
      this.$store.dispatch("logout");
    },
  },
};
</script>
