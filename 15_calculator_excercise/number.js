const gas = [20, 40, 60];
const food = [2, 40, 20, 63];

function calculateTotal(arr) {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        total = arr[i] + total;
    }
    return total
}

const gasTotal = calculateTotal(gas);
const foodTotal = calculateTotal(food);


console.log({
    gas: gasTotal,
    food: foodTotal,
})