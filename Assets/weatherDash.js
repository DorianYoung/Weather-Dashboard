// SUBMIT BUTTON 

$('#submitButton').on('click', function () {
    showCurrentWeather();
    searchHistory();
    showForecast();
});


// SHOW CURRENT WEATHER FUNCTION

function showCurrentWeather() {
    var textInput = $("#searchBar").val().toUpperCase();
    $.ajax({
        type: "POST",
        url: "https://api.openweathermap.org/data/2.5/weather?q=" + textInput + "&appid=3c751c9c1e17ba49b5f5e5b15463bf0a&units=imperial",
        dataType: "json",
        success: function (result, status, xhr) {
            
            var currentWeatherTable = $("<table><tr><th><h2>" + result["name"] + "</h2></th></tr>");
            currentWeatherTable.append("<tr><td>Current Temperature:</td><td>" + result["main"]["temp"] + "°F</td></tr>");
            currentWeatherTable.append("<tr><td>Humidity:</td><td>" + result["main"]["humidity"] + "%</td></tr>");
            currentWeatherTable.append("<tr><td>Wind Speed:</td><td>" + result["wind"]["speed"] + "mph</td></tr>");
            currentWeatherTable.append("<tr><td>UV Index:</td><td>" + result["wind"]["speed"] + "</td></tr>");
            $("#resultDiv").html(currentWeatherTable);
        },
        error: function (xhr, status, error) {
            alert("Sorry, youve entered an invalid city!")
        }
    });

}


// ADD TO SEARCH HISTORY FUNCTION

function searchHistory() {
    var textInput = $("#searchBar").val().toUpperCase();
    var par = $("<p></p>").text(textInput); //This is the line to make search history a clickable link
    console.log(textInput);
    $("#searchDiv").append(par);
    return;
}


// 5 DAY (days 1-5) FORECAST FUNCTION

function showForecast() {
    var textInput = $("#searchBar").val().toUpperCase();
    $.ajax({
        type: "POST",
        url: "https://api.openweathermap.org/data/2.5/forecast?q=" + textInput + "&appid=3c751c9c1e17ba49b5f5e5b15463bf0a&units=imperial",
        dataType: "json",
        success: function (result, status, xhr) {

            //DAY 1
            var forecastTable = $("<table><tr><th>" + result["list"][0]["dt_txt"] +"</th></tr>");
            forecastTable.append("<tr><td> " + "<img id='icon' src='http://openweathermap.org/img/w/" + result["list"][0]["weather"][0]["icon"] + ".png' alt='weather icon'></img></td></tr>");
            forecastTable.append("<tr><td>Temp: " + result["list"][0]["main"]["temp"] + "°F</td></tr>");
            forecastTable.append("<tr><td>Humidity: " + result["list"][0]["main"]["humidity"] + "%</td></tr>");
            $("#day1").html(forecastTable);

            //DAY 2
            var forecastTable = $("<table><tr><th>" + result["list"][8]["dt_txt"] +"</th></tr>");
            forecastTable.append("<tr><td> " + "<img id='icon' src='http://openweathermap.org/img/w/" + result["list"][8]["weather"][0]["icon"] + ".png' alt='weather icon'></img></td></tr>");
            forecastTable.append("<tr><td>Temp: " + result["list"][8]["main"]["temp"] + "°F</td></tr>");
            forecastTable.append("<tr><td>Humidity: " + result["list"][8]["main"]["humidity"] + "%</td></tr>");
            $("#day2").html(forecastTable);

            //DAY 3
            var forecastTable = $("<table><tr><th>" + result["list"][16]["dt_txt"] +"</th></tr>");
            forecastTable.append("<tr><td> " + "<img id='icon' src='http://openweathermap.org/img/w/" + result["list"][16]["weather"][0]["icon"] + ".png' alt='weather icon'></img></td></tr>");
            forecastTable.append("<tr><td>Temp: " + result["list"][16]["main"]["temp"] + "°F</td></tr>");
            forecastTable.append("<tr><td>Humidity: " + result["list"][16]["main"]["humidity"] + "%</td></tr>");
            $("#day3").html(forecastTable);

            //DAY 4
            var forecastTable = $("<table><tr><th>" + result["list"][24]["dt_txt"] +"</th></tr>");
            forecastTable.append("<tr><td> " + "<img id='icon' src='http://openweathermap.org/img/w/" + result["list"][24]["weather"][0]["icon"] + ".png' alt='weather icon'></img></td></tr>");
            forecastTable.append("<tr><td>Temp: " + result["list"][24]["main"]["temp"] + "°F</td></tr>");
            forecastTable.append("<tr><td>Humidity: " + result["list"][24]["main"]["humidity"] + "%</td></tr>");
            $("#day4").html(forecastTable);

            //DAY 5
            var forecastTable = $("<table><tr><th>" + result["list"][32]["dt_txt"] +"</th></tr>");
            forecastTable.append("<tr><td> " + "<img id='icon' src='http://openweathermap.org/img/w/" + result["list"][32]["weather"][0]["icon"] + ".png' alt='weather icon'></img></td></tr>");
            forecastTable.append("<tr><td>Temp: " + result["list"][32]["main"]["°F"] + "°F</td></tr>");
            forecastTable.append("<tr><td>Humidity: " + result["list"][32]["main"]["humidity"] + "%</td></tr>");
            $("#day5").html(forecastTable);

        },
        error: function (xhr, status, error) {
            alert("Please enter a valid city name")
        }
    });

}