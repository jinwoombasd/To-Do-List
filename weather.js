const API_KEY = "4c32e4c9a496838e9a2cefa0bf346d23"

function onGeoOk(position){
    const lat = position.coords.latitude;
    const long = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${API_KEY}&units=metric`;
    fetch(url).then(response => response.json()).then(data => {
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");
        city.innerText = data.name;
        weather.innerText = `${data.weather[0].main} / ${data.main.temp}`+ " C°";
    })
} 

function onGeoEr(){
    alert("Error");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoEr); 
