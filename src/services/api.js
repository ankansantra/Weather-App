import axios from 'axios';

const API_KEY = '75409518018edef1d6d9a8c3190b82af';
const API_URL = 'http://api.openweathermap.org/data/2.5/weather';

export const getWeather = async (city, country) => {
    try{
        let response = await axios.get(`${API_URL}?q=${city},${country}&appid=${API_KEY}&units=metric`);
        return response.data;
    } catch (error){
        console.log('Error while calling the api', error.message);
        return error.response;
    }
}