let weather = {
    apiKey: "97450dad334571b26a98d9a66c84565a",
    fetchZip: function (zip) {
        fetch("https://api.openweathermap.org/data/2.5/weather?zip=" + 
        zip + 
        "&units=imperial&appid=" +
        this.apiKey)
         .then((response) => response.json())
         .then((data) => this.displayWther(data));
    },
    displayWther: function (data) {
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp, humidity } = data.main;
        const { temp_max, temp_min } = data.main;
        const { speed } = data.wind;
        let date = new Date();
        console.log(name, icon, description, temp, humidity, temp_max, temp_min, speed, date);
        document.querySelector(".location").innerHTML = name;
        document.querySelector(".icon").src = "http://openweathermap.org/img/wn/" + icon +"@2x.png";
        document.querySelector(".conditions").innerHTML = description;
        document.querySelector(".temp").innerHTML = temp + "°F";
        document.querySelector(".humidity").innerHTML = "Humidity: " + humidity + "%";
        document.querySelector(".hi-temp").innerHTML = "High: " + temp_max + "°F";
        document.querySelector(".low-temp").innerHTML = "Low: " + temp_min + "°F";
        document.querySelector(".wind").innerHTML = "Wind Speed: " + speed + " MPH";
        document.querySelector(".time").innerHTML = date.toDateString();
        document.querySelector(".forecast").classList.remove("dummytext");
    },
    search: function() {
        this.fetchZip(document.querySelector(".searchbar").value);
    }
};
document.querySelector(".search button").addEventListener("click", function() {
    weather.search();
});
document.querySelector(".searchbar").addEventListener("keyup", function(event) {
    if (event.key == "Enter") {
        weather.search();
    }
})