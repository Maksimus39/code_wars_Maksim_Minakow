// В своем классе вы начали уроки по геометрической прогрессии. Поскольку вы также являетесь программистом, вы решили написать функцию, которая будет печатать первые элементы последовательности с заданной константой и первым элементом .nra
//
// Результат должен быть разделен запятой и пробелом.

function geometricSequenceElements(a, r, n){
    // Your code here!
    // Initialize an array to store the elements of the sequence
    let sequence = [];

    // Generate the first n elements of the geometric sequence
    for (let i = 0; i < n; i++) {
        sequence.push(a * Math.pow(r, i));
    }

    // Join the elements into a string separated by commas and spaces
    return sequence.join(', ');
}

console.log(geometricSequenceElements(2, 3, 5))