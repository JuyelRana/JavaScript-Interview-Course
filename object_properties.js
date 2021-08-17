const a = {};
const b = { name : 'b'};
const c = { name: 'c'};

a[b] = 200;   // '[object Object]' : 200 
a[c] = 400;   // '[object Object]' : 400

// a[b] ===  '[object Object]' = 400

console.log(a[b]);   // 400   

