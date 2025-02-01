// Завершите метод, который принимает последовательность объектов с двумя ключами каждый: страна или штат и столица. Ключи могут быть символами или строками.
//
// Метод должен возвращать массив предложений, объявляющих штат или страну и ее столицу.
//
// Примеры
//
// State_capitals = [{state: 'Maine', capital: 'Augusta'}]
//
// Capital(state_capitals)[0] // возвращает "Столица штата Мэн - Огаста"
//
// Country_capitals = [{'country' : 'Spain', 'capital' : 'Madrid'}]
//
// Capital(country_capitals)[0] // возвращает "Столицей Испании является Мадрид"
//
// Mixed_capitals: [{"state" : 'Maine', capital: 'Augusta'}, {country: 'Spain', "capital" : "Madrid"}]
//
// Capital(mixed_capitals)[1] // возвращает "Столицей Испании является Мадрид"

function capital(capitals){
    //...
    return capitals.map(item => {
        if (item.hasOwnProperty('country')) {
            return `The capital of ${item.country} is ${item.capital}`;
        } else if (item.hasOwnProperty('state')) {
            return `The capital of ${item.state} is ${item.capital}`;
        }
    });
}

console.log(capital([{state: 'Maine', capital: 'Augusta'}]))