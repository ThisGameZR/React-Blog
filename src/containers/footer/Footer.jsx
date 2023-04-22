import React from "react";
import gpt3Logo from "../../logo.svg";
import "./footer.css";

const Footer = () => (
  <div className="gpt3__footer section__padding">
    <div className="gpt3__footer-heading">
      <h1 className="gradient__text">Do you want to step into the future before others</h1>
    </div>

    <div className="gpt3__footer-btn">
      <p>Join us now!</p>
    </div>

    <div className="gpt3__footer-links">
      <div className="gpt3__footer-links_logo">
        <img src={gpt3Logo} alt="gpt3_logo" />
        <p>League of Legends</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Links</h4>
        <p>
          <a href="https://github.com/ThisGameZR" target="_blank">
            GitHub
          </a>
        </p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>External Links</h4>
        <p>
          <a href="https://leagueoflegends.com" target="_blank">
            League of Legends
          </a>
        </p>
        <p>
          <a href="https://www.riotgames.com" target="_blank">
            Riot Games
          </a>
        </p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Playing League with me!</h4>
        <p>ThisGameZ</p>
        <p>Online hrs: 20:00-01:00</p>
        <p>Sat - Sun</p>
      </div>
    </div>

    <div className="gpt3__footer-copyright">
      <p>@2021 ThisGameZR. All rights reserved.</p>
    </div>
  </div>
);

export default Footer;
