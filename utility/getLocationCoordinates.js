import { getWeather } from "../utility/getWeather";


//Load page with inputted city
async function getCoordinates(city){
    try {
        const geolocation = await fetch(
          `http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=ecc3c7154561f722bbb1675e6523dd23`
        );
        if (geolocation.ok) {
            const coordinate = await geolocation.json();
            const lon = coordinate[0].lon;
            const lat = coordinate[0].lat;

            getWeather(lat, lon)
        }
    }catch (error) {
        console.log(`Error: ${error}`);
    }
}

export {getCoordinates}