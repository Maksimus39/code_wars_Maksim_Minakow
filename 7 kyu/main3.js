// Предоставленный код должен возвращать полное имя человека с учетом его имени и фамилии.
//
// Но это не работает должным образом.
//
// Заметки
//
// Имя и/или фамилии никогда не являются нулевыми, но могут быть пустыми.
//
// Задача
//
// Исправьте ошибку, чтобы мы все могли пойти домой пораньше.



class Dinglemouse{

    constructor( firstName, lastName ){
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getFullName(){
        return `${this.firstName} ${this.lastName}`.trim();
    }
}


console.log(new Dinglemouse('Max','Minakov').getFullName());