<template>
  <div id="dashboard">
    <div class="row">
      <div class="col-xs-12">
        <p>{{ email }}</p>
        <p>okay</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    email() {
      return !this.$store.getters.user ? false : this.$store.getters.user.email;
    },
  },
  created() {
    this.$store.dispatch("fetchUser");
  },
};
</script>

<style scoped>
h1,
p {
  text-align: center;
}

p {
  color: red;
}
</style>
