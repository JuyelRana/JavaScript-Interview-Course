const user1 = {
  name : 'Md. Juyel Rana',
  age : 26
}

const user2 = {
  name : 'Md. Juyel Rana',
  age : 26
}

console.log(user1 == user2);
console.log(user1 === user2);

console.log(JSON.stringify(user1) == JSON.stringify(user2));
console.log(JSON.stringify(user1) === JSON.stringify(user2));

const user = user1;

console.log(user == user1);
console.log(user === user1);

console.log([] == []);
console.log(JSON.stringify([]) === JSON.stringify([]));