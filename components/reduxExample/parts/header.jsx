import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {addExpense} from "../container/expenseslide.js";
import IncomeInput from "./incomeInput.jsx";

function Header() {
    const [item,setItem] = useState("")
    const [expense,setExpense] = useState(0)
    const dispatch = useDispatch()

    function submit(e){
        e.preventDefault();
dispatch(addExpense({name:item,amount:expense}))
        console.log("submit")


    }
    return (
        <>
            <div className="flex flex-row justify-between items-center">
                <div className="">Logo</div>
                <form onSubmit={submit}>
                <div className="">
                    <fieldset className="fieldset flex flex-row">
                        <input type="text" className="input" placeholder="Type here"  onChange={(e)=>setItem(e.target.value)}/>
                        <input type="text" className="input" placeholder="Type here"  onChange={(e)=>setExpense(e.target.value)}/>
                        <button className="btn btn-primary">Test it</button>
                    </fieldset>

                </div>
                </form>
                <div className=""><IncomeInput/></div>

            </div></>
    );
}

export default Header;