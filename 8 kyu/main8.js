// Пролог:
// Эта серия ката была создана для моих друзей, которые только начали изучать программирование. Желаем вам всего наилучшего и сохраняйте свой ум открытым и острым!
//
// Задача:
// Напишите функцию, которая будет принимать два параметра: и проверим, совпадает ли тип . Возвращает, совпадают ли типы или нет.variabletypevariabletypetruefalse

function typeValidation(variable, type) {
    // Your code should be here ;)
    return typeof variable === type;
}

console.log(typeValidation(42, "number"));
console.log(typeValidation("42", "number"));