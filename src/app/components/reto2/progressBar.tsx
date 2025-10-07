"use client";
import { useState } from "react";

const ProgressBar = () => {
    const [progress, setProgress] = useState<number>(0);
    const [inputValue, setInputValue] = useState<number>(0);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const result = validateInput(inputValue);
        if (!result) {
            alert("Please enter a number between 0 and 100");
            setInputValue(0);
            return;
        }
        setProgress(inputValue);
    }

    const validateInput = (value: number) => {
        return value >= 0 && value <= 100;
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(Number(e.target.value));
    }

    return (
        <div className="w-screen bg-white flex flex-col p-4 justify-center items-center gap-4 text-black">
            <h2 className="text-8xl">Progress bar</h2>
            <div id="progress-bar-container" className="w-full h-10 bg-gray-200 rounded-full border border-5 border-black">
                <div className="bg-blue-500 h-10 rounded-full" style={{ width: `${progress}%` }} />
            </div>
            <input type="number" value={inputValue} onChange={handleChange} onBlur={handleSubmit} className="border border-gray-300 rounded p-2 mt-4" />
        </div>
    );
}

export default ProgressBar;
