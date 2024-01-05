const apiKey = ""; // get api key from "https://openweathermap.org/
const searchBtn = document.querySelector("#searchbtn");

class InfoList{
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
        document.querySelector("#main").setAttribute("src","https://openweathermap.org/img/wn/" + this.doodleVar + "@4x.png");
        document.querySelector("#main").setAttribute("alt",this.doodleVar);
        document.querySelector("#description").innerHTML = this.descVar;
        document.querySelector("#temperature").innerHTML = this.tempVar;
        document.querySelector("#locationname").innerHTML = this.cityVar + ", " + this.countryVar;
        document.querySelector("#humidity h2").innerHTML = this.humidityVar + "%";
        document.querySelector("#airpressure h2").innerHTML = this.airpressureVar + " kPa";
    }
}
function afterEventListener(loc){
    var apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + loc + "&appid=" + apiKey + "&units=metric";
    fetch(apiUrl)
    .then( res => res.json())
    .then( data => updateInfoList(data));
}

function updateInfoList(data){
    infoList = new InfoList(data.weather[0].icon,data.weather[0].description, (Math.round(data.main.temp)).toString(), data.name, data.sys.country, data.main.humidity.toString(), (data.main.pressure/100).toString());
    infoList.showData();
}
//main
var infoList
afterEventListener("burnaby");
searchBtn.addEventListener("click", function(){
    afterEventListener(document.querySelector("#location").value.trim())
});
