import React, {Component} from 'react';
import './Loader.scss';

class Loader extends Component {
    render() {
        return (
            <div className="spinner">
                <div className="ball"></div>
                <p>Loading</p>
            </div>
        )
    }
}

export default Loader;