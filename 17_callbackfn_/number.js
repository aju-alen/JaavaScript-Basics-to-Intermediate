
function user(name) {


    return `Good afternoon ${name}`
}


function greet(name, cb) {
    const myName = 'jhonny';

    console.log(`${cb(name)}I hope you have a nice day. Topday I, ${myName} is your asistant`);
}




greet('bobo', user);
