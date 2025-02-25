// Научите Снупи и Скуби-Ду лаять, используя методы объекта. В настоящее время лаять может только Снупи, а не Скуби-Ду.
//
// снупи.кора(); // возвращаем "Гав"
// Скубиду.кора(); // неопределенный
// Используйте прототипы методов, чтобы все собаки могли лаять.

function Dog (breed) {
    this.breed = breed;
}

var snoopy = new Dog("Beagle");

snoopy.bark = function() {
    return "Woof";
};

var scoobydoo = new Dog("Great Dane");


scoobydoo.bark = function() {
    return "Woof";
}

