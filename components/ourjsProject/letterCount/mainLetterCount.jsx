import React from 'react';

function MainLetterCount() {
    const [letter,setLetter] = React.useState("")
    const [another,setAnother] = React.useState('')
    const letterCount = (letter,another) => {
        let count=0;
        for (let i=0;i<letter.length;i++){
            if (letter[i]===another){
                count++;
            }
        }
        return count;

    }
    return (
        <>
            <div className="flex flex-col justify-center items-center">
        <h1 className={"text-shadow-2xs text-secondary-content text-4xl m-5"}>Find the Letter in the sentence</h1>
            <input className={"input m-5 p-5"} type="text" value={letter} onChange={(e)=>setLetter(e.target.value)}/>
            <input className={"input"} type="text" maxLength={1} value={another} onChange={(e)=>setAnother(e.target.value)}/>
                <h1 className={"text-5xl m-5"}>Sentence is  <span className={"text-info ml-5"}>{letter}</span> </h1>
                <h1 className={"text-5xl m-5"}>Find the Letter<span className="text-secondary ml-5">{letterCount(letter,another)}</span></h1>
            </div>
        </>
    );
}

export default MainLetterCount;