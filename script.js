const apiKey="a83d5075988336fb329828058ef9ffe5";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox= document.querySelector(".search input");
const searchBtn= document.querySelector(".search button");
const weatherIcon= document.querySelector(".weatherIcon");

document.addEventListener("DOMContentLoaded", () => {
    searchBtn.addEventListener("click", () => {
        checkWeather(searchBox.value);
    });
});

async function checkWeather(city){
    const response= await fetch(apiUrl + city +`&appid={apiKey}`);
   console.log(response);
        if(response.status==404){
        document.querySelector(".error").style.display="block";
        document.querySelector(".weather").style.display="none";
    }
    else{
        var data= await response.json();

        document.querySelector(".city").innerHTML= data.name;
        document.querySelector(".temp").innerHTML= Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML= data.main.humidity +"%";
        document.querySelector(".wind").innerHTML= data.wind.speed +"km/h";

        if(data.weather[0].main== "Clouds"){
            weatherIcon.src= "icons/cloud.png";
        }
        else if(data.weather[0].main== "Clear"){
            weatherIcon.src= "icons/clear.png";
        }
        else if(data.weather[0].main== "Rain"){
            weatherIcon.src= "icons/rain.png";
        }
        else if(data.weather[0].main== "Drizzle"){
            weatherIcon.src= "icons/drizzle.png";
        }
        else if(data.weather[0].main== "Mist"){
            weatherIcon.src= "icons/mist.png";
        }
        else if(data.weather[0].main== "Snow"){
            weatherIcon.src= "icons/snow.png";
        }
        else if(data.weather[0].main== "Wind"){
            weatherIcon.src= "icons/wind.png";
        }

        document.querySelector(".weather").style.display= "block";
        document.querySelector(".error").style.display="none";
    }
}

