// Вы выполняете вычисление 2 + 2 * 2 + 2 * 2 и ожидаете получить ответ 32, но вместо этого функция продолжает возвращать 10.
// Исправьте функцию, чтобы она возвращала 32 без изменения числа или операторов.

function orderOperations () {
    return ((2 + 2) * (2 + 2)) * 2
}

console.log(orderOperations());