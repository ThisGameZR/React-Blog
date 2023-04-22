import React from "react";
import jhin from "../../assets/jhin.png";
import "./possibility.css";

const Possibility = () => (
  <div className="gpt3__possibility section__padding" id="possibility">
    <div className="gpt3__possibility-image">
      <img src={jhin} alt="possibility" />
    </div>
    <div className="gpt3__possibility-content">
      <h1 className="gradient__text">Community spotlight</h1>
      <p>
        Highlight different members of the League of Legends community, including streamers, content creators, and other
        influencers.
      </p>
    </div>
  </div>
);

export default Possibility;
