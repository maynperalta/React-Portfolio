import React from "react";
import "../styles/Container.css";
import Headshot from "../assets/Headshot.JPG";
import Pdf from "../assets/Resume.pdf";

function About() {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h1>About Maynard Peralta</h1>
          </div>

          <div className="row">
            <div className="col-md-12 text-wrap">
              <div className="col-md-4 float-left">
                <img src={Headshot} className="img-fluid" alt="headshot" />
              </div>
              <p>
                Hello, and welcome to my portfolio. My name is Maynard Peralta.
                I'm currently a coding student for the University of Denver's
                Full Stack Coding Boot Camp. While I'm not in classes, I'm
                employed by the BNSF Railway as a freight train mechanical
                inspector. I grew up in Pueblo, Colorado and have worked and
                resided in the greater Denver area for the past 20 years. The
                Coding Boot Camp has been extremely rewarding with helping me
                develop the skills needed for full stack web development. I have
                been able to confidently learn various programming languages
                such as HTML, CSS, JavaScript, jQuery, NodeJS, ReactJS, along
                with many others still to come. My past work experience has also
                helped me learn other skills such as customer service, inventory
                management, materials coordination, as well as various computer
                office applications (Microsoft Excel, Word, etc.). Please, take
                a moment to look at my portfolio page where you can see some of
                the various projects I have worked on with the skills I have
                learned from the University of Denver so far. If you have any
                questions, I can be reached by phone or email.
                <br />
                <br />
                <a href="mailto:maynperalta@gmail.com">maynperalta@gmail.com</a>
                <br />
                <a href="tel:720-281-4690">720.281.4690</a>
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <h2>Links to My Pages</h2>
          </div>
        </div>
        <div className="row justify-content-md-center">
          <a
            href="https://github.com/maynperalta"
            target="_blank"
            rel="noreferrer"
          >
            <button type="button" className="btn btn-primary">
              GitHub
            </button>
          </a>
          <a
            href="https://www.linkedin.com/in/maynard-peralta/"
            target="_blank"
            rel="noreferrer"
          >
            <button type="button" className="btn btn-primary">
              LinkedIn
            </button>
          </a>
          <a href={Pdf} target="_blank" rel="noreferrer">
            <button type="button" className="btn btn-primary">
              Resume
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default About;
