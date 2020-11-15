import React from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import Jumbotron from "./Jumbotron";

const Contact = () => {
        return(
            <div>
                <Nav />
                <Jumbotron title="Contact" />
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                        <a href="mailto:maynperalta@gmail.com" target="_blank">
                            <img className="logos" src={require("../assets/mail.png")} />
                        </a>
                        </div>
                        <div className="col-md-4">
                            <a target="_blank" href="https://www.linkedin.com/in/maynard-peralta/">
                                <img className="logos" src={require('../assets/linkedin.png')} />
                            </a>
                        </div>
                        <div className="col-md-4">
                            <a target="_blank" href="https://github.com/maynperalta">
                                <img className="logos" src={require("../assets/github.png")} />
                            </a>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        );
    
}

export default Contact;