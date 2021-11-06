import React from "react";
import "./style.css"

function Card(props){
    return (
        <div className="card">
            <img src={props.image} alt={props.name} />
            <h2 className="title">{props.name}</h2>
        </div>
    )
}

export default Card;