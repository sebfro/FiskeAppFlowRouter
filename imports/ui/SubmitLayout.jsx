import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';

/*class WelcomeComponent extends Component {
    render() {
        <div>
            <h1>Hello</h1>
            <p>Det fungerer!!!</p>
        </div>
    }
}*/

WelcomeComponent = React.createClass({
    render() {
        return (
            <div>
                <h1>Dette fungerer, på et eller annet viss</h1>
                <p>På høy tid</p>
            </div>
        )
    }
});

export default createContainer(() => {}, WelcomeComponent);