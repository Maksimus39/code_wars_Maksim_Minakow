// Два игрока - и играют в игру. Игра состоит из нескольких раундов. Если игрок выигрывает в раунде, он должен снова сделать ход в следующем раунде. Если игрок проигрывает раунд, то другой игрок переходит в следующий раунд. Учитывая, чья очередь была на предыдущем раунде и выиграл ли он, определите, чья очередь на следующем раунде."black""white"
//
// Вход/выход
// [input] струна lastPlayer/$last_player
//
// "black" или - чей ход был во время предыдущего раунда."white"
//
// [input] булев win/$win
//
// true если игрок, сделавший ход во время предыдущего раунда, выиграл, в противном случае.false
//
// [output] строка
//
// Возврат, если белые должны перейти в следующий раунд, и в противном случае."white""black"
//
// Пример
// Для , вывод должен быть .lastPlayer = "black" and win = false"white"
//
// Для , вывод должен быть .lastPlayer = "white" and win = true"white"


function whoseMove(lastPlayer, win) {
    //coding and coding..
    if (win) {
        return lastPlayer; // Если выиграл, ходит снова тот же игрок
    } else {
        return lastPlayer === "black" ? "white" : "black"; // Если проиграл, ходит другой игрок
    }
}

console.log(whoseMove("black", false))
console.log(whoseMove("white", true))
console.log(whoseMove("white", false))