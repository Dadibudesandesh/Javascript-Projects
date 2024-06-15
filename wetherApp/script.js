const api = "https://api.openweathermap.org/data/2.5/weather?";
const apiKey = "&appid=63356fc167c787066e70fdd95f24121d&units=metric";
let input = document.querySelector(".search input");
let button = document.querySelector(".search button");
let temp = document.querySelector(".temp");
let city = document.querySelector(".city");
let humidity = document.querySelector(".humidity");
let wind = document.querySelector(".wind");
let card=document.querySelector(".card");

async function checkWhether(cityName) {
    const response = await fetch(api + "q=" + cityName + apiKey);  // split the link 
    var data = await response.json();
    // console.log(cityName.value);   // for debuging
    // console.log(data);
    card.style.backgrountImage=URL('img/cloudy.png');
    temp.innerHTML = Math.round(data.main.temp) + "°C";
    city.innerHTML = data.name;
    humidity.innerHTML = data.main.humidity + "%";
    wind.innerHTML = data.wind.speed + "km/h";
    input.value="";


}
button.addEventListener("click", () => {
    checkWhether(input.value);
});

