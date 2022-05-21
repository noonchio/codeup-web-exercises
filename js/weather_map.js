
$.get("http://api.openweathermap.org/data/2.5/onecall", {

    APPID: OPEN_WEATHER_APPID,
    lat:    29.423017,
    lon:   -98.48527,
    units: "imperial"
}).done(function(data) {
    console.log('The entire response:', data.lat);
    console.log('Diving in - here is current information: ', data.current);

    const months = ["JAN", "FEB", "MAR","APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
    console.log(data.current)
    console.log(data.current.temp)
    $("#current").append('<p>' +  data.current.temp + " ℉" + '</p>')
    data.daily.forEach(function (dailyForecast, index){
        if (index < 5) {
            let humidity = "Humidity: "
            let mini = "Low: "
            let high = "High: "
            let datetime = new Date(dailyForecast.dt * 1000)
            console.log(months[datetime.getMonth()]+ " "+ datetime.getDate())
         let date1 = months[datetime.getMonth()]+ " "+ datetime.getDate()
            $("#forecast").append('<h3>'+ date1 + '</h3>' + '<p>'+ mini + dailyForecast.temp.min + ' ℉'+ '</p>' + '<p>'+ high +dailyForecast.temp.max + " ℉"+ '</p>' + '<p>'+ humidity + dailyForecast.humidity + '</p>')

            console.log(dailyForecast)
        }
        // console.log('A step further - information for tomorrow: ', data.daily[1]);
    });
    });

// Using HTML, CSS, jQuery, AJAX, and the OpenWeatherMap API, start by showing the current conditions for city you live in on your page.

mapboxgl.accessToken = WEATHER_MAP;
const map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/mapbox/streets-v11', // style URL
    center: [-97.72347, 30.262032], // starting position [lng, lat]
    zoom: 5 // starting zoom
});


const marker = new mapboxgl.Marker({
    color: "#FFFFFF",
    draggable: true
}).setLngLat([-97.72347, 30.262032])
    .addTo(map);

// console.log(marker)
// function  onDragEnd() {
//     const lngLat = marker.getLngLat()
//
//     console.log(`Longitude: ${lngLat.lng}, Latitude: ${lngLat.lat}`)
// }
//
// marker.on('dragend', onDragEnd)
//
const lngLat = marker.getLngLat()

let yaxis = lngLat.lat
let xaxis = lngLat.lng

console.log(lngLat.lat)

// lat:    29.423017,
//     lon:   -98.48527,


