<template>
  <div id="signup">
    <div class="signup-form">
      <form @submit.prevent="onSubmit">
        <div class="input">
          <label for="email">شماره تماس</label>
          <input type="email" id="email" v-model="email" @blur="validateUser" />
          <p class="error text-right py-2" v-if="userVal === 'invalid'">
            شماره تماس خود را وارد کنید
          </p>
        </div>
        <div class="input">
          <label for="password">رمز عبور</label>
          <input
            type="password"
            id="password"
            v-model="password"
            @blur="validatePass"
          />
          <p class="error text-right py-2" v-if="passVal === 'invalid'">
            رمز عبور خود را وارد کنید
          </p>
        </div>
        <div class="input">
          <label for="confirm-password">تایید رمز عبور</label>
          <input
            type="password"
            id="confirm-password"
            v-model="confirmPassword"
            @blur="validateConfPass"
          />
          <div
            class="d-flex justify-content-start align-items-center py-2"
            style="direction:rtl"
          >
            <i
              v-if="password === confirmPassword && confirmPassword !== ''"
              class="far fa-check-circle"
            ></i>
            <i
              v-if="password !== confirmPassword"
              class="far fa-times-circle"
            ></i>
            <p
              class="error text-right m-0 px-2"
              v-if="confPassVal === 'invalid'"
            >
              رمز عبور خود را تایید کنید
            </p>
          </div>
        </div>
        <!-- <div class="input">
          <label for="country">Country</label>
          <select id="country" v-model="country">
            <option value="usa">USA</option>
            <option value="india">India</option>
            <option value="uk">UK</option>
            <option value="germany">Germany</option>
          </select>
        </div> -->
        <!-- <div class="hobbies">
          <h3>Add some Hobbies</h3>
          <button @click="onAddHobby" type="button">Add Hobby</button>
          <div class="hobby-list">
            <div
              class="input"
              v-for="(hobbyInput, index) in hobbyInputs"
              :key="hobbyInput.id"
            >
              <label :for="hobbyInput.id">Hobby #{{ index }}</label>
              <input
                type="text"
                :id="hobbyInput.id"
                v-model="hobbyInput.value"
              />
              <button @click="onDeleteHobby(hobbyInput.id)" type="button">
                X
              </button>
            </div>
          </div>
        </div> -->
        <div class="input inline">
          <label for="terms" class="px-2">با قوانین موافقم</label>
          <input type="checkbox" id="terms" v-model="terms" />
        </div>
        <div class="submit">
          <button type="submit" :disabled="!terms">ثبت</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
      confirmPassword: "",
      terms: false,
      userVal: "",
      passVal: "",
      confPassVal: "",
    };
  },
  methods: {
    // onAddHobby() {
    //   const newHobby = {
    //     id: Math.random() * Math.random() * 1000,
    //     value: "",
    //   };
    //   this.hobbyInputs.push(newHobby);
    // },
    // onDeleteHobby(id) {
    //   this.hobbyInputs = this.hobbyInputs.filter((hobby) => hobby.id !== id);
    // },
    onSubmit() {
      if (this.email === "") {
        this.userVal = "invalid";
      } else if (this.passVal === "") {
        this.passVal = "invalid";
      } else if (this.confPassVal === "") {
        this.confPassVal = "invalid";
      } else {
        const formData = {
          email: this.email,
          password: this.password,
          confirmPassword: this.confirmPassword,
          terms: this.terms,
        };
        console.log(formData);
        this.$store.dispatch("signup", formData);
      }
    },
    validateUser() {
      if (this.email === "") {
        this.userVal = "invalid";
      } else {
        this.userVal = "valid";
      }
    },
    validatePass() {
      if (this.password === "") {
        this.passVal = "invalid";
      } else {
        this.passVal = "valid";
      }
    },
    validateConfPass() {
      if (this.confirmPassword === "") {
        this.confPassVal = "invalid";
      } else {
        this.confPassVal = "valid";
      }
    },
  },
  created() {
    console.log("form", this.terms);
  },
};
</script>

<style scoped>
* {
  text-align: right;
}

textarea {
  width: 100%;
  box-sizing: border-box;
  border: none;
  border-bottom: 1px solid #ccc;
  background: transparent;
  color: white;
}

.signup-form {
  width: 400px;
  margin: 30px auto;
  border: 1px solid #eee;
  padding: 20px;
  box-shadow: 0 2px 3px #ccc;
  background: #3e3e3e;
}

.input {
  margin: 10px auto;
  position: relative;
}

.input label {
  display: block;
  margin-bottom: 6px;
  text-align: center;
  color: white;
  font-weight: 700;
}

.input.inline label {
  display: inline;
}

.input input {
  font: inherit;
  width: 100%;
  padding: 6px 12px;
  box-sizing: border-box;
  border: none;
  border-bottom: 1px solid #ccc;
  background: transparent;
  color: white;
}

.input.inline input {
  width: auto;
}

.input input:focus {
  outline: none;
  border: 1px solid #521751;
  background-color: transparent;
}

.input input:active {
  background: transparent;
}

.input select {
  border: 1px solid #ccc;
  font: inherit;
}

.hobbies button {
  border: 1px solid #521751;
  background: #521751;
  color: white;
  padding: 6px;
  font: inherit;
  cursor: pointer;
}

.hobbies button:hover,
.hobbies button:active {
  background-color: #8d4288;
}

.hobbies input {
  width: 90%;
}

.submit button {
  border: 1px solid #521751;
  color: #521751;
  padding: 10px 20px;
  font: inherit;
  cursor: pointer;
}

.submit button:hover,
.submit button:active {
  background-color: #521751;
  color: white;
}

.submit button[disabled],
.submit button[disabled]:hover,
.submit button[disabled]:active {
  border: 1px solid #ccc;
  background-color: transparent;
  color: #ccc;
  cursor: not-allowed;
}

.error {
  color: red;
  font-size: 14px;
}

.fa-times-circle {
  color: red;
}

.fa-check-circle {
  color: green;
}

.far {
  position: absolute;
  top: 42px;
  left: 10px;
}
</style>
