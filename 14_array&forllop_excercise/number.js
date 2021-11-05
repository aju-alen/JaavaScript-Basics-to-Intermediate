const names = ['anna', 'bakka', 'cakka'];
const lastNames = 'lola';

let newArray = [];

//for 
for (let i = 0; i < names.length; i++) {
    console.log(i);
    console.log(names[i]);
    newArray.push(names[i] + " " + lastNames);

}
console.log(newArray);