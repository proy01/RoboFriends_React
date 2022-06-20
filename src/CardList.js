import React, {Component} from "react";
import {robots} from "./Robots";
import RoyCard from './RoyCard';

class CardList extends Component {
    cardArray = robots.map((user, i) => {
        return <RoyCard key={i} id={robots[i].id} name={robots[i].name} email={robots[i].email} />
    })
    render() {
        return (
            <div>
                {this.cardArray}
            </div>
        )
    }
}

export default CardList;