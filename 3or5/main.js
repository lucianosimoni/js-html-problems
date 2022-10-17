// input: a natural value
// output: all the multiples of 3 or 5 added together

function findMultiples(num) {
    const arr = []
    for (let i = 0; i < num; i++) {
        const number = i + 1

        if (number % 3 == 0 || number % 5 == 0) {
            arr.push(number)
        }
    }
    return addNumbers(arr)
}

function addNumbers(array) {
    let total = 0
    for (let i = 0; i < array.length; i++) {
        total += array[i]
    }
    return total
}

console.log(findMultiples(1000))
