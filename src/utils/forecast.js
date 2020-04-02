const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/3d5ce363678742464e742d6c54f05bff/' + latitude + ',' + longitude

    request ({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather services.', undefined)
        } else if (body.error) {
            callback('Unable to find location. Try another search.', undefined)
        } else {
            callback(undefined, body.daily.data[0].summary + ' It is currently ' + body.currently.temperature + ' degrees outside. There is a ' + body.currently.precipProbability + '% chance of rain.')
        }
    })
} 

module.exports = forecast