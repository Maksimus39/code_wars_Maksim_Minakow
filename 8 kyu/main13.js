// Классные расширения, эта ката в основном предназначена для нового обновления JS ES6, вводящего ключевое слово расширения. Вы будете предварительно загружены классом Animal, поэтому вы должны редактировать только класс Cat.
//
// Задача
//
// Ваша задача состоит в том, чтобы завершить класс Cat, который расширяет Animal, и заменить метод speak, чтобы вернуть имя кошки + мяу. например «Мистер Уски мяукает».
//
// Атрибут name передается с this.name (JS), @name (Ruby) или self.name (Python).
//
// Ссылка: JS, Ruby, Python.

class Cat extends Animal {
    constructor(name) {
        super(name);
        this.name = name
    }

    speak() {
        return `${this.name} meows`;
    }
}

