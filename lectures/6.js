function task(x) {
    return new Promise(function (resolve, reject) {
        if (x === 0) {
            resolve('1140158')
        }
        if (x < 18) {
            resolve('yes')
        }
        reject('no')
    })
}
