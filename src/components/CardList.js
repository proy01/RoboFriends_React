import React, {Component} from "react";
import RoyCard from './RoyCard';

class CardList extends Component {
    render() {
        const robots = this.props.robots;
        return (
            <div>
                {
                    robots.map((user, i) => {
                        return <RoyCard key={i}
                                        id={robots[i].id}
                                        name={robots[i].name}
                                        email={robots[i].email}/>
                    })
                }
            </div>
        )
    }
}

export default CardList;