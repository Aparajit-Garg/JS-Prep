let searchUrl = 'https://api.openweathermap.org/data/2.5/weather?units=metric'

let searchBtn = document.getElementById('searchBtn')
let enteredCity = document.getElementById('city')
// center image for weather
let weather = document.getElementById('weather')
// temperature and city
let temperature = document.getElementById('temperature').children[0]
let country = document.getElementById('temperature').children[1]

let humidity = document.getElementById('detail1').children[1].children[0]
let wind = document.getElementById('detail2').children[1].children[0]

let loader = document.getElementById('loader')
let errorElemet = document.getElementById('error')
let flag = false


const fetchWeather = async () => {
    loader.style.display = 'block'
    const location = enteredCity.value

    if (location === '') {
        error.innerHTML = 'Please enter a city name'
        loader.style.display = 'none'
        error.style.width = 'fit-content'
        error.style.display = 'block'
        return
    }

    try {
        const response = await fetch(`${searchUrl}&q=${location}&appid=4de6aaf37956353a237d8cdff6a5f5fe`)
        const data = await response.json()

        loader.style.display = 'none'

        if (data.cod === '404') {
            error.style.display = 'block'
            error.innerHTML = 'Please enter a valid city/country name'
            error.style.width = 'fit-content'
            return
        }

        switch (data.weather.main) {
            case 'Clouds':
                weather.children[0].src = './images/clouds.png'
                break
            case 'Mist':
                weather.children[0].src = './images/mist.png'
                break
            case 'Rain':
                weather.children[0].src = './images/rain.png'
                break
            case 'Clear':
                weather.children[0].src = './images/clear.png'
                break
            case 'Snow':
                weather.children[0].src = './images/snow.png'
                break
            case 'Drizzle':
                weather.children[0].src = './images/drizzle.png'
                break
            default:
                weather.children[0].src = './images/clear.png'
                break

        }
        flag = true
        
        country.innerHTML = data.name
        temperature.innerHTML = data.main.temp + '&deg;c'
        humidity.innerHTML = data.main.humidity + '%'
        wind.innerHTML = data.wind.speed + ' km/h'

    } catch(error) {
        error.style.display = 'block'
        error.innerHTML = error.message
        flag = true
        loader.style.display = 'none'
    }
}

searchBtn.addEventListener('click', fetchWeather)