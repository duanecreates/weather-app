import React, {Component} from 'react';
import './Today.scss';
import sunriseIcon from './icons/sunrise-icon.svg';
import sunsetIcon from './icons/sunset-icon.svg';

class Today extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const today = this.props.today ? this.props.today : null;
        const city_name = today ? today.city_name : null;
        const country_code = today ? today.country_code : null;
        const icon = today ? today.weather.icon : null;
        const temp = today ? Math.round(today.temp) : null;
        const description = today ? today.weather.description : null;
        const sunrise = today ? today.sunrise : null;
        const sunset = today ? today.sunset : null;

        return (
            <div className="Today">
                {today !== null &&
                <div>
                    <h1>{city_name}, {country_code}</h1>
                    <div className="result">
                        <div className="icon">
                            <img src={`https://www.weatherbit.io/static/img/icons/${icon}.png`}
                                 alt={description}
                                 title={description}/>
                        </div>
                        <span>{temp}°C</span>
                    </div>
                    <div className="sun">
                        <div className="row">
                            <img src={sunriseIcon} alt="sun rise"/>
                            <span>{sunrise}</span>
                        </div>
                        <div className="row">
                            <img src={sunsetIcon} alt="sun set"/>
                            <span>{sunset}</span>
                        </div>
                    </div>
                </div>
                }

                {today === null && <p>No data available</p>}
            </div>
        )
    }
}

export default Today;