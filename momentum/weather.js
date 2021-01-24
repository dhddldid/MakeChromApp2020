const weather = document.querySelector(".js-weather");
const API_KEY = "8c77a4820bd6ef03e524b201b382876a";
const COORDS = 'coords';

function getWeather(lat, lon) {
    // then 함수 호출
    fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    ).then(function (response) {
        return response.json();
    }).then(function(json){ //then 위함수 끝날때 까지 기다림
        const temperature = json.main.temp;
        const place = json.name;
        weather.innerText = `${temperature} @ ${place}`;
    })
}

function saveCoords(coordsObj) {
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function handleGeoSuccess(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = {
        latitude,
        longitude
    };
    saveCoords(coordsObj);
    getWeather(latitude, longitude);
}

function handleGeoError() {
    console.log("Cant access geo location");
}

function askForCorrds() {
    navigator
        .geolocation
        .getCurrentPosition(handleGeoSuccess, handleGeoError);
}

function loadCoords() {
    const loadedCoords = localStorage.getItem(COORDS);
    if (loadedCoords === null) {
        askForCorrds();
    } else {
        const parseCooreds = JSON.parse(loadedCoords);
        getWeather(parseCooreds.latitude, parseCooreds.longitude);
    }
}

function init() {
    loadCoords();
}

init();