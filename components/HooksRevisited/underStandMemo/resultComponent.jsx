import React, {useMemo} from 'react';

function ResultComponent({subject,marks}) {
    console.log(subject,marks)
    const changeSubject=useMemo(

        ()=>{
            console.log("inside Memo")
            return marks*100/100},[marks])
    return (
        <>
        <h1>Subject is : {subject}</h1>
            <h1>Marks are : {marks}</h1>
            <h3>Marks in Percentage {changeSubject}%</h3>
        </>
    );
}

export default ResultComponent;