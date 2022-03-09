<template>
 <router-view />
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: 'App',
  setup(){

  }
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
table {
  font-family: 'Open Sans', sans-serif;
  width: 75%;
  border-collapse: collapse;
  border: 3px solid #44475C;
  margin-right: auto !important;
 margin-left: auto !important;
}

table th {
  text-transform: uppercase;
  text-align: left;
  background: #44475C;
  color: #FFF;
  padding: 8px;
  min-width: 30px;
}

table td {
  text-align: left;
  padding: 8px;
  border-right: 2px solid #7D82A8;
}
table td:last-child {
  border-right: none;
}
table tbody tr:nth-child(2n) td {
  background: #D4D8F9;
}
input {
    margin: .4rem;
}

</style>
