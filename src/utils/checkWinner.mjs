const winCase = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    
    [0,3,6],
    [1,4,7],
    [2,5,8],

    [0,4,8],
    [2,4,6],
]

export default function (currentState , step) {
    let result = false
    winCase.forEach((case_ , index) => {
        let chekingCase = case_.every((block , index) => {
            return currentState[case_[0]] == currentState[block] && currentState[block] !== null
        })

        if (chekingCase) { 
            return result = chekingCase;
        } 
    })
    
    return result
}