const request = require('request')

const forecast = (latitude,longitude, callback) => {
    const url = "http://api.weatherstack.com/current?access_key=5707228e1dc4f8b3b0f727fe39d4a036&query="+ latitude + "," + longitude +"&units=f"

    request({url:url, json:true}, (error, response) => {
        if (error) {
          return callback("Unable to connect service", undefined);
        } else if (response.body.error) {
          return callback(
            "Unable to find weather data on the location, Try another search",
            undefined
          );
        } else {
          return callback(undefined, {
            temperature: response.body.current.temperature
          });
        }
    })
}

module.exports = forecast;