let input = 'aaa@bbb@ccc'
const regexDog = /@/
while (regexDog.test(input)) {
    input = input.replaceAll('@', '!')
}

console.log(input)