import React from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import "../styles/Portfolio.css";
import blog from "../assets/blog.png";
import homepic from "../assets/homepic.png";
import Meals from "../assets/Meals.png";
import Password from "../assets/Password.png";
import scheduler from "../assets/scheduler.png";
import team from "../assets/team.png";
import Weather from "../assets/Weather.png";

function Portfolio() {
    return(
        <div>
            <Nav />
            <div className="container">
        <div className="row">
            <div className="col-md-12">
                <h1>Portfolio</h1>
            </div>
        </div>
        <div className="row">
          <div className="col-md-3">
            <div className="card">
              <a href="https://maynperalta.github.io/Meal-Assistant/" target="_blank" rel="noreferrer">
              <img src={Meals} className="img" alt="Meal Assistant" />
              <h3>Meal Assistant</h3>
              </a>
              <a href="https://github.com/maynperalta/Meal-Assistant" target="_blank" rel="noreferrer">GitHub Repo</a>
            </div>
            
          </div>
          <div className="col-md-3">
            <div className="card">
              <a href="https://maynperalta.github.io/MyWeatherApp/" target="_blank" rel="noreferrer">
              <img src={Weather} className="img" alt="Weather" />
              <h3>Weather Application</h3>
              </a>
              <a href="https://github.com/maynperalta/MyWeatherApp" target="_blank" rel="noreferrer">GitHub Repo</a>
          </div>
          </div>
          <div className="col-md-3">
            <div className="card">
              <a href="https://maynperalta.github.io/DayPlanner/" target="_blank" rel="noreferrer">
              <img src={scheduler} className="img" alt="Planner" />
              <h3>Day Planner</h3>
              </a>
              <a href="https://github.com/maynperalta/DayPlanner" target="_blank" rel="noreferrer">GitHub Repo</a>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card">
              <a href="https://blog-machine.herokuapp.com/" target="_blank" rel="noreferrer">
              <img src={blog} className="img" alt="BlogMachine" />
              <h3>Blog Machine</h3>
              </a>
              <a href="https://github.com/maynperalta/BlogMachine" target="_blank" rel="noreferrer">GitHub Repo</a>
            </div>
          </div>
        </div> 
        <div className="row">
          <div className="col-md-3">
            <div className="card">
              <a href="https://maynperalta.github.io/PasswordGenerator/" target="_blank" rel="noreferrer">
              <img src={Password} className="img" alt="Password" />
              <h3>Password Generator</h3>
              </a>
              <a href="https://github.com/maynperalta/PasswordGenerator" target="_blank" rel="noreferrer">GitHub Repo</a>
          </div>
          </div>
          <div className="col-md-3">
            <div className="card">
              <a href="https://youtu.be/CBsJRQbsvIU/" target="_blank" rel="noreferrer">
              <img src={team} className="img" alt="Team Profile Generator" />
              <h3>Team Profile</h3>
              </a>
              <a href="https://github.com/maynperalta/Employee-Summary" target="_blank" rel="noreferrer">GitHub Repo</a>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card">
              <a href="https://agile-taiga-32479.herokuapp.com/" target="_blank" rel="noreferrer">
              <img src={homepic} className="img" alt="Burger Builder" />
              <h3>Eat-Da-Burger!</h3>
              </a>
              <a href="https://github.com/maynperalta/burger" target="_blank" rel="noreferrer">GitHub Repo</a>
            </div>
          </div>
        </div>
       </div>


            <Footer />
        </div>
    )
}

export default Portfolio;