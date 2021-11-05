

const friends = ['jhon', 'peter', 'parkour', 45, 63,];

console.log(friends);
friends[2] = 25;
let best = friends[2];


console.log('my best friend is' + best);




//array properties and method
//lenght  
console.log(friends.length);
console.log(friends[friends.length - 1]);

//concat

const lastNames = ['peppar', 'ben', 'marlo'];

const allNames = friends.concat(lastNames);
console.log(allNames);

//reverse

console.log(friends.reverse());

//unshift
allNames.unshift('ben');
allNames.unshift('peppar');

console.log(allNames);

//shift

//push

//push
allNames.pop();
allNames.pop();
allNames.pop();
allNames.pop();
allNames.pop();
allNames.pop();
console.log(allNames);

//splice

