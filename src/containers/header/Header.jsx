import React from "react";
import people from "../../assets/people.png";
import lol from "../../assets/lol.png";
import "./header.css";

const Header = () => (
  <div className="gpt3__header section__padding" id="home">
    <div className="gpt3__header-content">
      <h1 className="gradient__text">Welcome to the League of Legends</h1>
      <p>
        Welcome to our League of Legends blog! Here, we delve into the exciting world of the Rift, discussing the latest
        strategies, highlighting the most powerful champions, and exploring the darker side of this thrilling game. Join
        us as we uncover the secrets of the game and unleash your inner champion.
      </p>

      <div className="gpt3__header-content__input">
        <input type="email" placeholder="Your Email Address" />
        <button type="button">Join us</button>
      </div>

      <div className="gpt3__header-content__people">
        <img src={people} />
        <p>1,000 people joined our discord</p>
      </div>
    </div>

    <div className="gpt3__header-image">
      <img src={lol} />
    </div>
  </div>
);

export default Header;
