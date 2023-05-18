import React from "react";

export const ExampleComponent = (props) => {
    const { extraText } = props;

    return (
        <div>
            Example Test
            {extraText}
        </div>
    )
}