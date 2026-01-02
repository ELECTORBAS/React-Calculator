let searchbtn = document.getElementById("searchbtn");
let input = document.getElementById("city-input");

const apiKey = "3268a127bb875ab6a980f0931f34f26e";
let apiURl = `https://api.openweathermap.org/data/2.5/weather?q=`;

async function getData() {
    let response = await fetch(apiURl + `${input.value}&appid=${apiKey}`);
    let data = await response.json();

    let city = document.getElementById("city");
    let temp = document.getElementById("temp");
    let weather = document.getElementById("weather");
    let humid = document.getElementById("humid");
    let windSpeed = document.getElementById("windSpeed");

    temp.textContent = Math.round(data.main.temp) + 'F';
    weather.textContent = data.weather[0].main;
    city.textContent = data.name;
    humid.textContent = 'Humidty: ' + data.main.humidity + '%';
    windSpeed.textContent = 'Windspeed: ' + data.wind.speed + 'mph';
    console.log(data);
}
searchbtn.addEventListener("click", ()=>{
    getData();
})
