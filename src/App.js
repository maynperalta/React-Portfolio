import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import About from "./component/About";
import Contact from "./component/Contact";
import Portfolio from "./component/Portfolio";
import Resume from "../src/assets/Resume.pdf";

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
        <Route exact path="/" component={About} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/contact" component={Contact} />
        <Route path="/Resume.pdf" component={Resume} />
    </Router>
  );
}

export default App;
