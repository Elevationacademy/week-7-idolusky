// exercise 6

// const ages = [1, 3, 1, 2, 1, 3, 1, 6, 4, 6, 4, 1]


// function getDuplicates(arr) {
//     const numbersObj = {}
//     const duplicates = [];
//     arr.forEach((number) => {
//         if (numbersObj[number]) {
//             if (numbersObj[number] === 1) {
//                 duplicates.push(number);
//             }
//             numbersObj[number] = numbersObj[number] + 1;
//         } else {
//             numbersObj[number] = 1;
//         }
//     })
//     if (duplicates) {
//         console.log("there are duplicates");
//     }
//     return duplicates;
// }
// console.log(getDuplicates(ages))



// exercise 7

// _id | name | age | salary
// ax01 | Ray | 28 | 1300
// qs84 | Lucius | 31 | 840
// bg33 | Taylor | 18 | 2700

// const data = {
//     ax01: { name: "Ray", age: 28, salary: 1300 },
//     qs84: { name: "Lucius", age: 31, salary: 840 },
//     bg33: { name: 'Taylor', age: 18, salary: 2700 }
// }

// const findEmployeeSalary = function (employeeID) {
//     if (data[employeeID]) {
//         empSalary = data[employeeID].salary
//     }
//     return empSalary
// }
// console.log(findEmployeeSalary('ax01'))


// exercise 8


let numbers = [24, 33, 66, 102, 108, 140, 146, 177, 182, 217, 341, 357, 372,
    390, 418, 427, 442, 444, 469, 480, 572, 624, 627, 665, 680, 694, 743,
    768, 790, 794, 852, 896, 919, 942, 982, 991, 1026, 1055, 1086, 1137,
    1141, 1157, 1167, 1271, 1272, 1273, 1301, 1337, 1340, 1344, 1388, 1455,
    1465, 1466, 1509, 1555, 1640, 1667, 1667, 1689, 1824, 1897, 1928, 1950,
    1987, 2056, 2059, 2070, 2123, 2140, 2198, 2215, 2260, 2304, 2383, 2403,
    2433, 2454, 2472, 2480, 2481, 2535, 2543, 2554, 2557, 2580, 2630, 2634,
    2671, 2745, 2792, 2839, 2849, 2871, 2873, 2893, 2932, 2962, 2984, 2987]





function findIndex(arr, searchElement) {

    let left = 0,
        right = arr.length - 1;

    while (left <= right) { // Process until it is last element

        let mid = Math.floor((left + (right + 1)) / 2); // using floor as we may get floating numbers

        if (arr[mid] === searchElement) { // element found at mid
            return mid; // no need to process further
        }
        if (searchElement < arr[mid]) { // element might be in first half
            right = mid - 1; // right is mid - 1 because we know that mid is not correct element
        } else { // element might be in second half
            left = mid + 1; // left is mid + 1 because we know that mid is not correct element
        }
    }

    return -1; // element not found
}
var result = findIndex(numbers, 2630);
console.log(result)

