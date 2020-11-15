import React from "react";
import "../styles/Jumbotron.css";

function Jumbotron() {
    return (
        <div className="jumbotron jumbotron-fluid">
            <div className="container">
                <h1 className="display-3">{this.props.title}</h1>
                <p className="lead">{this.props.subtitle}</p>
            </div>
        </div>
    )
}

export default Jumbotron;