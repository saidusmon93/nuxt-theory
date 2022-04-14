<template>
  <section>
    <form @submit.prevent="sign">
      <h1>Login</h1>
      <div class="form-group">
        <input type="text" class="form-control" v-model="form.email" />
      </div>
      <div class="form-group">
        <input type="password" class="form-control" v-model="form.password" />
      </div>
      <p>
        <nuxt-link to="/">Home</nuxt-link>
      </p>
      <button type="submit" class="btn btn-primary">Login</button>
    </form>
  </section>
</template>
<script>
export default {
  layout: "empty",
  data() {
    return {
      form: {
        email: "chef@gmail.com",
        password: "12345678",
      },
    };
  },
  methods: {
    // onSubmit() {
    //   this.$store.dispatch("login", this.form);
    //
    // },
    sign () {
      this.$auth.loginWith('local', {
        data : this.form
      }).then((res) => {
         this.$toast.success('Logging in...')
         this.$router.push("/");
         console.log(this.$toast)
      })
      .catch((err) => {
        this.$toast.error(err)
      })
    },
  },
};
</script>
<style scoped>
section {
  width: 600px;
}
.form-group {
  padding: 0.5rem;
}
</style>
