function countVowels(string) {
    let vowels = ['a', 'e', 'i', 'o', 'u']
    let numberOfVowels = 0
    for (let i = 0; i < string.length; i++) {
        if (vowels.includes(string[i])){
            numberOfVowels++
        }
    }
    return numberOfVowels
}

console.log(countVowels('abobusei')) // -> 5
console.log(countVowels('aaa')) // -> 3
console.log(countVowels('bbb')) // -> 0