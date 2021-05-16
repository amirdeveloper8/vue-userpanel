<template>
  <div class="container-fluid" id="user-details">
    <h1 class="px-4" style="text-align:center">اطلاعات ثبت شده</h1>
    <div class="row">
      <div class="col-sm-12 col-md-3">
        <div
          class="d-flex justify-content-center align-items-center boxes"
          style="border-color: rgb(0, 128, 100);"
        >
          <div class="content">
            <h4>
              نام و نام خانوادگی
            </h4>
            <p>
              امیرمحمد محمدی
            </p>
          </div>
          <div class="icon px-2">
            <i class="fas fa-user"></i>
          </div>
        </div>
      </div>

      <div class="col-sm-12 col-md-3">
        <div
          class="d-flex justify-content-center align-items-center boxes"
          style="border-color:rgb(0, 51, 128);"
        >
          <div class="content">
            <h4>
              شماره تماس
            </h4>
            <p>
              امیرمحمد محمدی
            </p>
          </div>
          <div class="icon px-2">
            <i class="fas fa-user"></i>
          </div>
        </div>
      </div>

      <div class="col-sm-12 col-md-3">
        <div
          class="d-flex justify-content-center align-items-center boxes"
          style="border-color:rgb(189, 118, 12);"
        >
          <div class="content">
            <h4>
              ایمیل
            </h4>
            <p>
              امیرمحمد محمدی
            </p>
          </div>
          <div class="icon px-2">
            <i class="fas fa-user"></i>
          </div>
        </div>
      </div>

      <div class="col-sm-12 col-md-3">
        <div
          class="d-flex justify-content-center align-items-center boxes"
          style="border-color:rgb(221, 31, 47);"
        >
          <div class="content">
            <h4>
              آدرس
            </h4>
            <p>
              امیرمحمد محمدی
            </p>
          </div>
          <div class="icon px-2">
            <i class="fas fa-user"></i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {},
};
</script>

<style scoped>
#user-details {
  width: 85%;
  margin: 0;
}

.boxes {
  direction: rtl;
}

.icon i {
  font-size: 28px;
  color: rgba(46, 46, 46, 0.514);
}

.content {
  text-align: right;
  width: 80%;
}

.content h4,
.content p {
  margin: 3% 2%;
}

.boxes {
  background-color: rgb(155, 155, 155);
  border-radius: 8px;
  border-left: 8px solid;
}
</style>
