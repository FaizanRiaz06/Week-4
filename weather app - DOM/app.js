document.getElementById('search-btn').addEventListener('click', function() {
    const city = document.getElementById('city-input').value;
    if (city) {
        getWeatherData(city);
    } else {
        alert("Please enter a city name");
    }
});

function getWeatherData(city) {
    const apiKey = '67ea8dfc34668be6debd288d788223f1';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

    fetch(url)
        .then(response => response.json())
        .then(data => displayWeatherData(data))
        .catch(error => {
            console.error('Error fetching the weather data:', error);
            alert("City not found");
        });
}


function displayWeatherData(data) {
    
        const cityName = data.name;
        const temperature = data.main.temp;
        const weatherDescription = data.weather[0].description;

        console.log(cityName)

        document.getElementById('city-name').innerText = cityName;
        document.getElementById('temperature').innerText = `Temperature: ${temperature}°C`;
        document.getElementById('weather-description').innerText = `Weather: ${weatherDescription}`;
   
}

