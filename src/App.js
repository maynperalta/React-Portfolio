import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import About from "./component/About";
import Contact from "./component/Contact";
import Portfolio from "./component/Portfolio";
import Resume from "../src/assets/Resume.pdf";
import Nav from "../src/component/Nav";
import Footer from "../src/component/Footer";

function App() {
  return (
    <div>
    
    <Router basename={process.env.PUBLIC_URL}>
    <Nav />
        <Route exact path="/" component={About} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/contact" component={Contact} />
        <Route path="/Resume.pdf" component={Resume} />
    </Router>
    <Footer />
    </div>
  );
}

export default App;
