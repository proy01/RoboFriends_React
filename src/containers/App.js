import React, {Component} from "react";
import CardList from "../components/CardList";
import SearchBox from '../components/SearchBox';

import './App.css';
import Scroll from "../components/Scroll";

class App extends Component{

    constructor(props) {
        super(props);
        this.state = {
            robots: [],
            searchField: '',
        };
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                return response.json()
            })
            .then(
            users => {
                this.setState({robots: users})
            }
        )
    }

    onSearchChange = (event) => {
        this.setState({searchField: event.target.value});
    }

    render() {

        const filteredBots = this.state.robots.filter(robots => {
            return robots.name.toLowerCase().includes(this.state.searchField.toLowerCase());
        })
        if (this.state.robots.length === 0){
            return <h1 className={'tc'}>Loading</h1>
        } else {
            return (
                <div className={'tc'}>
                    <h1>Robofriends</h1>
                    <SearchBox searchChange={this.onSearchChange} />
                    <Scroll>
                        <CardList robots={filteredBots} />
                    </Scroll>
                </div>
            )
        }

    }
}

export default App;