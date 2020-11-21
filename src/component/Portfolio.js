import React from "react";
import PortfolioInfo from "../data/PortfolioInfo";
import PortfolioCard from "../component/PortfolioCard";
import "../styles/Portfolio.css";

function Portfolio() {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h1>Portfolio</h1>
          </div>
        </div>
        <div className="row">
          {PortfolioInfo.map((info) => {
            return (
              <PortfolioCard
                title={info.title}
                image={info.image}
                liveurl={info.liveurl}
                githuburl={info.githuburl}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
