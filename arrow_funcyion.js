// 
const difference = (x, y) => Math.abs(x - y)
const sum = difference(3, 4)
console.log(sum)
// const multiply = (first, second, third) => first * second * third;

// // single parameter or one parameter
const student = { name: 'ananata', age: 45 }
const getAge = (person) => person.age;
const age = getAge(student)
console.log(age);
0

// const addressfind = address => address[2]
// const numbers = addressfind([0, 1, 2, 3, 4])
// console.log(numbers)

// const doubleIt = num => num * 2;

// // no parameter
// const getPI = () => Math.PI
// console.log(getPI())

// // large arrow function. if you want to get anything returned from this function. then you have to use the return keyword
const doMath = (x, y, z) => {
    const sum = x + y + z;
    const mult = x * y * z;
    const result = sum + mult
    return result
}

const num = doMath(1, 2, 3)

console.log(num)