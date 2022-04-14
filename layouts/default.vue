<template>
  <div>
    <Navbar />
    <main>
      <div class="container">
        <nuxt />
      </div>
    </main>
  </div>
</template>
<script>
import Navbar from "../components/Navbar.vue";
export default {
  components: {
    Navbar,
  },
};
</script>
<style>
   div {
     font-family:  serif;
     font-weight: 600;
   }
</style>
