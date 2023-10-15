let input = 'aaa bbb ccc'

let processedWithSubstr = input.substr(0, 3) + input.substr(7, 4)
console.log(processedWithSubstr)

let processedWithSubstring = input.substring(0, 3) + input.substring(7, 11)
console.log(processedWithSubstring)

let processedWithSlice = input.slice(0, 3) + input.slice(7, 11)
console.log(processedWithSlice)