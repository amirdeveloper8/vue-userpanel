import Vue from "vue";
import VueRouter from "vue-router";
import store from "./store";

import WelcomePage from "./components/welcome/welcome.vue";
import DashboardPage from "./components/dashboard/dashboard.vue";
import DashboardEdit from "./components/dashboard/dashboardEdit.vue";
import dashboardHome from "./components/dashboard/dashboardHome.vue";
import SignupPage from "./components/auth/signup.vue";
import SigninPage from "./components/auth/signin.vue";

Vue.use(VueRouter);

const routes = [
  { path: "/", component: WelcomePage },
  { path: "/signup", component: SignupPage },
  { path: "/signin", component: SigninPage },
  {
    path: "/dashboard",
    component: DashboardPage,
    beforeEnter(to, from, next) {
      if (store.state.idToken) {
        next();
      } else {
        next("/signin");
      }
    },
  },
  { path: "/dashboard-home", component: dashboardHome },
  { path: "/dashboard-edit", component: DashboardEdit },
];

export default new VueRouter({ mode: "history", routes });
