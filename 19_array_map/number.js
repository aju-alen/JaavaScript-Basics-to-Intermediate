const people = [
    { namde: 'bob', age: 26, position: 'developer' },
    { namde: 'nik', age: 23, position: 'dev' },
    { namde: 'pom', age: 29, position: 'design' },
];

const array1 = people.map(function (item) {
    return item.age + 20;
});

const array2 = people.map(function (item) {
    return {
        firstName: item.namde,
        yourAge: item.age,
    };
});

console.log(array1);
console.log(array2);