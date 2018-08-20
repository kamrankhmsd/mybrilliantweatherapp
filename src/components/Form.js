import React, { Component } from 'react';
import Locations from './Locations';
import Header from './Header';
import '../App.css'

class Form extends Component {
    constructor(props) {
        super(props);
        // Initial state
        this.state = {
            locations: [],
            searchItem: '',
            message: ''
        };
    }

    getLocations = (e) => {
        e.preventDefault();
        let apiQuery = this.state.searchItem;
        this.setState({ searchItem: '' });
        if (apiQuery) {
            this.setState({ message: 'LOADING...' });
            /*
            -- The weather api uses CORS so I have appended the api URL 
            -- with https://cors-anywhere.herokuapp.com/. 
            */
            fetch(`https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/search/?query=${apiQuery}`)
                .then(result => result.json())
                .then(location => {
                    let locationsArray = location.slice();
                    {
                    locationsArray.length > 0 ?
                        this.setState({ locations: locationsArray, message: 'SEARCH RESULTS' }) :
                        this.setState({ locations: locationsArray, message: 'LOCATION NOT FOUND' })
                    };
                }).catch(err => {
                    console.log(err);
                    // Request failed - error message
                    this.setState({ message: 'ERROR: REQUEST FAILED' });
                });
        } else {
            // Input is empty - error message
            this.setState({ message: 'PLEASE ENTER A LOCATION' });
        }
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
                            <input className="location-search-input" type="text" onChange={this.onChange} placeholder="location..." autoFocus value={this.state.searchItem} />
                            <button className="location-search-button">Find locations</button>
                        </form>
                        <Locations locations={this.state.locations} message={this.state.message} />
                    </div>
                </div>
            </div>
        );
    };
}

export default Form;