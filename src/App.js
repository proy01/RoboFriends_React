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

    onSearchChange = (event) => {
        this.setState({searchField: event.target.value});
    }

    render() {

        const filteredBots = this.state.robots.filter(robots => {
            return robots.name.toLowerCase().includes(this.state.searchField.toLowerCase());
        })
        console.log(filteredBots);
        return (
            <div className={'tc'}>
                <h1>Robofriends</h1>
                <SearchBox searchChange={this.onSearchChange} />
                <CardList robots={filteredBots} />
            </div>
        )
    }
}

export default App;