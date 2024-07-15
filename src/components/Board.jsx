import Block from "./Block"
import Menu from "./Menu";


export default function ({history , setHistory , step , setStep , currentState , winnerResult}) {

    function clickBlock (index) {
        return function () {
            if (winnerResult) return
            const duplicatHistory = [...history].slice(0 , step +1);
            const newHistory = [...history[history.length - (history.length- step)]]
            newHistory[index] = step %2==0 ? 'O' : 'X';
            setStep(step + 1)
            setHistory([...duplicatHistory , newHistory]);
        }
    }
    return (
        <div className="wrapper">
            <main className="board">
                {currentState.map((state , index) => {
                    return <Block key={index} value={state} handler={clickBlock(index)} />
                })}
            </main>
            <Menu step={step} setStep={setStep} history={history}/>
        </div>
       
    )
}