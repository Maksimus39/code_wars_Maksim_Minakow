// Наш друг Пак наконец-то решил продолжить карьеру в индустрии программирования.
// Он новичок, ему нужно правильно учиться.
// Поэтому Пак хочет подать заявку на участие во всемирно известной и очень требовательной Академии
// для начинающих «C0d3r 1ns1d3».
// Для того, чтобы присоединиться, Pac должен выполнить серию из 3 упражнений на тему «Исправление ошибок».
// Ему было отправлено электронное письмо от Академии со следующими инструкциями:
//
// Dear Pac,
// This is the first exercise. Find out what's wrong and fix the code.
// You have 15 minutes to send a solution.
// Good Luck.
// Этот код - беспорядок! Поможете ли вы Pac вовремя исправить код?
//
// (Это может быть полезно -> Math.random();)
//
// Это моя первая ката, поэтому, пожалуйста, любые отзывы (особенно по тестовым случаям) приветствуются!


function yourFutureCareer() {
    var career = Math.random()

    if (career <= 0.32) {
        return 'FrontEnd Developer'

    } else if (career <= 0.65) {
        return 'BackEnd Developer'

    } else {
        return 'Full-Stack Developer'
    }
}

console.log(yourFutureCareer());