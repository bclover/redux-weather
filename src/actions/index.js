import axios from 'axios';

const API_KEY = 'c7d8653c13f19abb586398021fe13cb3';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;
const COUNTRY = 'us';

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},${COUNTRY}`;
  const request = axios.get(url);
 
  return {
    type: FETCH_WEATHER,
    payload: request
  };
}
