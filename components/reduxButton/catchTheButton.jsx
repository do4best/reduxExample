import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {increment, decrement, incrementBy, incrementAsync} from "./buttonSlice.js";

function CatchTheButton(props) {
const selector = useSelector(store=>store.YourExpense.value)
    const dispatch = useDispatch()
    const [theVValue,setTheVValue] = useState('2')
    return (
        <>
        <div className="flex flex-row justify-center items-center">
            <button className="btn btn-primary p-5" onClick={()=>dispatch(increment())}>+</button>
            <button className="btn btn-primary p-5 m-5" onClick={()=>dispatch(decrement())}>-</button>
            <h2 className="bg-amber-200 text-black p-2">{selector}</h2>
            <input type="text" value={theVValue} onChange={e=>setTheVValue(e.target.value)} className={'ml-3'}   />
<button className="btn btn-success" onClick={()=>dispatch(incrementBy(Number(theVValue)|| 0))}>Add Amount</button>
            <button className="btn btn-secondary ml-3" onClick={()=>dispatch(incrementAsync(Number(theVValue)||0))}>value Async</button>
        </div>

        </>
    );
}

export default CatchTheButton;