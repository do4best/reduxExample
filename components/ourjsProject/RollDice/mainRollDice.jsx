import React, {useState} from 'react';
import { motion } from "motion/react"

function MainRollDice() {
    const diceCharacters = ['⚀', '⚁', '⚂', '⚃', '⚄', '⚅']; // dice face characters
    const [dice, setDice] = useState('⚄'); // initial dice face character
    const [isRolling, setIsRolling] = useState(false); // is dice rolling?
    const [rollHistory, setRollHistory] = useState([]); // dice result storage

    function rollDice() { // Roll Dice defination
        setIsRolling(true); // settherolling as true

        let rollCount = 0; // local variable initially 0
        const maxRolls = 15; // max rolls allowed
        const rollInterval = setInterval(() => { // set interval for rolling
            setDice(diceCharacters[Math.floor(Math.random() * 6)]); // set random dice face character
            rollCount++; // increment roll count

            if (rollCount >= maxRolls) { // if roll count is greater than max rolls
                clearInterval(rollInterval); // clear interval
                const finalDice = diceCharacters[Math.floor(Math.random() * 6)]; // set final dice face character
                setDice(finalDice); // set final dice face character

                // Add roll to history with timestamp
                const newRoll = { // defining new Roll Object
                    dice: finalDice, // dice face character
                    time: new Date().toLocaleTimeString(),// time to local string
                    roll: rollHistory.length + 1 // roll history
                };
                setRollHistory(prev => [newRoll, ...prev]); // add new roll to history
                setIsRolling(false); // set is rolling as false
            }
        }, 10);
    }

    return (
        <div className="flex flex-col justify-center items-center gap-5 p-4">
            <h1 className="text-2xl font-bold">Dice Roll Simulator</h1>
            <motion.div
                className="text-8xl select-none"
                animate={{
                    rotate: isRolling ? 360 : 0, // rotate the dice when rolling
                    scale: isRolling ? 1.5 : 1 // scale the dice when rolling
                }}
                transition={{
                    duration: 0.5,
                    repeat: isRolling ? 2 : 0
                }}
            >
                {dice}
            </motion.div>
            <motion.button
                className="btn btn-primary p-5"
                onClick={rollDice}
                disabled={isRolling}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
            >
                {isRolling ? 'Rolling...' : 'Roll Dice'}
            </motion.button>

            {/* Roll History Section */}
            <div className="w-full max-w-md mt-4">
                <h2 className="text-xl font-semibold mb-2">Roll History</h2>
                <div className="border rounded-lg shadow-sm overflow-y-auto max-h-60">
                    {rollHistory.map((roll, index) => (
                        <div key={index} className="flex justify-between items-center p-2 border-b hover:bg-blue-500 hover:text-white">
                            <span>Roll #{roll.roll}</span>
                            <span className=" text-5xl">{roll.dice}</span>
                            <span className="text-sm text-white">{roll.time}</span>
                        </div>
                    ))}
                    {rollHistory.length === 0 && (
                        <p className="text-center text-gray-500 p-4">No rolls yet</p>
                    )}
                </div>
            </div>
        </div>
    );

}

export default MainRollDice;