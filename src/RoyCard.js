import React, {Component} from "react";

class RoyCard extends Component {
    render() {
        return (
            <div className='bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5 tc w5'>
                <img src={`https://robohash.org/${this.props.id}?size=200x200`} alt={this.props.name + ' Robot'}/>
                <div className={'mt3'}>
                    <h2 className={'ma0'}>{this.props.name}</h2>
                    <p className={'mt2'}>{this.props.email}</p>
                </div>
            </div>
        )
    }
}

export default RoyCard;