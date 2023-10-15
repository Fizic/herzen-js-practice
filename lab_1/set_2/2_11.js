function isPalindrome(string) {
    for (let i = 0; i < string.length / 2 + 1; i++) {
        if (string[i] !== string[string.length - 1 - i]){
            return false
        }
    }
    return true
}

console.log(isPalindrome('aboba'))
console.log(isPalindrome('abobus'))