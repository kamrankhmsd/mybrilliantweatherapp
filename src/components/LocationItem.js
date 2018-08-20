import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';


class LocationItems extends Component {
    constructor(props) {
        super(props);
        this.state = {
            item: props.item
        }
    }

    render() {
        return (
            <Link to={`/location/${this.state.item.woeid}`} title="Click here for detailed information">
                <ul className="item-list">
                    <li className="item-heading">{this.state.item.title}</li>
                    <li className="item-sub-heading">Location Type: <span>{this.state.item.location_type}</span></li>
                    <li className="item-sub-heading">Latt/Long: <span>{this.state.item.latt_long}</span></li>
                </ul>
            </Link>
        );
    }
}

export default LocationItems;