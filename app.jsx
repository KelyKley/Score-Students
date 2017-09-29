let players = [
  {
    name: "Jim Hoskins",
    score: 31,
    id: 1,
  },
  {
    name: "Andree Hoskins",
    score: 35,
    id: 2,
  },
  {
    name: "Alena Hoskins",
    score: 42,
    id: 3,
  },
];

const Header = () => {
  return (
    <div className="header">
      <table>
        <tr>
          <td>PLAYERS:</td>
          <td>3</td>
        </tr>
        <tr>
          <td>TOTAL POINTS:</td>
          <td>108</td>
        </tr>
      </table>
      <div>
        <h2>STOPWATH</h2>
        <h1 className="stopwatch-time">0</h1>
        <button>START</button>
        <button>RESET</button>
      </div>
    </div>);
}

const PlayerList = ({ players }) => {
  return (
    <div>
      {players.map((item, index) => {
        return (
          <div className="player  ">
            <div className="player-name counter-score">{item.name}</div>
            <div className="player-score  ">
              <div className="decrement counter-action"><strong> - </strong></div>
              <div className="counter-score">{item.score}</div>
              <div className="increment counter-action "> <strong>+</strong> </div>
            </div>
          </div>);
      })
      }
    </div>
  );
}
const PlayerForm = () => {
  return (
    <div className="">
      <input type="text" placeholder="ENTER A NAME" />
      <input type="submit" value="ADD PLAYER" />
    </div>);
}

const Application = ({ title, players }) => {
  return (
    <div>
      <Header players={players} />
      <PlayerList players={players} />
      <PlayerForm />
    </div>
  );
}

ReactDOM.render(<Application title="Scoreboard" players={players} />, document.getElementById('container'));