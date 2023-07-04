export const checkValues = (setGameWon, winningVals, allValues, gameValues, setGameValues) => {
    const winningValues = winningVals(5);

    let gameWon = gameValues.length > 0 && allValues[0] > -1;
    gameValues.forEach(a => {
        if (winningValues[a.name] != a.value) {
            gameWon = false;
            console.log(gameWon);
        }
    });
    console.log(gameWon);
    setGameWon(gameWon);

    if (!gameWon) {
        let interVals = [];
        gameValues.forEach(a => {
            let isYellow = false;
            allValues.forEach(v => {if (v == a.value) {isYellow = true;}});
            const colour = winningValues[a.name] == a.value ? 'blue' : (isYellow ? 'yellow' : 'white');
            const newVal = {name: a.name + a.prevVals.length, value : a.value, colour: colour};
            const prevVals = [...a.prevVals, newVal];
            interVals = [...interVals, {name: a.name, value: a.value, prevVals : prevVals}];
        });
        setGameValues(interVals);
    }
} 