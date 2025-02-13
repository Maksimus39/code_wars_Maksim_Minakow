// Сводка
// Получив составленную из ключей и значений, инвертируйте хэш, поменяв их местами.Hash
//
// Примеры
// Given:
//
//   { a: '1',
//     b: '2',
//     c: '3' }
//
// Return:
//
//   { 1: 'a',
//     2: 'b',
//     3: 'c' }
//
//
//
// Given:
//
//   { foo:   'bar',
//     hello: 'world' }
//
// Return:
//
//   { bar:   'foo',
//     world: 'hello' }
// Примечания
// Ключи и значения могут быть любого типа, подходящего для использования в качестве ключа.
// Все хеши, предоставленные в качестве входных данных, будут иметь уникальные значения, поэтому инверсия является инволютивной. Другими словами, не стоит беспокоиться об идентичных значениях, хранящихся под разными ключами.


function invertHash(hash) {
    const res = {}

    Object.keys(hash).forEach((value) => {
        let key = hash[value]
        res[key] = value
    })
    return res
}

console.log(invertHash({a: '1'}))