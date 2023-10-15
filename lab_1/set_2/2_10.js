let snakeCaseString = 'var_test_text'

let varNames = snakeCaseString.split('_')
for (let i = 1; i < varNames.length; i++) {
    varNames[i] = varNames[i].charAt(0).toUpperCase() + varNames[i].slice(1)
}

let camelCaseString = varNames.join('')
console.log(camelCaseString)