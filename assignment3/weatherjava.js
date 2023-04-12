const timeE1 = document.getElementById('time');
const dateE1 = document.getElementById('date');
const currentWeatherItemsE1 = document.getElementById('current-weather-item');
const timezone = document.getElementById('time-zone');
const countryE1 = document.getElementById('country');
const weatherForecastE1 = document.getElementById('weather-forecast');
const currentTempE1 = document.getElementById('current-temp');
const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const API_KEY = '0671d690089efb135fa60c8d6f0c4bf1';

setInterval(() => {
    const time = new Date();
    const month = time.getMonth();
    const date = time.getDate();
    const day = time.getDay();
    const hour = time.getHours();
    const hoursIn12HrFormate = hour >= 13 ? hour % 12 : hour
    const minutes = time.getMinutes();
    const ampm = hour >= 12 ? 'PM' : 'AM'

    timeE1, innerHTML = hoursIn12HrFormate + ':' + minutes + '' + '<span id="am-pm">${ampm}</span>'
    dateE1, innerHTML = days[day] + ',' + date + '' + months[month]

}
    , 1000);

getWeatherData

function getWeatherData() {
    navigator.geolocation.getCurrentPosition((success) => {
        console.log(success);
        let { latitude, longtitude } = success.coords;
        fetch('https://api.openweathermap.org/data/3.0/onecall?lat=${latitude}&lon=${longtitude}&exclude=hourly,minutely&units=metric&appid=${API_key}').then(res => res.json()).then(data => {
            console.log(data)
            showWeatherData(data);
        })

    })
}

