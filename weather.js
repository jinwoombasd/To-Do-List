function onGeoOk(position){
    const lat = position.coords.latitude;
    const long = position.coords.longitude;
    console.log("You live in", lat, long);
}

function onGeoEr(){
    alert("Error");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoEr); 
