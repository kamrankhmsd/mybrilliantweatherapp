import React, { Component } from 'react';
import LocationItem from './LocationItem';
import '../App.css';


class Locations extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        let locations = this.props.locations.map((location, index) => {
            return (
                <LocationItem item={location} key={location.woeid} />
            );
        });
        return (
            <div>
                <span>{this.props.message}</span>
                <div>{locations}</div>
            </div>
        );
    }
}

export default Locations;