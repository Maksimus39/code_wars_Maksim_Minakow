// В этом ката вы будете выполнять сложение и вычитание в заданной строке.
// Возвращаемое значение также должно быть строкой.
//
// Примечание: входные данные не должны быть пустыми.
//
// Примеры
// "1plus2plus3plus4" --> "10"
// "1plus2plus3minus4" --> "2"


function calculate(str) {
    // Заменяем 'plus' и 'minus' на соответствующие операторы
    let expr = str.replace(/plus/g, '+').replace(/minus/g, '-');
    // Вычисляем результат и преобразуем в строку
    return eval(expr).toString();
}

console.log(calculate("1plus2plus3plus4"))
console.log(calculate("1plus2plus3minus4"))


