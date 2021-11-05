//variable declaration

var a = "alex"; //global


let b = 7 //block based 

const t = "mark";  // cannot be asigned to another value






//// function

function prntName() {
    console.log('inside fn');
}

prntName();

//function expression

const printName = function (name, age) {
    console.log('your name is', name);
    console.log('your age is', age);
}


printName('markos', 23);

//arrow fn (no need to wwrie fn) used to shorten 

const printName = (name, age) => console.log('your name is', name);


//object
const studentObj = {
    name: 'zoya',
    id: 'sfdfdfd',
    marks: 90,



};
console.log(studentObj['name'])
