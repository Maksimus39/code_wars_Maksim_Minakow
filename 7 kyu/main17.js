// Скажите привет!
//
// Напишите функцию, чтобы поприветствовать человека.
// Функция будет принимать имя в качестве входных данных и приветствовать человека, говоря ему привет.
// Возвращает null/nil/None, если входные данные — пустая строка, или null/nil/None.
//
// Пример:
//
// greet("Niks") === "привет, Никс!";
// greet("") === null; // Возвращает null, если входные данные — пустая строка
// greet(null) === null; // Возвращает null, если входные данные — null


function greet(name) {
    switch (name) {
        case "":
            return null
        case null:
            return null
        default:
            return `hello ${name}!`
    }
}

console.log(greet("Maks"))