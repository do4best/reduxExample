import React, { useState, useEffect, useCallback } from 'react';

function MainPomodomoTimer() {
    const [timeLeft, setTimeLeft] = useState(25 * 60); // 25 minutes in seconds
    const [isActive, setIsActive] = useState(false);
    const [timerType, setTimerType] = useState('work'); // 'work' or 'break'

    const TIMER_SETTINGS = {
        work: 25 * 60,
        shortBreak: 5 * 60,
        longBreak: 15 * 60
    };

    const formatTime = useCallback((seconds) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    }, []);

    useEffect(() => {
        let interval = null;

        if (isActive && timeLeft > 0) {
            interval = setInterval(() => {
                setTimeLeft((prevTime) => {
                    if (prevTime <= 1) {
                        setIsActive(false);
                        playNotification();
                        return 0;
                    }
                    return prevTime - 1;
                });
            }, 1000);
        }

        return () => {
            if (interval) clearInterval(interval);
        };
    }, [isActive]);

    const playNotification = () => {
        try {
            const audio = new Audio('https://actions.google.com/sounds/v1/alarms/beep_short.ogg');
            audio.play();
        } catch (error) {
            console.error('Error playing notification:', error);
        }
    };

    const handleStart = () => {
        setIsActive(true);
    };

    const handlePause = () => {
        setIsActive(false);
    };

    const handleReset = () => {
        setIsActive(false);
        setTimeLeft(TIMER_SETTINGS[timerType]);
    };

    const switchTimer = (type) => {
        setIsActive(false);
        setTimerType(type);
        setTimeLeft(TIMER_SETTINGS[type]);
    };

    const getProgressValue = () => {
        const totalTime = TIMER_SETTINGS[timerType];
        return ((totalTime - timeLeft) / totalTime) * 100;
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-orange-400 p-4">
            <div className="bg-blue-400 rounded-lg shadow-lg p-8 w-full max-w-md">
                <h1 className="text-3xl font-bold text-center mb-6">Pomodoro Timer</h1>

                {/* Timer Type Buttons */}
                <div className="flex justify-center gap-2 mb-6">
                    <button
                        className={`px-4 py-2 rounded ${timerType === 'work' ? 'bg-blue-500 text-white' : 'bg-pink-500'}`}
                        onClick={() => switchTimer('work')}
                    >
                        Work
                    </button>
                    <button
                        className={`px-4 py-2 rounded ${timerType === 'shortBreak' ? 'bg-green-500 text-white' : 'bg-pink-500'}`}
                        onClick={() => switchTimer('shortBreak')}
                    >
                        Short Break
                    </button>
                    <button
                        className={`px-4 py-2 rounded ${timerType === 'longBreak' ? 'bg-purple-500 text-white' : 'bg-pink-500'}`}
                        onClick={() => switchTimer('longBreak')}
                    >
                        Long Break
                    </button>
                </div>

                {/* Timer Display */}
                <div className="text-6xl font-bold text-center mb-8">
                    {formatTime(timeLeft)}
                </div>

                {/* Progress Bar */}
                <div className="w-full bg-gray-200 rounded-full h-2.5 mb-6">
                    <div
                        className="bg-blue-600 h-2.5 rounded-full transition-all duration-1000"
                        style={{ width: `${getProgressValue()}%` }}
                    />
                </div>

                {/* Control Buttons */}
                <div className="flex justify-center gap-4">
                    {!isActive ? (
                        <button
                            className="btn btn-primary px-6 py-2"
                            onClick={handleStart}
                        >
                            Start
                        </button>
                    ) : (
                        <button
                            className="btn btn-warning px-6 py-2"
                            onClick={handlePause}
                        >
                            Pause
                        </button>
                    )}
                    <button
                        className="btn btn-error px-6 py-2"
                        onClick={handleReset}
                    >
                        Reset
                    </button>
                </div>
            </div>
        </div>
    );
}

export default MainPomodomoTimer;