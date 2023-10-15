let brokenDate = '2025−12−31'
let dateArray = brokenDate.split('−')
let date = dateArray[2] + '/' + dateArray[1] + '/' + dateArray[0]
console.log(date)