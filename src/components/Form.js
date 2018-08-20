import React, { Component } from 'react';
import Locations from './Locations';
import Header from './Header';
import '../App.css'

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    onChange = (e) => {
        this.setState({ searchItem: e.target.value });
    }

    render() {
        return (
            <div>
                <Header />
                <div className="wrapper">
                    <div className="form">
                        <form className="form" onSubmit={this.getLocations}>
                            <input className="location-search-input" type="text" onChange={this.onChange} placeholder="location..." autoFocus />
                            <button className="location-search-button">Find locations</button>
                        </form>
                        <Locations />
                    </div>
                </div>
            </div>
        );
    };
}

export default Form;