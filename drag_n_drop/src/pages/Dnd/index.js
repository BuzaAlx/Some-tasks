import React, { useState } from "react";
import { users } from "../../players";
import User from "../../components/User";
import { useDrop } from "react-dnd";

const TeamSelection = () => {
  const [players, setPlayers] = useState(users);
  const [team, setTeam] = useState([]);

  const [{ isOver }, addToTeamRef] = useDrop({
    accept: "player",
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  });

  const [{ isOver: isPlayerOver }, removeFromTeamRef] = useDrop({
    accept: "team",
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  });

  const movePlayer = (item) => {
    console.log(item);
    if (item && item.type === "player") {
      setTeam((_team) => [..._team, players[item.index]]);
      setPlayers((_players) => _players.filter((_, idx) => idx !== item.index));
    } else {
      setPlayers((_players) => [..._players, team[item.index]]);
      setTeam((_team) => _team.filter((_, idx) => idx !== item.index));
    }
  };

  const dragHoverTeamBG = isOver ? "bg-warning" : "bg-light";
  const dragHoverPlayerBG = isPlayerOver ? "bg-warning" : "bg-light";

  return (
    <>
      <div className="row">
        <div className="col text-center">
          <h2>Drag-n-drop using React-dnd</h2>
          <div className="row justify-content-md-center">
            <div className={`col-5 border m-2 ${dragHoverPlayerBG}`}>
              <div className="bg-info row text-white">
                <div className="col font-weight-bold p-2">Users</div>
              </div>
              <ul className="list-group py-2 h-100" ref={removeFromTeamRef}>
                {players.map((player, idx) => (
                  <User
                    {...player}
                    key={player.id}
                    index={idx}
                    playerType="player"
                    onDropPlayer={movePlayer}
                  />
                ))}
              </ul>
            </div>
            <div className={`col-5 border m-2 ${dragHoverTeamBG}`}>
              <div className="bg-success row text-white">
                <div className="col font-weight-bold p-2">Group-A</div>
              </div>
              <ul className="list-group py-2 h-100" ref={addToTeamRef}>
                {team.map((player, idx) => (
                  <User
                    {...player}
                    key={player.id}
                    index={idx}
                    playerType="team"
                    onDropPlayer={movePlayer}
                  />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TeamSelection;
