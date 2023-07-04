import '../Game.css';
import React from "react";
import { PreviousValues } from "./PreviousValues";

export const OptionInstance = (props) => {
    const { name, inpVal, inpValUpd, prevVals } = props;

    return (
        <div className="flexbox-col">
            {name}
            <PreviousValues prevVals={prevVals} />
            <input type="text" name={name} value={inpVal.value} onChange={inpValUpd} />
        </div>
    )
}