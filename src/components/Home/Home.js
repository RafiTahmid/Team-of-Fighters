import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <div className="left-side">
        <input type="text" className="search-input" />
        <button className="search-btn">Search</button>
      </div>
      <div className="right-side">
        <div className="cart">
          <p>This is players cart</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
