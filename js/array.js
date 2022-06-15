const numbers = [43,53,63,73,83,93]
let val

val =numbers.length
console.log(val)

val = Array.isArray(numbers)
console.log(val)

val = numbers[0]
console.log(val)
console.log(numbers)
val = numbers[2]
console.log(val)
numbers[2] = 54
console.log(numbers)
numbers[2] = 63
val = numbers.indexOf(63)
numbers.push(250)
console.log(numbers)
numbers.unshift(120)
console.log(numbers)
numbers.pop()
console.log(numbers)
numbers.shift()
console.log(numbers)

console.log(numbers)
console.log(numbers)