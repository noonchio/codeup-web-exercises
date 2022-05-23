
mapboxgl.accessToken = WEATHER_MAP;
const map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/mapbox/streets-v11', // style URL
    center: [-97.72347, 30.262032], // starting position [lng, lat]
    zoom: 5 // starting zoom
});
let marker = new mapboxgl.Marker()
    .setDraggable(true)
    .setLngLat([-98.4946, 29.4252])
    .addTo(map);

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
        const icon1 = data.current.weather[0].icon
        console.log(data)

        tempElement.innerHTML = `${parseInt(data.current.temp)}°<span>F<span>`

        descElement.innerHTML = (data.current.weather[0].description)

        iconElement.innerHTML = `<img src = "http://openweathermap.org/img/wn/${icon1}@4x.png">`

        // 5 DAY FORECAST
        const months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
        console.log(data.current)
        data.daily.forEach(function (dailyForecast, index) {
            if (index < 5) {
                const icon2 = dailyForecast.weather[0].icon
                let mini = "Low: "
                let high = "High: "
                let datetime = new Date(dailyForecast.dt * 1000)
                console.log(months[datetime.getMonth()] + " " + datetime.getDate())
                let date1 = months[datetime.getMonth()] + " " + datetime.getDate()
                // $("#forecast").append('<h3>' + date1 + '</h3>' + '<p>' + mini + dailyForecast.temp.min + ' ℉' + '</p>' + '<p>' + high + dailyForecast.temp.max + " ℉")
                $("#forecast").append('<h5>' + date1 + '</h5>')
                $("#forecast").append('<p>' + high + parseInt(dailyForecast.temp.max) + ' ℉' + '</p>')
                $("#forecast").append('<p>' + mini + parseInt(dailyForecast.temp.min) + ' ℉' + '</p><hr>')
                $("#forecast").append('<div>' +`<img src = "http://openweathermap.org/img/w/${icon2}.png">` + '</div>')
                $("#forecast").append('<p>' +  dailyForecast.weather[0].description + '</p>')
                // console.log(dailyForecast.weather[0].description)
// REVERSE GEOCODE
                reverseGeocode({lng: marker.getLngLat().lng, lat: marker.getLngLat().lat}, WEATHER_MAP).then(function(results) {
                    // logs the address for The Alamo
                    console.log(results);
                    const address = results

                    locationElement.innerHTML = address

// Submit address
                    // // the  geocode method from mapbox-geocoder-utils.js
                    // geocode("Houston", WEATHER_MAP).then(function(result) {
                    //     console.log(result);
                    //     map.setCenter(result);
                    //     map.setZoom(10);
                    // });
                })
            }
            // console.log('A step further - information for tomorrow: ', data.daily[1]);
        });
    });
}
