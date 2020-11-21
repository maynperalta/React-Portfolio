import React from "react";


function PortfolioCard({title, image, liveurl, githuburl}) {
    return (
        <div className="col-md-3">
            <div className="card">
              <a href={liveurl} target="_blank" rel="noreferrer">
              <img src={image} className="img" alt="Meal Assistant" />
              <h3>{title}</h3>
              </a>
              <a href={githuburl} target="_blank" rel="noreferrer">GitHub Repo</a>
            </div>
            
          </div>
    )
}

export default PortfolioCard;