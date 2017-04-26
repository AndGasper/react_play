import React from 'react';
import { connect } from 'react-redux';
import Greeting from './greeting';
import './home.css';

import {signin} from '../actions/index';


const Home = (props) => {
    console.log('Auth:', props.auth);
    const {auth, user} = props;
    const displayGreeting = () => {
        if (auth) {return <Greeting color={user.fav_color} name={user.name} />;}
        return <h2>Please click button to sign in</h2>;
        };

    return (
    <div className="home button">
        <button onClick={() => {props.signin(!auth)}}>
            {auth ? 'Sign Out' : 'Sign In'}
        </button>
        {displayGreeting()}
    </div>
    );
};

//does not have to be called mapStateToProps to work
function mapStateToProps(state) {
    return {
        auth: state.app.auth,
        user: state.app.user
    }
}

//mapStateToProps adds the state to the props of Home
export default connect(mapStateToProps,{signin})(Home);
