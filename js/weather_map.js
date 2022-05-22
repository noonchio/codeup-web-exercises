
mapboxgl.accessToken = WEATHER_MAP;
const map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/mapbox/streets-v11', // style URL
    center: [-97.72347, 30.262032], // starting position [lng, lat]
    zoom: 5 // starting zoom
});



// Sets default marker location
let marker = new mapboxgl.Marker()
    .setDraggable(true)
    .setLngLat([-98.4946, 29.4252])
    .addTo(map);

// Drag marker to get forecast, weather conditions at dropped location
marker.on("dragend", function () {
    weatherMap();

});




function weatherMap () {
    $.get("http://api.openweathermap.org/data/2.5/onecall", {
        APPID: OPEN_WEATHER_APPID,
        lat: marker.getLngLat().lat,
        lon: marker.getLngLat().lng,
        units: "imperial"

    }).done(function (data) {


      const iconElement =  document.querySelector(".weather-icon")
        const tempElement = document.querySelector(".temperature-value p")
        const descElement = document.querySelector(".temperature-description")
        const locationElement = document.querySelector(".location p")
        const notificationElement = document.querySelector(".notification")

        const icon = data.current.weather[0].icon


        console.log(data)



          tempElement.innerHTML = `${data.current.temp}°<span>F<span>`

          descElement.innerHTML = (data.current.weather[0].description)

          // iconElement.innerHTML = `<img src = "http://openweathermap.org/img/w/${icon}.png">`

          locationElement.innerHTML = `Longitude: ${marker.getLngLat().lng} Latitude: ${marker.getLngLat().lat}`












        const months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];

        console.log(data.current)


        $("#current").append('<p>' + data.current.temp + " ℉" + '</p>')
        data.daily.forEach(function (dailyForecast, index) {
            if (index < 5) {
                let humidity = "Humidity: "
                let mini = "Low: "
                let high = "High: "
                let datetime = new Date(dailyForecast.dt * 1000)
                console.log(months[datetime.getMonth()] + " " + datetime.getDate())
                let date1 = months[datetime.getMonth()] + " " + datetime.getDate()
                $("#forecast").append('<h3>' + date1 + '</h3>' + '<p>' + mini + dailyForecast.temp.min + ' ℉' + '</p>' + '<p>' + high + dailyForecast.temp.max + " ℉")

            }
            // console.log('A step further - information for tomorrow: ', data.daily[1]);



        });
    });
}
