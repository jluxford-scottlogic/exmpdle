import React from "react";

export const Button = (props) => {
    const { activateFunc, name } = props;

    return (
        <button className={name} onClick={activateFunc}>
            {name}
        </button>
    )
}