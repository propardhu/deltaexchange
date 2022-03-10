<template>
  <div class="modal" v-if="openDia">
    <div class="modal-content">
      <span class="close" @click="openDia = false">&times;</span>
      <section class="signup-view">
        <div style="text-align: left; font-size: 20px" class="ui form">
          <h2>signin</h2>
          <label style="margin-left: 4%" for="name">Name</label><br />
          <input
            type="text"
            name="name"
            v-model="data.name"
            placeholder="name"
            id="name"
          />
          <br />
          
          <br />
          <br />
          <button
            style="
              margin-left: 6%;
              margin-right: auto !important;
              margin-left: auto !important;
            "
            @click="submit"
          >
            submit
          </button>
        </div>
      </section>
    </div>
  </div>
</template>
<script>
import { defineComponent, reactive, ref } from "vue";
export default defineComponent({
  setup() {
    const openDia = ref(false);
    const openDiaAction = () => {
      openDia.value = true;
    };
    var count = 7;
    const data = reactive({
      id: count++,
      name: "",
      Company: "",
      Status: "",
      Last_Updated: Date().toString(),
      Notes: "",
      selected: false,
    });
    return {
      openDia,
      data,
      openDiaAction,
    };
  },
});
</script>
<style scoped>
.modal {
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  padding-top: 100px; /* Location of the box */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0, 0, 0); /* Fallback color */
  background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */
}
.modal-content {
  background-color: #fefefe;
  margin: auto;
  padding: 20px;
  border: 1px solid #888;
  width: 80%;
}
.close {
  color: #aaaaaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: #000;
  text-decoration: none;
  cursor: pointer;
}
</style>
