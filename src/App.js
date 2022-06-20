import React, {Component} from "react";
import CardList from "./CardList";
import {robots} from "./Robots";
import SearchBox from './SearchBox';

class App extends Component{

    constructor(props) {
        super(props);
        this.state = {
            robots: robots,
            searchField: '',
        };
    }

    render() {
        return (
            <div className={'tc'}>
                <h1>Robofriends</h1>
                <SearchBox />
                <CardList robots={this.state.robots}/>
            </div>
        )
    }
}

export default App;