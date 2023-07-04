import './App.css';
import { Title } from './Components/Title';
import { Button } from './Components/Button';
import { useState } from 'react';
import { Game } from './Game';

function App() {

  const [startGame, startGameFunc] = useState(false);

  return (
    <div className="App">
      <header className="App-header">
        <Title/>
        {!startGame ? 
            <Button name={"Start New Game"} activateFunc={() => startGameFunc(true)}/> 
          : 
            <Game />
        }
      </header>
    </div>
  );
}

export default App;
