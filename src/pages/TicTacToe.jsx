import { useState } from "react";

// UNTILITY FUNCTION
import displayInfo from "../utils/displayInfo.mjs";
import checkWinner from "../utils/checkWinner.mjs";

// COMPONENT
import Board from "../components/Board";

export default function () {
    const [history , setHistory] = useState([Array(9).fill(null)]);
    const [step, setStep] = useState(0);
    const currentState = history[step];
    const winnerResult = checkWinner(currentState , step) 
    return (
        <>
            <h1>Tic Tac Toe</h1>
            <p>{displayInfo(winnerResult , step , history)}</p>
            <Board 
                history={history} 
                setHistory={setHistory}
                step={step}
                setStep={setStep}
                currentState={currentState}
                winnerResult={winnerResult}
            />
        </>
         
    )
}