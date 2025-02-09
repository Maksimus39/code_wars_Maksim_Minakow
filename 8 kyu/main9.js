// Из этого урока мы начинаем узнавать об объектах String.
//
// Прежде всего, мы рассмотрим атрибуты String: . Используйте для получения длины строки, например:lengthStringObject.length
//
// let str="dsfsdwesdfsadfwerfsdfsdfsdfsdfsdf";
// console.log(str.length)  //output: 33
// Во-вторых, строка может быть похожа на массив. Каждый символ в строке имеет индекс. Мы можем использовать индекс для доступа к этому символу. Типа того:
//
// let str="codewars";
// for (let i=0;i<str.length;i++) console.log(str[i])
// //output:
// c
// o
// d
// e
// w
// a
// r
// s
// String Object имеет множество методов, многие из которых используются для изменения стиля и цвета текста веб-страницы. Эти методы редко используются в программировании, а некоторые из них в настоящее время устарели. Поэтому мы опустим изучение этих методов. К таким способам относятся:
//
// anchor()    Create HTML anchor.
// big()       Display a string in a large font.
// blink()     Display flashing string.
// bold()      Use bold display string.
// fixed()     Using a typewriter text display string.
// fontcolor() Displays a string using the specified color.
// fontsize()  Displays a string using the specified size.
// italics()   Use italics string.
// link()      Display a string as a link.
// small()     Use small size to display string.
// strike()    Use the delete line to display the string.
// sub()       Display the string as a subscript.
// sup()       Display the string as a superscript.
// На этот раз мы рассмотрим три метода, которые использовались для получения подстроки строки: и . Их использование:slice()substring()substr()
//
// StringObject.slice(startindex,endindex)
// StringObject.substring(startindex,endindex)
// StringObject.substr(startindex,length)
// Здесь мы используем несколько примеров, чтобы проиллюстрировать их использование и различия:
//
// let str="Hello World!";
// console.log(str.slice(6))
// console.log(str.substring(6))
// console.log(str.substr(6))
// //output:
// World!
// World!
// World!
// Мы видим, что первый параметр startindex нельзя опускать, он представляет собой начало перехвата строки. Второй параметр можно опустить, метод three будет перехватывать строку до конца строки. Рассмотрим следующий пример:
//
// let str="Hello World!";
// console.log(str.slice(0,5))
// console.log(str.substring(0,5))
// console.log(str.substr(0,5))
// //output:
// Hello
// Hello
// Hello
// Мы видим, что когда начальный индекс равен 0, результаты, полученные тремя методами, одинаковы. Но на самом деле их операции разные. и перехваченные символы от индекса 0 до индекса5 (не включая индекс5). Операция substr начинается с индекса 0, перехвата подстроки длины 5. Рассмотрим следующий пример:slice()substring()
//
// let str="Hello beautiful World!";
// console.log(str.slice(6,16))
// console.log(str.substring(6,16))
// console.log(str.substr(6,9))
// //output:
// beautiful
// beautiful
// beautiful
// Мы видим, что для того, чтобы перехватить одну и ту же строку "красиво", они используют разные параметры. Похоже, что использование подстроки и среза похоже, в чем разница между ними? Рассмотрим следующий пример:
//
// let str="Hello beautiful World!";
// console.log(str.slice(16,21))
// console.log(str.substring(16,21))
// console.log(str.slice(16,-1))
// //output:
// World
// World
// World
// Из этого примера мы видим, что параметры метода могут быть отрицательным числом. Негативный смысл начинается справа. -1 - это первая позиция справа (в конце этой строки).slice()
//
// Одним словом, для и , мы обычно выбираем использование slice(), потому что это более гибко и просто. Мы можем выбрать их использование в соответствии с различными потребностями.silce()substring()
//
// Ладно, урок окончен. Давайте выполним какое-нибудь задание.
//
// Задача
// Кодирование в функции , функция принимает 1 параметр:. — строковый массив.cutItarrarr
//
// Первая миссия: Обход , поиск самой короткой длины струны.arr
//
// Вторая миссия: Снова проходя, перехватываем все строки до наименьшей длины строки (Начните с индекса 0). Вы можете использовать одно из значений slice() substring() или substr(). Возвращаем результат после окончания работы.arr
//
// Например:
//
// cutIt(["ab","cde","fgh"]) should return ["ab","cd","fg"]
// cutIt(["abc","defgh","ijklmn"]) should return ["abc","def","ijk"]
// cutIt(["codewars","javascript","java"]) should return ["code","java","java"]
// Серия
// ( ↑↑↑ Нажмите на ссылку выше, чтобы получить мой новый список ката, пожалуйста, добавьте его в избранное)
//
// #1: создайте свою первую JS-функцию helloWorld
// #2: Основные типы данных - Число
// #3: Основные типы данных--String
// #4: Основные типы данных - Массив
// #5: Основные типы данных--Object
// #6: Основные типы данных - логические и условные операторы if.. еще
// #7: Если... else и тернарный оператор
// #8: Условный оператор--switch
// #9: Оператор цикла --while и do.. пока
// #10: Оператор цикла --for
// #11: Оператор цикла --break,continue
// #12: Оператор цикла --for.. в и для.. из
// #13: Объект Number и его свойства
// #14: Методы объекта Number--toString() и toLocaleString()
// #15: Методы объекта Number --toFixed(), toExponential() и toPrecision()
// #16: Методы объекта String --slice(), substring() и substr()
// #17: Методы строкового объекта--indexOf(), lastIndexOf() и search()
// #18: Методы объекта String--concat() split() и его хорошего друга join()
// #19: Методы строкового объекта--toUpperCase() toLowerCase() и replace()
// #20: Методы строкового объекта--charAt() charCodeAt() и fromCharCode()
// #21: Методы объекта String--trim() и шаблона строки
// #22: Откройте новые навыки - функция стрелы, оператор разброса и деконструкция
// #23: методы arrayObject---push(), pop(), shift() и unshift()
// #24: методы arrayObject---splice() и slice()
// #25: методы arrayObject---reverse() и sort()
// #26: методы arrayObject---map()
// #27: методы arrayObject---filter()
// #28: методы arrayObject---every() и some()
// #29: методы arrayObject---concat() и join()
// #30: методы arrayObject---reduce() и reduceRight()
// #31: методы arrayObject---isArray() indexOf() и toString()
// #32: методы Math---round() ceil() и floor()
// #33: методы Math---max() min() и abs()
// #34: методы Math---pow() sqrt() и cbrt()
// #35: методы Math---log() и его семейство
// #36: методы Мат---ката автора любовника:random()
// #37: Разблокируйте новое оружие---объект RegExp
// #38: Регулярное выражение--"^","$", "." и test()
// #39: Регулярное выражение--"?", "*", "+" и "{}"
// #40: Регулярное выражение--"|", "[]" и "()"
// #41: Регулярное выражение--""
// #42: Регулярное выражение--(?:), (?=) и (?!)

function cutIt(arr) {
    //coding here...
    const minLenght = Math.min(...arr.map(str => str.length));
    return arr.map(str => str.slice(0, minLenght));
}

console.log(cutIt(["ab", "cde", "fgh"]))
console.log(cutIt(["abc", "defgh", "ijklmn"]))
console.log(cutIt(["codewars", "javascript", "java"]))