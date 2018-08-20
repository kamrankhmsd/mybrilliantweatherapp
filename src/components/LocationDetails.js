import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import '../App.css';


class LocationDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            country: '',
            humidity: '',
            minTemp: null,
            maxTemp: null,
            weatherState: '',
            message: ''
        }
    }

    componentWillMount() {
        this.getWeather();
    }

    getWeather = () => {
        let woeid = this.props.match.params.id;
        this.setState({ message: 'LOADING...' });
        /*
            -- The weather api uses CORS so I have appended the api URL 
            -- with https://cors-anywhere.herokuapp.com/. 
        */
        fetch(`https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/${woeid}/`)
            .then(response => response.json())
            .then(details => {
                this.setState({
                    title: details.title,
                    country: details.parent.title,
                    humidity: details.consolidated_weather[0].humidity,
                    minTemp: details.consolidated_weather[0].min_temp,
                    maxTemp: details.consolidated_weather[0].max_temp,
                    weatherState: details.consolidated_weather[0].weather_state_abbr,
                    message: ''
                });
            }).catch(err => {
                console.log(err);
                this.setState({ message: 'ERROR: REQUEST FAILED' });
            });
    }

    render() {
        let minTemp = this.state.minTemp;
        let maxTemp = this.state.maxTemp;
        return (
            <div>
                <Header />
                <div className="wrapper">
                    {this.state.message ? <div className="align-center"><span>{this.state.message}</span></div> :
                        <div>
                            <div className="align-center">
                                <h2>TODAY'S WEATHER</h2>
                            </div>
                            <ul className="location-details-item-list">
                                <li className="details-item">City: <span>{this.state.title}</span></li>
                                <li className="details-item">Country/Region: <span>{this.state.country}</span></li>
                                <li className="details-item">Min Temperature: <span>{Math.round(minTemp * 100) / 100} &#8451;</span></li>
                                <li className="details-item">Max Temperature: <span>{Math.round(maxTemp * 100) / 100} &#8451;</span></li>
                                <li className="details-item">Humidity: <span>{this.state.humidity}</span></li>
                                <li className="details-item">Conditions: <img className="weather-image" src={`https://www.metaweather.com/static/img/weather/${this.state.weatherState}.svg`} /></li>
                            </ul>
                        </div>
                    }
                    <div className="align-right">
                        <Link className="back-button" to="/">Back</Link>
                    </div>

                </div>

            </div>
        );
    }
}

export default LocationDetails;