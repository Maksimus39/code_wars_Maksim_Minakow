// Является ли каждое значение в массиве массивом?
//
// Это должно проверить только второе измерение массива.
// Значения вложенных массивов не обязательно должны быть массивами.
//
// Примеры:

const arrCheck = value => Array.isArray(value) && value.every(Array.isArray);

console.log(arrCheck([[1],[2]]))
console.log(arrCheck(['1','2']))
console.log(arrCheck([{1:1},{2:2}]))