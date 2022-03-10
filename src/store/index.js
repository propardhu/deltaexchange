import { reactive, computed } from 'vue';
export const data = reactive([
    { id: 1, name: "Chandler Bing", Company: '305-917-1301', Status: 'Active',Last_Updated:"1/1/2022",Notes:"hello all",selected: false },
    { id: 2, name: "Ross Geller", Company: '210-684-8953', Status: 'Active',Last_Updated:"1/1/2022",Notes:"hello all",selected: false },
    { id: 3, name: "Rachel Green", Company: '765-338-0312', Status: 'Active',Last_Updated:"1/1/2022",Notes:"hello all",selected: false},
    { id: 4, name: "Monica Geller", Company: '714-541-3336', Status: 'Active',Last_Updated:"1/1/2022",Notes:"hello all",selected: false },
    { id: 5, name: "Joey Tribbiani", Company: '972-297-6037', Status: 'Active',Last_Updated:"1/1/2022",Notes:"hello all",selected: false },
    { id: 6, name: "Phoebe Buffay", Company: '760-318-8376', Status: 'Active',Last_Updated:"1/1/2022",Notes:"hello all",selected: false }
]);

export const addData = (i) => {
    data.push(i);
}

export const getData = computed(() => data);
