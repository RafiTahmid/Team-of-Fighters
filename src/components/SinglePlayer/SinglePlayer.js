import React from "react";
import "./SinglePlayer.css";

const SinglePlayer = ({ player, cart, setCart }) => {
  const { strNationality, strPlayer, idPlayer, strCutout } = player;

  const handleAddToCart = () => {
    const info = {
      strNationality,
      strPlayer,
      idPlayer,
      strCutout,
      price: 150,
    };

    if (cart?.length) {
      setCart = [...cart, info];
      return;
    } else {
      setCart([info]);
    }
  };

  return (
    <div className="card">
      <img className="player-img" src={strCutout} alt="" />
      <h6>{strPlayer}</h6>
      <p>{strNationality}</p>

      <button className="card-btn">Details</button>
      <button onClick={handleAddToCart} className="card-btn">
        Add to Cart
      </button>
      <button className="card-btn">Bookmark</button>
    </div>
  );
};

export default SinglePlayer;
