import React, {useState} from 'react';
import { motion } from "motion/react"
function MainTipCalculator() {
    const [bill,setBill]=useState('')
    const [tip,setTip]=useState('')
    const [result,setResult]=useState(0)
    function calculateTip(){


        const total = bill * (1+ tip / 100);
        console.log(total)

        setResult(total);

    }
    return (
        <>
            <div className="flex flex-col justify-center items-center border-2 bg-white min-h-[400px] shadow-xl/30 gap-3 p-5">
                <h1 className={"text-3xl text-orange-800 font-extrabold"} >Tip Calculator</h1>
                <p className={""}>Enter the Bill Amount and tip Percentage to Calculate the total.</p>
                <fieldset className="fieldset">
                    <legend className="fieldset-legend float-start">Bill Amount</legend>
                    <input value={bill} type="text" className="input input-sm w-xl" placeholder="Type here" onChange={(e)=>setBill(e.target.value)} />

                </fieldset>
                <fieldset className="fieldset">
                    <legend className="fieldset-legend float-start">Tip Percentage</legend>
                    <input value={tip} type="text" className="input input-sm w-xl" placeholder="Type here" onChange={(e)=>setTip(e.target.value)} />

                </fieldset>
<motion.button className="btn btn-primary w-xl" whileHover={{ scale: 1.2 }} whileTap={{scale:0.8}} onClick={calculateTip}>Calculate </motion.button>
<p className={"text-center text-xl"}>Total; ${result}</p>
            </div>

        </>
    );
}

export default MainTipCalculator;