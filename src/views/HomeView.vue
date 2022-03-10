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
import { defineComponent,computed, ref, watch } from 'vue';
import { getData } from '@/store';

export default defineComponent({
    setup() {
        const rows = getData.value;
        
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
