// Разгадайте яйца.
//
// В строке, переданной вашей функции, непосредственно после каждой согласной вставлено "яйцо".
// Вам нужно вернуть строку до того, как она стала яйцеобразной.
//
// Пример
// unscrambleEggs("Beggegeggineggneggeregg"); => "Новичок"
// // "B---eg---in---n---er---".
// Ката предназначена для начинающих практиковаться в регулярных выражениях, поэтому за комментарии буду благодарен.

function unscrambleEggs(word) {
    const i = /egg/g
    return word.replace(i, "")
}

console.log(unscrambleEggs("FeggUNegg KeggATeggA"))