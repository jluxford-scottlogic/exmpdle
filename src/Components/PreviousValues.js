import React from "react";
import "./Components.css";

export const PreviousValues = (props) => {
    const { prevVals } = props;

    return (
        <div>
            {prevVals.map(a => <PreviousValue key={a.name}  value={a.value} colour={a.colour}/>)}
        </div>
    )
}

const PreviousValue = (props) => {
    const {value, colour} = props;

    return (
        <div name={value} className={"PrevVal-" + colour}>
            {value}
        </div>
    )
}