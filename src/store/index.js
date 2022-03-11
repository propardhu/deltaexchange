import { reactive, computed } from 'vue';
export const data = reactive([
    { id: 1, name: "Chandler Bing", Company: 'Apple', Status: 'Active',Last_Updated:"1/1/2022",Notes:"hello all",selected: false },
    { id: 2, name: "Ross Geller", Company: 'Apple', Status: 'Closed',Last_Updated:"1/1/2022",Notes:"hello all",selected: false },
    { id: 3, name: "Rachel Green", Company: 'Apple', Status: 'Active',Last_Updated:"1/1/2022",Notes:"hello all",selected: false},
    { id: 4, name: "Monica Geller", Company: 'Microsoft', Status: 'Active',Last_Updated:"1/1/2022",Notes:"hello all",selected: false },
    { id: 5, name: "Joey Tribbiani", Company: 'Amazon', Status: 'Active',Last_Updated:"1/1/2022",Notes:"hello all",selected: false },
    { id: 6, name: "Phoebe Buffay", Company: 'Flipcart', Status: 'Active',Last_Updated:"1/1/2022",Notes:"hello all",selected: false }
]);

export const addData = (i) => {
    data.push(i);
}

export const getData = computed(() => data);
