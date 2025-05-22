import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {setIncomeAction} from "../container/expenseslide.js";

function IncomeInput() {
   const incomesome = useSelector(store=>store.MYExpense.income)
    const dispatch = useDispatch()
    const setIncome=(e)=>{
       dispatch(setIncomeAction(Number.parseFloat(e.target.value)))
    }

    return (
        <>
            <div className="stat-title">Total Income</div>
            <input defaultValue={incomesome} type="text" className="input" placeholder="Type here" onChange={setIncome} /></>
    );
}

export default IncomeInput;