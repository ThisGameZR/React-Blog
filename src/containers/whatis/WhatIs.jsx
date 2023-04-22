import React from "react";
import Feature from "../../components/feature/Feature";
import "./whatis.css";

const WhatGPT3 = () => (
  <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
    <div className="gpt3__whatgpt3-feature">
      <Feature
        title="About Us"
        text="At our core, we are passionate gamers and League of Legends enthusiasts who are committed to sharing our knowledge and insights with others. We believe that by providing accurate and useful information, we can help players of all levels improve their skills and have a more enjoyable gaming experience."
      />
    </div>
    <div className="gpt3__whatgpt3-heading">
      <h1 className="gradient__text">Bringing you the best in League of Legends content.</h1>
      <p>Our Missions and Values</p>
    </div>
    <div className="gpt3__whatgpt3-container">
      <Feature
        title="Love of the game"
        text="Express your love of League of Legends and how it has inspired you to create this blog. Share your passion for the game and your desire to help others experience the same joy and excitement that you have found in it."
      />
      <Feature
        title="Dedication to community"
        text="Emphasize your dedication to building a positive and inclusive community around the game, and how this is a key part of your mission. Explain how you aim to foster an environment that is welcoming to players of all backgrounds and skill levels."
      />
      <Feature
        title="Ongoing improvement"
        text="Commit to ongoing improvement in your work, whether that's through feedback from readers, collaboration with other experts in the field, or simply staying up-to-date on the latest developments in the game."
      />
    </div>
  </div>
);

export default WhatGPT3;
