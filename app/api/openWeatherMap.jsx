var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'https://api.openweathermap.org/data/2.5/weather?appid=4d431dc2b27f3a5809dff903f053ffb0&units=imperial';

module.exports = {
    getTemp: function (location) {
        var encodedLocation = encodeURIComponent(location);
        var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

        return axios.get(requestUrl).then(function(res) {
            if (res.data.cod && res.data.message) {
                throw new Error('Unable to fetch weather');
            } else {
                return res.data.main.temp;
            }
        }, function (err) {
            throw new Error(err.response.data.message);
        });
    }
}
