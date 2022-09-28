import "./index.html";
import './style.css';
import { getCoordinates } from "../utility/getLocationCoordinates";
import { getWeather } from "../utility/getWeather";
import { getCurrentLocation } from "../utility/getCurrentLocation";

const form = document.querySelector('form');
const newCity = document.querySelector(`input[type='search']`);


form.addEventListener('submit', (e) => {
    e.preventDefault()
    getCoordinates(newCity.value)
    form.reset()
})

getCurrentLocation()
