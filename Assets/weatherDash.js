$(document).ready(function () {

var url = "http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID="
var api ="3c751c9c1e17ba49b5f5e5b15463bf0a"


//By City Name

console.log("api.openweathermap.org/data/2.5/weather?q={city name}&appid=3c751c9c1e17ba49b5f5e5b15463bf0a")

$('#submitButton').on('click', function () {
    var textInput = $("#searchBar").val().toUpperCase();
    console.log(textInput);
    prependSearch();
    });



//Build Search Div Function

function prependSearch() {
    var txt1 = "<p>Text.</p>";        // Create text with HTML
    var txt2 = $("<p></p>").text("Text.");  // Create text with jQuery
    var txt3 = document.createElement("p");
    txt3.innerHTML = "Text.";         // Create text with DOM
    $("searchDiv").prepend(txt1, txt2, txt3);   // Append new elements
  }

//Build Target Div Function


//Add 5 day Function




});