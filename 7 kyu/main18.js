// В этом Kata вам будут даны две строки a и b, и ваша задача будет заключаться в том,
// чтобы вернуть символы, которые не являются общими в двух строках.
//
// Например:
//
// solve("xyab","xzca") = "ybzc"
// -- Первая строка содержит 'yb', которого нет во второй строке.
// -- Вторая строка содержит 'zc', которого нет в первой строке.
// Обратите внимание также, что вы возвращаете символы из первой строки,
// объединенные с символами из второй строки.
//
// Больше примеров в тестовых случаях.
//
// Удачи!
//
// Пожалуйста, попробуйте также Simple remove duplicates

function solve(a,b){
    //..
    const charsA = a.split('');
    const charsB = b.split('');

    // Находим символы из a, которых нет в b
    const uniqueA = charsA.filter(char => !b.includes(char)).join('');

    // Находим символы из b, которых нет в a
    const uniqueB = charsB.filter(char => !a.includes(char)).join('');

    // Объединяем результаты
    return uniqueA + uniqueB;
}

console.log(solve("xyab","xzca"))
console.log(solve("xyabb","xzca"))
console.log(solve("abcd","xyz"))