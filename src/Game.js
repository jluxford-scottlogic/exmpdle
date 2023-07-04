import './Game.css';
import React, { useEffect } from "react";
import { useState } from 'react';
import { OptionInstance } from './Components/OptionInstance';
import { Button } from './Components/Button';
import { getAllClassic } from './Utils/ApiCalls';
import { checkValues } from './Utils/SuccessLogic';

export const Game = () => {
    const valueHeadings = ['Temperature 🌡', 'Wind Speed 🌬', 'Rain ☔', 'Visibility 🌈', 'UV ☀'];
    const initialState = valueHeadings.map(a => {return {name : a, value : 0, prevVals : []}});
    const [gameValues, setGameValues] = useState(initialState);

    const [gameWon, setGameWon] = useState(false);
    const [allValues, setVal] = useState([-1,-1,-1,-1,-1]);

    useEffect(() => {
        getAllClassic(setVal);
    }, [gameWon])

    const winningVals = (n) => {
        if (n == -1) {return {}}; 
        let tempObj = winningVals(n - 1); 
        tempObj[valueHeadings[n]] = allValues[n]; 
        return tempObj;
    };
    
    const updateValue = (header) => (inp) => {
        const newValue = gameValues.map(a => a.name === header ? {...a, value : inp.target.value} : a);
        setGameValues(newValue);
    }
    console.log(gameWon);

    return (
        <div className="flexbox-col">
            <div className="flexbox-row">
                {gameValues.map(a => <OptionInstance key={a.name} name={a.name} inpVal={a.value} inpValUpd={updateValue(a.name)} prevVals={a.prevVals} />)}
            </div>
            {gameWon ? "WOO GAME WON" : <Button name="Submit Guess" activateFunc={() => checkValues(setGameWon, winningVals, allValues, gameValues, setGameValues)} />}
        </div>
    )
}