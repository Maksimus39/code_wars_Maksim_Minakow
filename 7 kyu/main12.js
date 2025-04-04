// Если задана строка слов, разделенных пробелами, вернуть самое длинное слово.
// Если есть несколько самых длинных слов, вернуть самое длинное правое слово.
//
// Примеры
// "red white blue" => "white"
// "red blue gold" => "gold"


function longestWord(stringOfWords) {
    // Give me back the longest word!
    const words = stringOfWords.split(' ');
    let longest = '';

    for (const word of words) {
        if (word.length >= longest.length) {
            longest = word;
        }
    }

    return longest;
}

console.log(longestWord("lonely"))
console.log(longestWord("one two three"))
console.log(longestWord("red blue grey"))