import React from 'react';
import './Today.scss';

function Today() {
    return (
        <div className="Today">
            <h1>Paris, France</h1>

            <div className="result">
                <div className="icon">
                    <img src="http://openweathermap.org/img/wn/01d@2x.png"/>
                </div>
                <span>16°C</span>
            </div>
        </div>
    )
}

export default Today;