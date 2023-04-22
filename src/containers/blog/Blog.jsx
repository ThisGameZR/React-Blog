import React from "react";
import Article from "../../components/article/Article";
import { blog01, blog02, blog03, blog04, blog05 } from "./imports";
import "./blog.css";

const Blog = () => (
  <div className="gpt3__blog section__padding" id="blog">
    <div className="gpt3__blog-heading">
      <h1 className="gradient__text">
        A lot is happening, <br /> We are blogging about it.
      </h1>
    </div>
    <div className="gpt3__blog-container">
      <div className="gpt3__blog-container_groupA">
        <Article
          imgUrl={blog01}
          date="4 weeks ago"
          href="https://www.youtube.com/watch?v=_FudDdGOdsE"
          text="Milio Champion Spotlight"
          description="Milio is a warmhearted boy from Ixtal who has, despite his young age, mastered the fire axiom and discovered something new: soothing fire. With this newfound power, Milio plans to help his family escape their exile by joining the Yun Tal—just like his grandmother once did. Having traveled through the Ixtal jungles to the capital of Ixaocan, Milio now prepares to face the Vidalion and join the Yun Tal, unaware of the trials—and dangers—that await him."
        />
      </div>
      <div className="gpt3__blog-container_groupB">
        <Article
          imgUrl={blog02}
          date="3 weeks ago"
          href="https://www.youtube.com/watch?v=yEu6okavFac"
          description="Expect no mercy from new Chibi Champions Zed and PROJECT Zed, coming at you fast in patch 13.6."
          text="The Masters of Shadow | Chibi Champion Showcase"
        />
        <Article
          imgUrl={blog03}
          date="last month"
          href="https://www.leagueoflegends.com/en-us/news/game-updates/patch-13-6-notes/"
          text="Patch 13.6 Notes"
          description="Setting ablaze the hearts (and autos) of his allies while giving his enemies headaches, Milio “the Gentle Flame” gives a whole new meaning to the term friendly fire with his release this patch!"
        />
        <Article
          imgUrl={blog04}
          date="2 months ago"
          href="https://www.leagueoflegends.com/en-us/event/milio-abilities-rundown/"
          text="New Champion! Milio abilities rundown"
          description="Warm your allies and burn your enemies with Milio coming in patch 13.6!"
        />
        <Article
          imgUrl={blog05}
          date="2 months ago"
          href="https://www.leagueoflegends.com/en-us/news/game-updates/champion-pricing-update/"
          text="Champions Pricing Update"
          description="Hey friends, Barackprobama and Riot August here with a quick update on our champion pricing model. Our main goal here is to make acquiring champions easier for new players..."
        />
      </div>
    </div>
  </div>
);

export default Blog;
