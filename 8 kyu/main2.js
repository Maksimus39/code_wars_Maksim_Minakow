// refactoring switch/case



function evalObject(value) {
    let result = 0;
    switch (value.operation) {
        case'+':
            return result = value.a + value.b;
        case'-':
            return result = value.a - value.b;
        case'/':
            return result = value.a / value.b;
        case'*':
            return result = value.a * value.b;
        case'%':
            return result = value.a % value.b;
        case'^':
            return result = Math.pow(value.a, value.b);
    }
    return result;
}

console.log(evalObject({a: 1, b: 2}))