<template>
  <div id="sidebar">
    <div>
      <ul class="nav nav-pills flex-column">
        <router-link
          to="/dashboard"
          class="nav-item mx-2 my-2 d-flex justify-content-end align-items-center px-3"
          active-class="active"
          tag="li"
        >
          <div class="text-sidebar">
            <a class="nav-link text-right">خانه</a>
          </div>
          <div class="icon-sidebar">
            <i class="fas fa-home"></i>
          </div>
        </router-link>
        <router-link
          to="/dashboard-home"
          class="nav-item mx-2 my-2 d-flex justify-content-end align-items-center px-3"
          active-class="active"
          tag="li"
        >
          <div class="text-sidebar">
            <a class="nav-link text-right">اطلاعات</a>
          </div>
          <div class="icon-sidebar">
            <i class="fas fa-info"></i>
          </div>
        </router-link>
        <router-link
          to="/dashboard-edit"
          class="nav-item mx-2 my-2 d-flex justify-content-end align-items-center px-3"
          active-class="active"
          tag="li"
        >
          <div class="text-sidebar">
            <a class="nav-link text-right py-0">تکمیل اطلاعات</a>
          </div>
          <div class="icon-sidebar">
            <i class="fab fa-wpforms"></i>
          </div>
        </router-link>
      </ul>
    </div>
  </div>
</template>

<style scoped>
#sidebar {
  position: fixed;
  right: 0;
  top: 56px;
  width: 15%;
  background: #521751a6;
  height: 100%;
  padding-top: 50px;
}
.sides {
  text-align: right;
}
.active {
  background-color: rgb(91, 214, 208);
  border-radius: 8px;
  color: #f8f9fa !important;
}
.nav-item a {
  color: rgba(0, 0, 0, 0.623);
  font-weight: 700;
}
.active a {
  color: white;
}
.text-sidebar {
  flex-basis: 80%;
  font-size: 16px;
  text-align: right;
  padding: 0;
}
.icon-sidebar {
  flex-basis: 10%;
  font-size: 16px;
  text-align: right;
}
</style>
