const apiKey = "d6fc6ddf5802f567ca1a5597edaba503"


function onGeoSuccess(position){
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    const weatherUrl = `//api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${apiKey}&units=metric`
    const pollutionUrl = `//api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lng}&appid=${apiKey}`
    fetch(weatherUrl).then(reponse => reponse.json()).then(data => {
        const weather = document.querySelector(".weather__weather");
        const city = document.querySelector(".weather__tem");
        city.innerText = data.name;
        weather.innerText = `${data.weather[0].description} / ${data.main.temp}'C`;
    });
    fetch(pollutionUrl).then(reponse => reponse.json()).then(data => {
        const ph2 = document.querySelector(".air__ph2");
        const ph5 = document.querySelector(".air__ph5");
        const level = document.querySelector(".air__level");
        const ph2Text = data.list[0].components.pm2_5.toFixed(1);
        const ph10Text = data.list[0].components.pm10.toFixed(1);
        const airPollution = data.list[0].main.aqi;
        let airPollutionVar = ""

        if(airPollution === 1){
            airPollutionVar = "😁"
        }
        else if(airPollution === 2){
            airPollutionVar = "😄"
        }
        else if(airPollution === 3){
            airPollutionVar = "😊"
        }
        else if(airPollution === 4){
            airPollutionVar = "🤨"
        }
        else if(airPollution === 5){
            airPollutionVar = "😒"
        }

        function showTextF(argument){
            argument.preventDefault();
            ph2.classList.toggle("covered");
            ph5.classList.toggle("covered");
            ph2.classList.toggle("show");
            ph5.classList.toggle("show");

                }        

        ph2.innerText = `PH 2.5: ${ph2Text} `;
        ph5.innerText = `PH 10: ${ph10Text}`;
        level.innerText = `${airPollutionVar}`;
        level.onclick = showTextF;
    });
}
function onGeoError(){
    const ph5 = document.querySelector("#air__pollution span:nth-child(2)");
    ph5.innerText = ""
}

navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);

