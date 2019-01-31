
var React = require('react');

var WeatherMessage = ({temp, location}) => { // new way for destructuring
    //var {temp, location} = props; // another way for destructuring
    return (
        <p>It's {temp} in {location}.</p>
    );
};

module.exports = WeatherMessage;
