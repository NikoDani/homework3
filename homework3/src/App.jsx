import './App.css';
import Card from './card.jsx';
import { footballPlayers } from './data.js';
import PlayerList from './playerlist.jsx';

function App() {
  const handleNavClick = () => {
    window.open('https://lichess.org', '_blank');
  };

  return (
    <div>
      <nav className="navbar">
        <button onClick={handleNavClick}>Go to Lichess</button>
      </nav>
      <div className="card-container">
        <PlayerList players={footballPlayers} />
      </div>
    </div>
  );
}

export default App;
