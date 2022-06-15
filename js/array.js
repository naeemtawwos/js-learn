const numbers = [43,53,63,73,83,93]
const numbers_2 = [100,5,24,54,78,98]
const caliphs = ['abu_bakr', 'umar', 'uthman', 'ali','hasan', 'muawiya']
const caliph_2 = [
  'أبو بكر،',
   'عمر ',
   'عثمان',
    'علي ',
]
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
numbers.splice(1,1)
console.log(numbers)
numbers.splice(1,2)
console.log(numbers)
numbers.reverse()
val = numbers.concat(caliphs)
console.log(val)
caliphs.sort()
console.log(caliphs)
caliph_2.sort()
console.log(caliph_2)
// numbers_2.sort()
console.log(numbers_2)

val = numbers_2.sort(function(x,y){
    return x - y
})
console.log(val)

val = numbers_2.sort(function(x,y){
    return  y - x
})
console.log(val)

function under50(num){
    return num < 50;
}
numbers_2.reverse()
val = numbers_2.find(under50);
console.log(val)