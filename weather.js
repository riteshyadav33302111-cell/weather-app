async function getWeather() {

    let city = document.getElementById("city").value;

    let apiKey = "b637856492e44a5289e110454261203";

    let url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=yes`;

    let response = await fetch(url);

    let data = await response.json();

    document.getElementById("weathers").innerHTML =
        `Current Temperature : ${data.current.temp_c} °C <br>
         Current Weather: ${data.current.condition.text}`;
}