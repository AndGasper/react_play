import React, {Component} from 'react';
import { connect } from 'react-redux';
import Greeting from './greeting';
import './home.css';

import {signin} from '../actions/index';


class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            input: ''
        }
    }

    displayInput() {
        if (this.props.auth) {

        }
        return <input type="text" placeholder="username" name="username" value={this.state.input} onChange ={event => {this.handleInputChange(event)}}/>
    }

    displayGreeting = () => {
        if (this.props.auth) {
            return <Greeting color={this.props.user.fav_color} name={this.props.user.name}/>;
        }
        return <h2>Please click button to sign in</h2>;
    };

    handleInputChange(event) {
        // Handle keyboard presses from the input field
        // All events have targets hence event.target.value
        this.setState({
            input: event.target.value
        });
    }

    handleAuth = () => {
        // Clear the input field after they login
        this.setState({
            input: ''
        });
        // Render their favorite color
        this.props.signin(!this.props.auth, this.state.input);
    };



    render() {
        const {auth} = this.props;
        return (
        <div className="home">
            {this.displayInput()}
            <button onClick={() => {this.handleAuth()}}>
                {auth ? 'Sign Out' : 'Sign In'}
            </button>
            {this.displayGreeting()}
        </div>
        )
    }
}

//does not have to be called mapStateToProps to work
function mapStateToProps(state) {
    return {
        auth: state.app.auth,
        user: state.app.user
    }
}

//mapStateToProps adds the state to the props of Home
export default connect(mapStateToProps,{signin})(Home);
