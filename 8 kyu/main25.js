// В JavaScript существует особый случай, когда строгое сравнение одной и той же переменной возвращает false!
// Попробуйте узнать, что нужно сделать, чтобы получить такой результат!
//
// вар х = что-то;
// x === x // возвращает false!
// Напишите функцию, которая будет возвращать значение, для которого строгое сравнение даст ложь!


function findStrangeValue() {
    // your code!
    return NaN;
}

console.log(findStrangeValue());