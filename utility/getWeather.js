const cityName = document.querySelector('.city');
const countryName = document.querySelector('.country');
const weatherName = document.querySelector('.weather-name');
const tempValue = document.querySelector('.temp-value');
const tempHigh = document.querySelector('.high');
const tempLow = document.querySelector('.low');
const tempFeel = document.querySelector('.feel');
const image = document.querySelector('img');
const tempUnit = document.querySelector('.temp-unit');
const sunrise = document.querySelector('.sunrise h5');
const sunset = document.querySelector('.sunset h5');
const windSpeed = document.querySelector('.wind-speed h5');
const pressure = document.querySelector('.pressure h5');
const humidity = document.querySelector('.humidity h5');
const visibility = document.querySelector('.visibility h5');
const today = document.querySelector('.date');

import getKey from '../utility/key'


async function getWeather(lat, lon, units = 'metric') {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${getKey().openWeatherKey}&units=${units}`
      );

      if (response.ok) {
        const data = await response.json();
        console.log(data);
        let date = new Date(data.dt * 1000)
        let sunriseDate = new Date(data.sys.sunrise * 1000)
        let sunsetDate = new Date(data.sys.sunset * 1000)    
        

        cityName.textContent = data.name
        countryName.textContent = data.sys.country
        tempValue.textContent = `${Math.floor(data.main.temp)}`
        tempHigh.textContent = `${Math.floor(data.main.temp_max)}`
        tempLow.textContent = `${Math.floor(data.main.temp_min)}`
        tempFeel.textContent = `${Math.floor(data.main.feels_like)}`
        weatherName.textContent = data.weather[0].description
        image.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
        sunrise.textContent = `${sunriseDate.getHours()}:${sunriseDate.getMinutes()} AM`
        sunset.textContent = `${sunsetDate.getHours()}:${sunsetDate.getMinutes()} PM`
        windSpeed.textContent = `${data.wind.speed} km/h`
        pressure.textContent = `${data.main.pressure} Pa`
        humidity.textContent = `${data.main.humidity} %`
        visibility.textContent = `${data.visibility/1000} km`
        today.textContent = `${date.toDateString()} `

      }
    }catch (error) {
        console.log(`Error: ${error}`);
    }
}

export {getWeather}