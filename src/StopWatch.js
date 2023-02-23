import { useEffect, useState } from "react"


export default function StopWatch() {

    const [count, setCount] = useState(0);
    const [running, setRunning] = useState(false);    
    useEffect(() => {
        let myInterval
        if (running) {
            myInterval = setInterval(() => {
                setCount((prev)=>prev+10)
            },10)
        }
        else {
            clearInterval(myInterval)
        }
       
      return ()=>clearInterval(myInterval)
    },[running])
    
    var min=0
    var hr=0
    var sec=0
    const timeWatch = () => {
        // if (count > 100)
        //     setTime((prev) => ({ ...prev, [prev.sec]: prev.sec + 1 }))
        if (count>100) {
            // setCount(0)
            return `${hr}hr ${min}min ${sec + 1}sec ${count}`
        }
        
        if (sec >= 60) {
            sec=0
            return `${hr}hr ${min + 1}min ${sec}sec`
        }
        if (min >= 60) {
            min=0
            return `${hr+1}hr ${min}min ${sec}sec`
        }
    }
    return (
        <div>
            <div>
                <span>{("0" + Math.floor((count / 60000) % 60)).slice(-2)}:</span>
                <span>{("0" + Math.floor((count / 1000) % 60)).slice(-2)}:</span>
                <span>{("0" + ((count / 10) % 100)).slice(-2)}</span>
            </div>
            <div>
                <button className="btn btn-success btn-sm" onClick={()=>setRunning(true)}>Start</button>
                <button className="btn btn-danger btn-sm mx-2" onClick={()=>setRunning(false)}>Stop</button>
                <button className="btn btn-secondary btn-sm" onClick={()=>setCount(0)}>Clear</button>
            </div>
        </div>
    )
}