
var React = require('react');

var WeatherMessage = ({temp, location}) => { // new way for destructuring
    //var {temp, location} = props; // another way for destructuring
    return (
        <h3 className="text-center">It's {temp} in {location}.</h3>
    );
};

module.exports = WeatherMessage;
