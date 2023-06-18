// primary api
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'efd05428c3mshf9243e919f32d29p13c1ffjsn4a1b0155484f',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

// secondary api
const apiKey = "1a075121667f037409d2289b7d17e004";
const main = document.getElementById('main');
const form = document.getElementById('form');
const search = document.getElementById('city');
const url = (city) => `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;


// Icon depicting weather
async function getWeatherByLocation(city) {

    const resp = await fetch(url(city), {
        origin: "cros"
    });
    const respData = await resp.json();
    console.log(resp);
    console.log(respData);
    addWeatherToPage(respData);

}
function addWeatherToPage(data) {
    // const temp = Ktoc(data.main.temp); ${temp}°C

    const weather = document.getElementById('weather')
    // weather.classList.add('weather');
// <small class="sky">${data.weather[0].main}</small>
    weather.innerHTML = `
        <h2 class="toptext"><img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" /><span id='icontemp'> </span>°C</h2>
        
        `;
    //   cleanup 
    main.innerHTML = "";
    main.appendChild(weather);
};

function Ktoc(K){
    return Math.floor(K - 273.15);
}

form.addEventListener('submit',(e) =>{
    e.preventDefault();

    const city = search.value;

    if(city){
        getWeatherByLocation(city)
    }

 });
 submit.addEventListener("click", (e)=>{
    e.preventDefault();
    const city = search.value;

    if(city){
        getWeatherByLocation(city)
    }
})
getWeatherByLocation("Kolkata");




const getWeather = (city) =>{
    cityName.innerText = city
    
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
	.then(response => response.json())
	.then((response) => {
        console.log(response)
        cloud_pct.innerHTML = response.cloud_pct 
        temp.innerHTML =    response.temp
        feels_like.innerHTML = response.feels_like
        humidity.innerHTML = response.humidity
        min_temp.innerHTML = response.min_temp
        max_temp.innerHTML = response.max_temp
        wind_speed.innerHTML = response.wind_speed
        // wind_degrees.innerHTML = response.wind_degrees
        sunrise.innerHTML = response.sunrise
        sunset.innerHTML = response.sunset

        // innertexts
        temp2.innerText =  response.temp
        humidity2.innerText = response.humidity
        wind_speed2.innerText = response.wind_speed
        icontemp.innerText = response.temp
    })
	.catch(err => console.error(err));
}

submit.addEventListener("click", (e)=>{
    e.preventDefault()
    getWeather(city.value)
})

getWeather("Kolkata");


const getotherWeather = (city,i) =>{
 
    
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
	.then(response => response.json())
	.then((response) => {
        console.log(response)
		console.log(city,i)
		document.querySelector('.cloud_pct'+ i).innerText=response.cloud_pct 
        document.querySelector('.temp'+ i).innerText =  response.temp
        document.querySelector('.feels_like'+ i).innerText = response.feels_like
        document.querySelector('.humidity'+ i).innerText = response.humidity
        document.querySelector('.min_temp'+ i).innerText = response.min_temp
        document.querySelector('.max_temp'+ i).innerText = response.max_temp
        document.querySelector('.wind_speed'+ i).innerText = response.wind_speed
        document.querySelector('.wind_degrees'+ i).innerText = response.wind_degrees
        document.querySelector('.sunrise'+ i).innerText = response.sunrise
        document.querySelector('.sunset'+ i).innerText = response.sunset

    })
	.catch(err => console.error(err));
}

const cityNames = ["Delhi", "Bangalore", "Mumbai","Chennai"];
for (let i = 1; i <= 4; i++) {
	getotherWeather(cityNames[i-1],i)
  }