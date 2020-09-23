let numbers = [31, 9, 18, 2, 106, 382, 0, 71, 8239, 791, -2321, 2500, 12, 13]


let smallestNumber = numbers[0] //our 'number stored in memory'

for (let num of numbers) { //going over each number

    if (num < smallestNumber) {

        smallestNumber = num //forget the number stored in memory and store num instead
    }
}

console.log("Smallest number is " + smallestNumber)
