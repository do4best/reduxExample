import React from 'react';
const computerPlay=()=>{
    const choices=["rock","paper","scissor"];
    const randomNumber=Math.floor(Math.random()*choices.length);
    return choices[randomNumber];
}

function MainPaperScissor(props) {
    const [rock,setRock]=React.useState("");
    const [paper,setPaper]=React.useState("");
    const [scissor,setScissor]=React.useState("");
    const [computerChoice,setComputerChoice]=React.useState("");
    const handelRock=()=>{

    }

    return (
        <>
        <div className="flex flex-col justify-center items-center min-h-[500px] bg-blue-500 gap-10">
            <h1 className="text-success text-5xl"> Rock Paper Scissor Game </h1>
            <h1 className={"text-secondary"}>Choose Your Move:</h1>
            <div className={"flex flex-row justify-center items-center"}>
                <button className={"btn btn-primary"} onClick={()=>setRock(console.log("rock"),console.log("Computer",computerPlay()))}>&#x1F44A;</button>
                <button className={"btn btn-primary m-5"} onClick={()=>setRock(console.log("paper"))}>&#x1f590;</button>
                <button className={"btn btn-primary"} onClick={()=>setRock(console.log("Scissor"))}>&#x270c;</button>

            </div>
            <div className={"flex flex-row justify-center items-center"}>
<h1>Your Score: </h1> <h1 className={"ml-5"}>Computer Score: {} </h1>
            </div>

        </div>

        </>
    );
}

export default MainPaperScissor;