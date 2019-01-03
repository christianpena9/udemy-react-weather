var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory, browserHistory} = require('react-router');

/* Custom Components */
var Main = require('Main');
var Weather = require('Weather');
var About = require('About');

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={Main}>
            <Route path="about" component={About} />
            <IndexRoute component={Weather} />
        </Route>
    </Router>,
    document.getElementById('app')
);
