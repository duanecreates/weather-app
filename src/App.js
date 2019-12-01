import React, {Component} from 'react';
import './App.scss';
import Search from "./Search";
import Today from "./Today";
import Loader from './Loader';
import axios from 'axios';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            today: null,
            hasUserTyped: false,
            isLoading: false,
        };
    }

    componentDidMount = () => {
        this.retrieveUserLocation();
    };

    retrieveUserLocation = () => {
        this.setState({
            isLoading: true,
        });

        axios.get('http://ip-api.com/json').then(res => {
            if (!this.state.hasUserTyped)
                this.retrieveData(res.data.city, false);
        }).catch(err => {
            console.error(err);

            this.setState({
                isLoading: false,
            });
        });
    };

    retrieveData = (city, fromUser = true) => {
        if (fromUser)
            this.setState({
                hasUserTyped: true
            });

        this.setState({
            isLoading: true,
        });

        axios.get(`https://api.weatherbit.io/v2.0/current?city=${city}&units=m&key=b0f5636290994055be0da20d196ec507`).then(res => {
            this.setState({
                today: res.data.data[0],
                isLoading: false,
            })
        }).catch(err => {
            console.error(err);
            this.setState({
                today: null,
                isLoading: false,
            });
        });
    };

    render() {
        return (
            <div className="App">
                <Search updatedCity={this.retrieveData}/>

                {this.state.isLoading ? <Loader/> : <Today today={this.state.today}/>}
            </div>
        )
    }
}


export default App;
