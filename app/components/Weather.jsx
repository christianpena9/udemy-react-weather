var React = require('react');

/* Custom Components */
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage')

var Weather = React.createClass({
    render: function() {
        return (
            <div>
                <h3>Weather Component</h3>
                <WeatherForm />
                <WeatherMessage />
                
            </div>
        )
    }
});

module.exports = Weather;
