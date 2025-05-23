// // Улучшение Math.round(x)
// // В Javascript имеется удобный встроенный метод Math.round(x), который округляет число до ближайшего целого числа:
// //
// // Мат.раунд(3.14); // Возвращает 3
// // Мат.раунд(17.43); // 17
// // Math.round(198 499); // 198
// // Мат.раунд(200,5); // 201
// // Мат.раунд(1784,76); // 1785 г.
// // Но иногда этого недостаточно! Что, если мы захотим округлить 3,1415926535 до двух десятичных знаков? Хотя в некоторых языках (например, PHP) есть функция round(), которая поддерживает округление до заданного количества десятичных знаков (например, <?php round(3.1415926535, 4); /* 3.1416 (округляется до 4 d.p., как указано) */ ?>), Javascript этого не делает!
// //
// // задача
// // Ваша задача — создать метод Math.roundTo(number, Precision), который округляет заданное число до десятичных знаков.
// //
// // Вам могут пригодиться следующие математические методы:
// //
// // Math.round(x) (конечно)
// // Math.pow(x,y) (возвращает x в степени y - например Math.pow(3,4) == 81)
//
// Math.roundTo = function (number, precision) {
//     const factor = Math.pow(10, precision);
//     return Math.round(number * factor) / factor;
// }
//
// console.log(Math.roundTo(3.1415926535, 4)); // Should output 3.1416


Math.roundTo = function (number, precision) {
    const factor = Math.pow(10, precision);
    return Math.round(number * factor) / factor;
}

console.log(Math.roundTo(3.1415926535, 4)); // Should output 3.1416
