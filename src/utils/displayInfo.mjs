export default function (winnerResult , step , history) {
    if (history.length == 1) return "Click board to play";
    if (step == 9 && !winnerResult) return "This match is draw";
    if (winnerResult) return `Winner is ${(step+1) %2==0 ? "O" : "X"}`

    return `Now turn is ${step %2==0 ? 'O' : 'X'}`
}