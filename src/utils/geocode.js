const request = require('request')

const geocode = (address, callback) => {
    const url =
      "https://api.mapbox.com/geocoding/v5/mapbox.places/" + address +".json?access_token=pk.eyJ1Ijoib2puMjAxNCIsImEiOiJja2FtbnN6OHkxN2g4MnpsYjdhbTh0MmxtIn0.LaLgyPki__SBnyvXcOyHWg&limit=1";
    request({url:url, json:true}, (error,response) =>{
        if(error) {
            return callback('Unable to connect service', undefined)
        } else if(response.body.features.length === 0) {
            return callback('Unable to find location, Try another search', undefined)
        } else {
            return callback(undefined, {
              latitude: response.body.features[0].center[1],
              longitude: response.body.features[0].center[0],
              location: response.body.features[0].place_name,
            });
        }
    })
}

module.exports = geocode