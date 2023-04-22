import React from "react";
import Feature from "../../components/feature/Feature";
import "./features.css";

const featuresData = [
  {
    title: "PATCH 13.8 NOTES",
    href: "https://www.leagueoflegends.com/en-us/news/game-updates/patch-13-8-notes/",
    text: "Get ready, it’s time for the Mid-Season Invitational patch!",
  },
  {
    title: "PATCH 13.7 NOTES",
    href: "https://www.leagueoflegends.com/en-us/news/game-updates/patch-13-7-notes/",
    text: "Hear ye, hear ye! We’ve successfully managed to reduce the influx of poros (and hats) that tried to take over the Rift this past weekend. We hope you enjoyed the shenanigans while they lasted! Without further ado, let’s get to patch 13.7.",
  },
  {
    title: "PATCH 13.6 NOTES",
    href: "https://www.leagueoflegends.com/en-us/news/game-updates/patch-13-6-notes/",
    text: "Setting ablaze the hearts (and autos) of his allies while giving his enemies headaches, Milio “the Gentle Flame” gives a whole new meaning to the term friendly fire with his release this patch!",
  },
  {
    title: "PATCH 13.5 NOTES",
    href: "https://www.leagueoflegends.com/en-us/news/game-updates/patch-13-5-notes/",
    text: "In this week’s patch we have Yuumi’s much anticipated rework, several adjustments to Azir to help address his Pro skew, some buffs to roaming mid laners, and some buffs to counter jungling. In other news, we have some changes to ARAM including removing tower rubble, an update on the champion pricing changes, and an announcement about the depreciation of our 32-bit client.",
  },
];

const Features = () => (
  <div className="gpt3__features section__padding" id="features">
    <div className="gpt3__features-heading">
      <h1 className="gradient__text">Latest news and updates</h1>
      <p>
        <a href="https://www.leagueoflegends.com/" target="_blank">
          https://www.leagueoflegends.com/
        </a>
      </p>
    </div>
    <div className="gpt3__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} href={item.href} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Features;
