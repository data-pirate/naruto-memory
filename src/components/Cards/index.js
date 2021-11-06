import React, {useEffect} from "react";
import Card from "../Card";
import characters from "../charData";

function Cards(props){
    const randomCards = characters;

    function shuffle(randomCards) {
        for (let i = randomCards.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [randomCards[i], randomCards[j]] = [randomCards[j], randomCards[i]];
    }
    }

    useEffect(() => {
        shuffle(randomCards);    
        props.updateHighScore(Math.max(props.highScore, props.currScore))
    });
    
    return (
        <div className="cards" onClick={(e) => {
            let parent = e.target.parentElement;
            let name = parent.querySelector('.title').textContent;
            if(name){
                if(props.selected.includes(name)){
                    props.updateSelected([]);
                    console.log("game over");
                    props.updateRightGuess(0);
                }else{
                    let newData = [...props.selected, name]
                    props.updateSelected(newData);
                    props.updateRightGuess(props.currScore + 1);
                }
            }
        }}>
            { randomCards.map((each) => <Card key={each.name} image={each.image} name={each.name}/>) }
        </div>
    )
}

export default Cards;