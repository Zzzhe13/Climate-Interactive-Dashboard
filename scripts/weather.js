let weather = {
    apiKey: "48d0e28bbc8deaa15ab64b5a48340270",
    fetchGeo: function (city) {
        fetch(
          "http://api.openweathermap.org/geo/1.0/direct?q=" +
          city +
          "&limit={limit}&appid=" + 
          this.apiKey
        )
          .then((response) => {
            if (!response.ok) {
              alert("No Geo found.");
              throw new Error("No Geo found.");
            }
            return response.json();
          })
          .then((data) => this.displayWeather(data));
      },
    fetchWeather: function (city) {
      fetch(
        "https://api.openweathermap.org/data/2.5/weather?q=" +
          city +
          "&units=metric&appid=" +
          this.apiKey
      )
        .then((response) => {
          if (!response.ok) {
            alert("No weather found.");
            throw new Error("No weather found.");
          }
          return response.json();
        })
        .then((data) => this.displayWeather(data));
    },
    displayWeather: function (data) {
      const { name } = data;
      const { icon, description } = data.weather[0];
      const { temp, humidity } = data.main;
      const { speed } = data.wind;
      const { visibility } = data;
      document.querySelector(".city").innerText = "Weather in " + name;
      document.querySelector(".icon").src =
        "https://openweathermap.org/img/wn/" + icon + ".png";
        console.log(document.querySelector(".icon").src)
      document.querySelector(".description").innerText = description;
      document.querySelector(".temp").innerText = temp + "°C";
      document.querySelector(".visibility").innerText =
        "能见度 : " + visibility + " 米";
      document.querySelector(".humidity").innerText =
        "湿度 : " + humidity + "%";
      document.querySelector(".wind").innerText =
        "风速 : " + speed + " km/h";
      document.querySelector(".weather").classList.remove("loading");
      document.body.style.backgroundImage =
        "url('https://source.unsplash.com/2000x900/?" + name + "')";
        console.log(data)
    },
    search: function () {
      this.fetchWeather(document.querySelector(".search-bar").value);
    },
  };
  
  document.querySelector(".search button").addEventListener("click", function () {
    weather.search();
  });
  
  document
    .querySelector(".search-bar")
    .addEventListener("keyup", function (event) {
      if (event.key == "Enter") {
        weather.search();
      }
    });
  
  weather.fetchWeather("qingdao");