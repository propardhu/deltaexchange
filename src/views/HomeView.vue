<template>
  <h1>Team Members <button class="button-1" style="background-color: blue;" @click="openDialog">addMember</button></h1>
  <label for="status">Status: </label>
  <select name="status" style="margin-right:5%;" v-model="searchStatus">
    <option disabled value="">Please select one</option>
    <option>Active</option>
    <option>Closed</option>
  </select>
  <label for="company">Company: </label>
  <select name="company" style="margin-right:5%;" v-model="searchCompany" multiple>
    <option v-for="i in CompanySet" :key="i">{{i}}</option>
  </select>
  <button @click="rsetFilters" style="background-color: red;" class="button-1">reset</button>
  <table id="secondTable" style="margin-top:10px;">
    <thead>
      <tr>
        <th v-for="col in columns" :key="col.id">
          <input v-if="col == 'id'" v-model="selectall" type="checkbox" />
          {{ col }}
        </th>
        <th v-if="serchFilters.length != 0">actions</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="row in serchFilters" :key="row['id']">
        <td v-for="col in columns" :key="col">
          <input v-if="col == 'id'" v-model="row['selected']" type="checkbox" />
          {{ row[col] }}
        </td>
        <td>
          <button class="button-1" @click="remove(row['id'])">delete</button>
        </td>
      </tr>
    </tbody>
  </table>
  <addMember ref="addMember" />
</template>
<script>
import { defineComponent, computed, ref, watch, reactive } from "vue";
import addMember from "@/compotents/addMember.vue";
import { getData } from "@/store";

export default defineComponent({
  components: {
    addMember,
  },
  setup() {
    const rows = getData.value;
    const addMember = ref(null);
    const searchCompany = ref([]);
    const searchStatus = ref("");

    const serchFilters = computed(() => {
      const searchdata = reactive([]);
      if (searchCompany.value.length == 0 && searchStatus.value.length == 0) {
        return rows;
      }
      rows.forEach((i) => {
        if (
          searchStatus.value.length > 0 &&
          searchCompany.value.length > 0 
        ) {
          if(searchCompany.value.includes(i.Company) &&
          i.Status == searchStatus.value){
            searchdata.push(i);
          }
        } else {
          if (searchStatus.value.length > 0 && i.Status == searchStatus.value) {
            searchdata.push(i);
          }
          if (searchCompany.value.length > 0 && searchCompany.value.includes(i.Company)) {
            searchdata.push(i);
          }
        }
      });
      return searchdata;
    });

    const CompanySet = computed(()=> {
      const setCompany= new Set();
      rows.forEach((i)=>{
        setCompany.add(i.Company);
      })
      return setCompany;
    })
    
    const openDialog = () => {
      addMember.value.openDiaAction();
    };

    const columns = computed(() => {
      if (rows.length == 0) {
        return [];
      }
      return Object.keys(rows[0]);
    });

    const selectall = ref(false);
    watch(selectall, (newValue) => {
      for (var i in rows) {
        rows[i]["selected"] = newValue;
      }
    });

    const remove = (i) => {
      var temp = 0;
      for (var j in rows) {
        if (rows[j]["id"] == i) {
          temp = j;
          break;
        }
      }
      rows.splice(temp, 1);
    };

    return {
      selectall,
      rows,
      columns,
      remove,
      openDialog,
      addMember,
      searchStatus,
      searchCompany,
      serchFilters,
      CompanySet
    };
  },
});
</script>
