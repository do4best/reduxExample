import React, {useRef} from 'react';

function MainPomodomoTimer(props) {
    const [time, setTime] = React.useState(25);
    const [isStarted, setIsStarted] = React.useState(false);
    const [isPaused, setIsPaused] = React.useState(false);
    const [isReset, setIsReset] = React.useState(false);
    let interval=0;
    let ref = useRef(null);
    let timeLeft=1500;
    const updateTimer=()=>{
        let minutes = Math.floor(timeLeft / 60);
        let seconds = timeLeft % 60;

        ref.current.innerText =  minutes + ":" + (seconds < 10 ? "0" : "") + seconds;

    }
    const handelStart = () => {
        interval = setInterval(() => {
            updateTimer()
        },1000)
    }
    const handelStop = () => {
        console.log("stop")
    }
    const handelReset = () => {
        console.log("reset")
    }
    return (
        <>
            <div className="flex flex-col justify-center items-center gap-10 min-h-[400px] ">
                <h1>Pomodoro Timer</h1>
                <h1 className={"text-7xl"}><span ref={ref}>{time}</span></h1>
                <div className="flex flex-row gap-5">
                    <button className={"btn btn-primary"} onClick={handelStart}>Start</button>
                    <button className={"btn btn-primary"} onClick={handelStop}>Stop</button>
                    <button className={"btn btn-primary"} onClick={handelReset}>Reset</button>
                </div>
            </div>
        </>
    );
}

export default MainPomodomoTimer;