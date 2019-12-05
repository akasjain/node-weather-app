const request = require('request')

const geocode = (city, callback) => {
    const mapBoxUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + global.encodeURIComponent(city) + '.json?access_token=pk.eyJ1IjoiamFpbmFrYXNoMjIyMSIsImEiOiJjazNueHN1ZjkxMThrM2NuNDd5cXR1ZHVvIn0.v3RTuZBpwjMr5OvIsZWtMA&limit=1'
    request({url: mapBoxUrl, json: true}, (error, response, body) => {
        if(error) {
            callback('Unable to connect to location service')
        } else if(response.body.features.length == 0) {
            callback('No result found. Try a different term')
        } else {
            const coordinates = body.features[0].center
            callback(undefined, {
                latitude: coordinates[1],
                longitude: coordinates[0],
                location: body.features[0].place_name
            })
        }
    })
}

module.exports = geocode
