// Завершите код, который должен возвращать true,
// если заданный объект представляет собой одну букву
// ASCII (строчную или заглавную), в противном случае — false.

String.prototype.isLetter = function () {
    const reg = /^[a-zA-Z]$/

    return reg.test(this)
}

console.log("Am".isLetter())


