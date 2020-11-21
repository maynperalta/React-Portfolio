import React from "react";
import "../styles/Contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faTumblr } from "@fortawesome/free-brands-svg-icons";

function Contact() {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h1>Contact/Links</h1>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-auto" >
              <button type="button" className="btn btn-primary">
            <a
              href="mailto:maynperalta@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              
            </a>Email Me <FontAwesomeIcon icon={faEnvelope} />
            </button>
          </div>
          <div className="col-md-auto">
          <button type="button" className="btn btn-primary">
            <a
              target="_blank"
              href="https://www.linkedin.com/in/maynard-peralta/"
              rel="noreferrer"
            >
              
              
            </a>Visit me on LinkedIn <FontAwesomeIcon icon={faLinkedin} />
            </button>
          </div>
          <div className="col-md-auto">
          <button type="button" className="btn btn-primary">
            <a
              target="_blank"
              href="https://github.com/maynperalta"
              rel="noreferrer"
            >
              
              
            </a>Visit my GitHub page <FontAwesomeIcon icon={faGithub} />
            </button>
          </div>
        </div>
        <div className="row mt-5">
        <div className="col-md-12">
          <h4>Connect with me on social media!</h4>
        </div>
      </div>
      <div className="row justify-content-center">
          <a href="https://www.facebook.com/Man.of.Sorrows" target="_blank" rel="noreferrer" className="fa fa-facebook"><FontAwesomeIcon icon={faFacebook} /></a>    
          <a href="https://twitter.com/maynperalta?lang=en" target="_blank" rel="noreferrer" className="fa fa-twitter" ><FontAwesomeIcon icon={faTwitter} /></a>
          <a href="https://www.youtube.com/channel/UC2d6zTXzXzh-2DE8QljA19g?" target="_blank"  rel="noreferrer" className="fa fa-youtube"><FontAwesomeIcon icon={faYoutube} /></a>
          <a href="https://www.instagram.com/maynperalta/" target="_blank"  rel="noreferrer"className="fa fa-instagram" ><FontAwesomeIcon icon={faInstagram} /></a>
          <a href="https://maynardperalta.tumblr.com/" target="_blank"  rel="noreferrer"className="fa fa-tumblr" ><FontAwesomeIcon icon={faTumblr} /></a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
