// function hello(name, second) {
//     console.log('Heloo there ' + name + ' ' + second);


// }

// hello('susy', 'bob');
// hello('bomer');
// hello(35);


//return types

function first(num1, num2) {
    return num1 + num2;
}

const one = first(3, 4);
const second = first(8, 5);

const final = [one, second, first(9, 4)];
console.log(final);
