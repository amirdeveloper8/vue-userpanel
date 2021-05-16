<template>
  <div id="app">
    <app-header />
    <dashboard-sidebar v-if="sidebar" />
    <transition name="slide" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import DashboardSidebar from "./components/dashboard/sidebar.vue";
import Header from "./components/header/header.vue";
export default {
  name: "app",
  components: {
    "app-header": Header,
    "dashboard-sidebar": DashboardSidebar,
  },
  created() {
    this.$store.dispatch("tryAutoLogin");
    if (localStorage.getItem("token")) {
      // router.replace("/dashboard");
      this.$router.replace("/dashboard");
    }
    console.log(this.sidebar);
  },
  computed: {
    sidebar() {
      return this.$store.state.idToken;
    },
  },
};
</script>

<style>
body,
html {
  margin: 0;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  overflow-x: hidden;
}
.slide-enter-active {
  animation: slide-in 200ms ease-out forwards;
}

.slide-leave-active {
  animation: slide-out 200ms ease-out forwards;
}

@keyframes slide-in {
  from {
    transform: translateY(-30px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

@keyframes slide-out {
  from {
    transform: translateY(0);
    opacity: 1;
  }
  to {
    transform: translateY(-30px);
    opacity: 0;
  }
}
</style>
