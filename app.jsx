let players = [
  {
    name: "Jim Hoskins",
    score: 31,
    id: 1
  },
  {
    name: "Andree Hoskins",
    score: 35,
    id: 2
  },
  {
    name: "Alena Hoskins",
    score: 42,
    id: 3
  }
];

const Header = () => {
  return (
    <div className="header">
      <table className="stats counter counter-player">
        <tbody>
          <tr>
            <td>PLAYERS:</td>
            <td>3</td>
          </tr>
          <tr>
            <td>TOTAL POINTS:</td>
            <td>108</td>
          </tr>
        </tbody>
      </table>
      <div className="stopwatch">
        <h2>STOPWATH</h2>
        <h1 className="stopwatch-time">0</h1>
        <button>START</button>
        <button>RESET</button>
      </div>
    </div>
  );
};

const PlayerList = ({ players }) => {
  return (
    <div>
      <div className="player counter">
        <div className="player-name counter-score">{players[0].name}</div>
        <div className="player-score counter">
          <button className="player decrement counter-action"> - </button>
          <div className="counter-score">{players[0].score}</div>
          <button className="player increment counter-action "> + </button>
        </div>
      </div>

      <div className="player counter">
        <div className="player-name counter-score">{players[1].name}</div>
        <div className="player-score counter">
          <button className="player decrement counter-action"> - </button>
          <div className="counter-score">{players[1].score}</div>
          <button className="player increment counter-action "> + </button>
        </div>
      </div>

      <div className="player counter">
        <div className="player-name counter-score">{players[2].name}</div>
        <div className="player-score counter">
          <button className="player decrement counter-action"> - </button>
          <div className="counter-score">{players[2].score}</div>
          <button className="player increment counter-action "> + </button>
        </div>
      </div>
    </div>
  );
};
const PlayerForm = () => {
  return (
    <div className="add-player-form">
      <form action="">
        <input type="text" placeholder="ENTER A NAME" />
        <input type="submit" value="ADD PLAYER" />
      </form>
    </div>
  );
};

const Application = ({ title, players }) => {
  return (
    <div className="scoreboard">
      <Header players={players} />
      <PlayerList players={players} />
      <PlayerForm />
    </div>
  );
};

ReactDOM.render(
  <Application title="Scoreboard" players={players} />,
  document.getElementById("container")
);
