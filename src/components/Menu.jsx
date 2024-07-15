export default function ({step , setStep , history}) {
    function prev () {
        if (step == 0) return
        setStep(step - 1);
    }
    function next () {
        if (step == history.length-1) return
        setStep(step + 1)
    }

    return (
        <div className="box-menu">
                <button onClick={prev}>Prev</button>
                <button onClick={()=> location.href = '/'}>Leave</button>
                <button onClick={next}>Next</button>
        </div>
    )
}