
var React = require('react');

var WeatherMessage = React.createClass({
    render: function() {
        // destructuring
        var {temp, location} = this.props;

        return (
            <p>It's {temp} in {location}.</p>
        );
    }
});

module.exports = WeatherMessage;
