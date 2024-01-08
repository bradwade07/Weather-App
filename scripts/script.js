///////////////////////////////////////////////////////////////////
// Weather App
const apiKey = "50e945400c8db430844c7fc3bc1fcd0c"; // get api key from "https://openweathermap.org/
const searchBtn = document.querySelector("#searchbtn");

class WeatherInfoList{
    constructor( doodleVar,descVar,tempVar, cityVar, countryVar, humidityVar, airpressureVar){
    this.doodleVar = doodleVar;
    this.descVar = descVar;
    this.tempVar = tempVar;
    this.cityVar = cityVar;
    this.countryVar = countryVar;
    this.humidityVar = humidityVar;
    this.airpressureVar = airpressureVar;
    }
    showData() {
        document.querySelector("#weather_main").setAttribute("src","https://openweathermap.org/img/wn/" + this.doodleVar + "@4x.png");
        document.querySelector("#weather_main").setAttribute("alt",this.doodleVar);
        document.querySelector("#weather_description").innerHTML = this.descVar;
        document.querySelector("#weather_temperature").innerHTML = this.tempVar + "°C";
        document.querySelector("#weather_locationname").innerHTML = this.cityVar + ", " + this.countryVar;
        document.querySelector("#weather_humidity h2").innerHTML = this.humidityVar + "%";
        document.querySelector("#weather_airpressure h2").innerHTML = this.airpressureVar + " kPa";
    }
}
function afterEventListener(loc){
    var apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + loc + "&appid=" + apiKey + "&units=metric";
    fetch(apiUrl)
    .then( res => res.json())
    .then( data => updateWeatherInfoList(data));
}

function updateWeatherInfoList(data){
    if((data.cod).toString() === "404"){
        alert("Error 404! City not Found.");
    }
    else if((data.cod).toString() === "200"){
        weatherInfoList = new WeatherInfoList(data.weather[0].icon,data.weather[0].description, (Math.round(data.main.temp)).toString(), data.name, data.sys.country, data.main.humidity.toString(), (data.main.pressure/100).toString());
        weatherInfoList.showData();
    }
}
//main
var weatherInfoList
afterEventListener("burnaby");
weather_searchbtn.addEventListener("click", function(){
    afterEventListener(document.querySelector("#weather_location").value.trim())
});
///////////////////////////////////////////////////////////////////
// Clock App

// function clockEventListener(loc){
//     var apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + loc + "&appid=" + apiKey + "&units=metric";
//     fetch(apiUrl)
//     .then( res => res.json())
//     .then( data => updateWeatherInfoList(data));
// }
// //main
// var infoList
// clockEventListener("burnaby");
// clock_searchbtn.addEventListener("click", function(){
//     clockEventListener(document.querySelector("#weather_location").value.trim())
// });
console.log(date.time())
