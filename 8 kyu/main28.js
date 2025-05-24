// Что?!?
//
// Похоже, никто из всех воинов не помнит его имени!
//
// Не могли бы вы помочь?

function Warrior(n) {
    let name = n;
    this.name = function (n) {
        if (n !== undefined) {
            name = n;
        }
        return name;
    }
}

Warrior.prototype.toString = function () {
    return "Hi! my name's " + this.name();
}