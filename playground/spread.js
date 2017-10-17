// function add(a, b) {
//     return a + b
// }

// console.log(add(3, 4))

// var toAdd = [9, 5]

// console.log(add(...toAdd))

// let aA = [1, 2, 3]
// let aB = [4, 5, 6]

// let aAB = [...aA, ...aB]

// console.log(aAB)

const printGreeting = (name, age) => `Hey ${name} you are ${age}`

let sam = ['Sam', 29]
let anna = ['anan', 31]

console.log(printGreeting(...sam))
console.log(printGreeting(...anna))

let names = ['sam', 'anna']
let final = [...names, 'george']

final.forEach(name => {
    console.log(`hi ${name}`)
})