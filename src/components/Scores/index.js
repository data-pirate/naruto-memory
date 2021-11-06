import React from "react";
import "./style.css";

function Scores(props) {
    return (
        <div className="scores">
            <div>
                High Scores
                <h3 className="high-score">{props.highScore}</h3>
            </div>
            <div>
                Your Scores
                <h3 className="curr-score">{props.currScore}</h3>
            </div>
        </div>
    );
}


export default Scores;