<template>
  <div class="form">
    <Toast />
<!--    <Button label="Show" @click="show()" />-->
    <div class="surface-card p-4 shadow-2 border-round w-full lg:w-6">
      <div class="text-center mb-5">
<!--        <img src="/images/blocks/logos/hyper.svg" alt="Image" height="50" class="mb-3" />-->
        <div class="text-900 text-3xl font-medium mb-3">Xush kelibsiz!</div>
      </div>
      <div>
        <label for="username1" class="block text-900 font-medium mb-2">Isim</label>
        <InputText id="username1" type="text" placeholder="Isimingizni kiriting" class="w-full mb-3"  v-model="this.username"/>

        <label for="password1" class="block text-900 font-medium mb-2">Parol</label>
        <InputText id="password1" type="password" placeholder="Parolingizni kiriting" class="w-full mb-3" v-model="this.password"/>

        <Button label="Kirish" icon="pi pi-user" class="w-full" v-on:click="auth"></Button>
      </div>
    </div>
  </div>

</template>

<script>
import axios from "axios";
import { useToast } from "primevue/usetoast";
import cookie from 'vue-cookies'
import router from "../router";

export default {
  name: "SingIn",
  data() {
    return {
      api_url: "http://localhost:3000/auth/login",
      token: "",
      username: '',
      password: '',
      isError: false,
      toast: useToast()
    }
  },
  methods: {
     async auth() {
       await axios.post(this.api_url,
          {username: this.username, password: this.password},
          {headers: {'Content-Type' : 'application/json'}})
          .then(({ data }) => {
            this.token = data.access_token
            cookie.set("token", data.access_token, "2000000000d")
            console.log(data.access_token)
            router.go('/')
            // console.log(router.push())
          })
          .catch(( error ) => {
            if(error){this.isError = true}
            this.show()
          });
    },
     show() {
      this.toast.add({ severity: 'error', summary: 'Info', detail: "Isim yoki parol noto'g'ri kiritilgan" , life: 3000 });
     },

  }
}
</script>

<style scoped>
  .form {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 97vh;
  }
</style>