// Напишите функцию heron, которая вычисляет площадь треугольника со сторонами a, b и c (x, y, z в COBOL).
//
// Формула Герона:

// s∗(s-a)∗(s-b)∗(s-c)
//

// Ответ будет проверен на правильность с погрешностью 0,01.

function heron(a, b, c) {
    // Вычисляем полу периметр
    const semiperimeter = (a + b + c) / 2
    const perimeter =  semiperimeter * (semiperimeter - a) * (semiperimeter - b) * (semiperimeter - c)

    return Math.sqrt(perimeter)
}

console.log(heron(3, 4, 5))