$(document).ready(function () {


//By City Name
console.log("api.openweathermap.org/data/2.5/weather?q={city name}&appid=3c751c9c1e17ba49b5f5e5b15463bf0a")


//VARIABLES
var urlBase ="http://api.openweathermap.org/data/2.5/weather?q="
var api ="&appid=3c751c9c1e17ba49b5f5e5b15463bf0a&units=metric"




//SUBMIT BUTTON 

$('#submitButton').on('click', function () {
    showWeather();
    searchHistory();
    showForecast();
});


//SHOW WEATHER

function showWeather() {
    var textInput = $("#searchBar").val().toUpperCase();
    $.ajax({
        type: "POST",
        url: urlBase + textInput + api,
        dataType: "json",
        success: function (result, status, xhr) {
            var table = $("<table><tr><th>" + result["name"] + "</th></tr>");

            table.append("<tr><td>Current Temperature:</td><td>" + result["main"]["temp"] + "°C</td></tr>");
            table.append("<tr><td>Humidity:</td><td>" + result["main"]["humidity"] + "</td></tr>");
            table.append("<tr><td>Wind Speed:</td><td>" + result["wind"]["speed"] + "</td></tr>");
            table.append("<tr><td>UV Index:</td><td>" + result["wind"]["speed"] + "</td></tr>");

            $("#resultDiv").html(table);
        },
        error: function (xhr, status, error) {
            alert("Result: " + status + " " + error + " " + xhr.status + " " + xhr.statusText)
        }
    });

}


//ADD TO SEARCH HISTORY

function searchHistory() {
    var textInput = $("#searchBar").val().toUpperCase();
    var par = $("<p></p>").text(textInput); 
    console.log(textInput);
    $("#searchDiv").append(par);
    return;
}




//5 DAY FORECAST

function showForecast() {
    var textInput = $("#searchBar").val().toUpperCase();
    var par = $("<p></p>").text(textInput); 
    console.log(textInput);
    $("#forecastDiv").append(par);
    return;
}


});
