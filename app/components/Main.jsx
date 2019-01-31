var React = require('react');

/* Custom Components */
var Nav = require('Nav');

var Main = (props) => {
    return (
        <div>
            <Nav />
            <h2>Main Component</h2>
            {props.children}
        </div>
    );
};

module.exports = Main;
