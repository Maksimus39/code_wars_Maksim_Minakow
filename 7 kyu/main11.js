// Многие музеи позволяют вам стать участником,
// за определенную сумму amount_by_year вы можете получить неограниченный доступ в музей.
//
// В этом ката вам следует выполнить функцию, чтобы узнать,
// после какого количества посещений будет лучше взять годовой абонемент.
// Функция принимает 2 аргумента annual_price и individual_price.

function howManyTimes(annualPrice, individualPrice) {
    // code here
    const res = annualPrice / individualPrice
    return Math.ceil(res)
}

console.log(howManyTimes(40, 15), 3)
console.log(howManyTimes(30, 10), 3)
console.log(howManyTimes(80, 15), 6)
console.log(howManyTimes(150, 34), 6)