import { render } from 'react-dom';
import React, { Component, PropTypes } from 'react';

import App from '../imports/ui/App.jsx';
import SubmitPage from '../imports/ui/pages/submit.jsx';


//import WelcomeComponent from '../imports/ui/SubmitLayout.jsx';

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

FlowRouter.route('/', {
    action: function(params, queryParams) {
        console.log("Yeah! We are on the post:", params.postId);
        ReactLayout.render(App);
    }
});

FlowRouter.route('/blog/:postId', {
    action: function(params, queryParams) {
        console.log("Yeah! We are on the post:", params.postId);
        ReactLayout.render(SubmitPage);
    }
});