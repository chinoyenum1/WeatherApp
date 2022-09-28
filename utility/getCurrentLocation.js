import { getWeather } from "../utility/getWeather";


//Load page with current location
function getCurrentLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    }
}


function showPosition(position) {
    let lat = position.coords.latitude;
    let lon = position.coords.longitude;

    getWeather(lat, lon)
}

export {getCurrentLocation}