<template>
  <section class="signup-view">
    <div style="text-align: left; font-size: 20px;" class="ui form">
        <h2>signup</h2>
        <label style=" margin-left:4%;" for="username" >username</label><br>
        <input type="text" name="username" v-model="data.username" placeholder="username" id="email">
        <br>
        <label style=" margin-left:4%;" for="pass" >Password</label><br>
        <input type="password" name="password" v-model="data.password" placeholder="password" id="pass">
        <br>
        <br>
        <button style=" margin-left:6%;margin-right: auto !important;
 margin-left: auto !important;" @click="submit">submit</button>
    </div>
  </section>
</template>
<script>
import { defineComponent, reactive } from "vue";
import router from "@/router";

export default defineComponent({
  setup() {
      const data  = reactive(
          {
              username:"",
              password:""
          }
      );
      const submit = ()=>{
          if(data.password == "" || data.email==""){
              alert("enter proper details");
              return;
          }
          console.log("send request and save token to local storage",data);
          window.localStorage.setItem('token',"admin");
          router.push('/');
      }
      return{
        data,
        submit
      }
  },
});
</script>

<style scoped>
.signup-view {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50vh;
}
input{
    width: 300px;
}
</style>
