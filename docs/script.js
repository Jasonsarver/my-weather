let weather = {
    apiKey : "9634c5b906faca8d4618b5a7d1178e59",
    fetchWeather : function(city){
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q="
            + city
            + "&units=imperial&appid="
            + this.apiKey
        )
        .then((response)=>response.json())
        .then((data)=>this.displayWeather(data));
    },
    displayWeather: function(data){
        const { name } = data;
        const { icon,description } = data.weather[0];
        const { temp, humidity } = data.main
        const { speed } = data.wind;
        console.log (name,icon,description,temp,humidity,speed)
        document.querySelector(".city").innerText = name;
        document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon + "@2x.png";
        document.querySelector(".description").innerText = description;
        document.querySelector(".temp").innerText = temp + "° F";
        document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";
        document.querySelector(".wind").innerText = "Wind Speed: " + speed + " km/h";
    },
    search: function(){
        this.fetchWeather(document.querySelector(".search-bar").value);
    },
};
document.querySelector(".search button")
.addEventListener("click", function(){
weather.search();
});