let input = 'I−learn−JavaScript!'

while (input.indexOf('−') !== -1) {
    input = input.replace('−', '!')
}
console.log(input)