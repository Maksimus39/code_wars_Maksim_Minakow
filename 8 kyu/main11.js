// Можете ли вы реализовать функцию, которая будет возвращать количество слов в строке?
//
// Вы должны убедиться, что пробелы в строке являются пробелами для реального.
//
// Давайте посмотрим на некоторые примеры:
//
// countWords("Hello"); // возвращает 1 как int
//
// countWords("Привет, мир!") // Возвращает 2
//
// countWords("Нет результатов для поискового термина `s`") // возвращает 6
//
// countWords(" Привет") // возвращает 1
//
// // ... И так далее
//
// Какие тесты мы сделали для вашего кода:
//
// Функция должна считать слова, а не пробелы. Ты должен быть уверен, что делаешь это правильно
//
// В пустой строке нет слов.
//
// Строка с пробелами вокруг должна быть обрезана.
//
// Непробелы (например, breakspace, unicode chars) следует рассматривать как разделитель
//
// Дважды проверьте, что слова с символами типа -, ', ` посчитаны правильно.

function countWords(str) {
    // ...
    if (str.trim()===''){
        return 0;
    }

    return str.trim().split(/\s+/).length;
}

console.log(countWords(''))
console.log(countWords('Hello'));
console.log(countWords('Hello '));
console.log(countWords('Hello World'));
console.log(countWords('Hello World Max'));








