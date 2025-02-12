// Реализуйте функцию, которая возвращает минимальное и максимальное значение списка (в этом порядке).

function getMinMax(arr) {
    //..
    const minNumberArray = arr.reduce((min,current) => {
        return current < min? current : min;
    },Infinity)

    const maxNumberArray=arr.reduce((max,current) => {
        return current > max ? current : max;
    })

    return [minNumberArray,maxNumberArray]
}

console.log(getMinMax([1, 2, 3, 4, 5, 6,9]))