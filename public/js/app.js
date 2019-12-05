console.log('Something from JS file')
const address = document.querySelector('#location')
const forecast = document.querySelector('#forecast')
address.value = ''
forecast.value = ''

const weatherData = (location) => {
    address.textContent = 'Loading...'
    forecast.textContent = ''


    fetch('/weather?address=' + location).then((response) => {
        response.json().then((data) => {
            if(data.error) {
                address.textContent = data.error
            } else {
                address.textContent = data.location
                forecast.textContent = data.forecast
            }
        })
    })
}

const weatherForm = document.querySelector('form')
const searchVal = document.querySelector('input')

weatherForm.addEventListener('submit', (event) => {
    event.preventDefault()
    weatherData(searchVal.value)
})