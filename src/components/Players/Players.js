import React from "react";
import SinglePlayer from "../SinglePlayer/SinglePlayer";
import "./Players.css";

const Players = ({ players, cart, setCart }) => {
  return (
    <div>
      {/* mapping for all the single player */}
      <div className="card-container">
        {players.map((pd) => (
          <SinglePlayer
            player={pd}
            key={pd?.idplayer}
            cart={cart}
            setCart={setCart}
          ></SinglePlayer>
        ))}
      </div>
    </div>
  );
};

export default Players;
