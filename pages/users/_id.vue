<template>
  <section>
      <h1> {{user.name}} </h1>
      <hr/>
      <h2> {{user.email}} </h2>
      <nuxt-link to="/users"> Back</nuxt-link>
  </section>
</template>
<script>
export default {
  validate(context) {
    console.log(context)
    return /^\d+$/.test(context.params.id)
  },
 async asyncData({params, error, store}) {
      try {
        const user = await store.dispatch('users/fetchUsersById',params.id)
        return {user}
      }
     catch(e) {
       error(e)
     }
  }
}
</script>
