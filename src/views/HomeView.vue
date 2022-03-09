<template>
  <h1>Home</h1>
  <table id="secondTable">
    <thead>
      <tr>
        <th v-for="col in columns" :key="col.id">
            <input v-if="col=='id'" v-model="selectall" type="checkbox">
            {{ col }}
        </th>
        <th>
            actions
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="row in rows" :key="row['id']">
        <td v-for="col in columns" :key="col">
            <input v-if="col=='id'" v-model="row['selected']" type="checkbox">
            {{ row[col] }}
        </td>
        <td>
            <button @click="remove(row['id'])">delete</button>
        </td>
      </tr>
    </tbody>
  </table>
</template>
<script>
import { defineComponent,computed,reactive, ref, watch } from 'vue'

export default defineComponent({
    setup() {
        const rows = reactive(
            [
                { id: 1, name: "Chandler Bing", Company: '305-917-1301', Status: 'Active',Last_Updated:"1/1/2022",Notes:"hello all",selected: false },
                { id: 2, name: "Ross Geller", Company: '210-684-8953', Status: 'Active',Last_Updated:"1/1/2022",Notes:"hello all",selected: false },
                { id: 3, name: "Rachel Green", Company: '765-338-0312', Status: 'Active',Last_Updated:"1/1/2022",Notes:"hello all",selected: false},
                { id: 4, name: "Monica Geller", Company: '714-541-3336', Status: 'Active',Last_Updated:"1/1/2022",Notes:"hello all",selected: false },
                { id: 5, name: "Joey Tribbiani", Company: '972-297-6037', Status: 'Active',Last_Updated:"1/1/2022",Notes:"hello all",selected: false },
                { id: 6, name: "Phoebe Buffay", Company: '760-318-8376', Status: 'Active',Last_Updated:"1/1/2022",Notes:"hello all",selected: false }
            ]);
        
        const columns = computed(() => {
            if (rows.length == 0) {
                return [];
            }
            return Object.keys(rows[0]);
        });
        
        const selectall = ref(false);
        watch(selectall,(newValue)=>{
            for(var i in rows){
                rows[i]['selected'] = newValue;
            }
        });

        const remove = (i) => {
            var temp = 0;
            for(var j in rows){
                if(rows[j]['id']==i){
                    temp = j;
                    break;
                }
            }
            rows.splice(temp,1);
            
        }

        return {
            selectall,
            rows,
            columns,
            remove
        }
    },
})
</script>
