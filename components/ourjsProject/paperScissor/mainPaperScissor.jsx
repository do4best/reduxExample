import React from 'react';
import { motion } from "motion/react"
const computerPlay = () => {
    const choices = ["rock", "paper", "scissor"];
    const randomNumber = Math.floor(Math.random() * choices.length);
    return choices[randomNumber];
};

function MainPaperScissor() {
    const [playerChoice, setPlayerChoice] = React.useState("");
    const [computerChoice, setComputerChoice] = React.useState("");
    const [result, setResult] = React.useState("");
    const [scores, setScores] = React.useState({
        player: 0,
        computer: 0
    });

    const playRound = (player, computer) => {
        if (player === computer) {
            return "Draw!";
        }

        const winConditions = {
            rock: "scissor",
            paper: "rock",
            scissor: "paper"
        };

        if (winConditions[player] === computer) {
            setScores(prev => ({...prev, player: prev.player + 1}));
            return `You Win! ${player} beats ${computer}`;
        } else {
            setScores(prev => ({...prev, computer: prev.computer + 1}));
            return `You Lose! ${computer} beats ${player}`;
        }
    };

    const handleChoice = (choice) => {
        const computerSelection = computerPlay();
        setPlayerChoice(choice);
        setComputerChoice(computerSelection);
        setResult(playRound(choice, computerSelection));
    };

    return (
        <div className="flex flex-col justify-center items-center min-h-[500px] bg-blue-500 gap-10">
            <h1 className="text-success text-5xl">Rock Paper Scissor Game</h1>
            <h1 className="text-secondary">Choose Your Move:</h1>

            <div className="flex flex-row justify-center items-center gap-5">
                <motion.button whileHover={{ scale: 1.1 }}
                               whileTap={{ scale: 0.95 }}
                    className="btn btn-primary"
                    onClick={() => handleChoice("rock")}
                >
                    &#x1F44A;
                </motion.button>
                <motion.button whileHover={{ scale: 1.1 }}
                               whileTap={{ scale: 0.95 }}
                    className="btn btn-primary"
                    onClick={() => handleChoice("paper")}
                >
                    &#x1f590;
                </motion.button>
                <motion.button whileHover={{ scale: 1.1 }}
                               whileTap={{ scale: 0.95 }}
                    className="btn btn-primary"
                    onClick={() => handleChoice("scissor")}
                >
                    &#x270c;
                </motion.button>            </div>

            {playerChoice && (
                <div className="text-white text-xl">
                    <p>Your choice: {playerChoice}</p>
                    <p>Computer's choice: {computerChoice}</p>
                    <p className="mt-2 font-bold">{result}</p>
                </div>
            )}

            <div className="flex flex-row justify-center items-center gap-5">
                <h1>Your Score: {scores.player}</h1>
                <h1>Computer Score: {scores.computer}</h1>
            </div>
        </div>
    );
}

export default MainPaperScissor;
