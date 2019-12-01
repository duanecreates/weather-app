import React, {Component} from 'react';
import './Search.scss';
import _ from 'lodash';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {city: ''};
    }

    submit = _.debounce(() => {
        this.props.updatedCity(this.state.city);
    }, 500);

    handleInput = (e) => {
        this.setState({
            city: e.target.value
        });
    };

    render() {
        return (
            <div className="Search">
                {/*TODO dont submit form on enter*/}
                <form onSubmit={this.submit}>
                    <input placeholder="Search City" value={this.state.city} onKeyUp={this.submit}
                           onChange={this.handleInput} autoFocus={true}/>
                </form>
            </div>
        )
    }
}

export default Search;