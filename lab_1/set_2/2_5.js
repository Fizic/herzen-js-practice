let input = 'I learn JavaScript!'

let inputLen = input.length
console.log(inputLen)

let processedWithSubstr = input.substr(0, 2) + input.substr(8, 11)
console.log(processedWithSubstr)

let processedWithSubstring = input.substring(0, 1) + input.substring(7, 19)
console.log(processedWithSubstring)

let processedWithSlice = input.slice(0, 1) + input.slice(7, 19)
console.log(processedWithSlice)

let learnIndex = input.indexOf('learn')
console.log(learnIndex)

let str = prompt('Введите строку: ')
let n = parseInt(prompt('Введите число: '))

let output
if (str.length > n){
    output = str.slice(0, n) + '...'
}else{
    output = str
}

console.log(output)