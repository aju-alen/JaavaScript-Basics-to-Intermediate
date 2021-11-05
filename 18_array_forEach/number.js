//for each
//does not return neww array

const people = [
    { namde: 'bob', age: 26, position: 'developer' },
    { namde: 'nik', age: 23, position: 'dev' },
    { namde: 'pom', age: 29, position: 'design' },
];

//this is in the order of item index array 

people.forEach(showPerson);


function showPerson(item, index, array) {
    console.log(item.namde.toUpperCase());


}




//////////////////////////////////////////////////



const obj = [
    { namde: 'bob', age: 26, position: 'developer' },
    { namde: 'nik', age: 23, position: 'dev' },
    { namde: 'pom', age: 29, position: 'design' },
];

obj.forEach(function (item, index, arr) {
    console.log(item);
})