const request = require('request')


const forecast = ({latitude, longitude}, callback) => {

    const url = 'https://api.darksky.net/forecast/199b15d5c453b2d692579e8bd6621aac/' + latitude + ',' + longitude + '?units=si'

    request({url, json: true}, (error, response, body) => {
        if(error) {
            callback('Unable to connect to weather service')
        } else if(response.body.error) {
            callback(response.body.error)
        } else {
            debugger
            const currentlyData = body.currently
            const data = body.daily.data[0].summary + ' It is currently ' + currentlyData.temperature + ' degrees out. There is a ' + 
            currentlyData.precipProbability*100 + '% chances of rain.'

            callback(undefined, data)    
        }
    })
}

module.exports = forecast