var currentWeather = prompt("Enter Weather");
document.write(
  "<body style= 'height:69vh; background-color:#323140;' oerflow:hidden;>" +
    "</body>"
);
if (currentWeather == "sunny") {
  document.write(
    "<div class='card' style='width: 18rem; height:18rem; margin:auto; margin-top:14%; box-shadow: rgba(0, 0, 0, 0.65) 0px 5px 15px; '>" +
      "<img src='assets/sunny.png' class='card-img-top' alt='...>" +
      " <div class='card-body'>" +
      "<p class='card-text'>" +
      "<h1 style='margin:auto; font-size:2rem;'>" +
      " SUNNY" +
      "</h1>" +
      "</p>" +
      "</div>" +
      " </div>"
  );
} else if (currentWeather == "cold") {
  document.write(
    "<div class='card' style='width: 18rem; height:18rem; margin:auto; margin-top:14%;box-shadow: rgba(0, 0, 0, 0.65) 0px 5px 15px; '>" +
      "<img src='assets/cold.png' style ='width:11rem; margin:auto;' class='card-img-top' alt='...>" +
      " <div class='card-body'>" +
      "<p class='card-text'>" +
      "<h1 style='margin:auto; font-size:2rem;'>" +
      "COLD" +
      "</h1>" +
      "</p>" +
      "</div>" +
      " </div>"
  );
} else if (currentWeather == "rainy") {
  document.write(
    "<div class='card' style='width: 18rem; height:18rem; margin:auto; margin-top:14%;box-shadow: rgba(0, 0, 0, 0.65) 0px 5px 15px; '>" +
      "<img src='assets/rainy.png' style ='width:13rem; margin:auto;' class='card-img-top' alt='...>" +
      " <div class='card-body'>" +
      "<p class='card-text'>" +
      "<h1 style='margin:auto; font-size:2rem;'>" +
      "RAINY" +
      "</h1>" +
      "</p>" +
      "</div>" +
      " </div>"
  );
} else if (currentWeather == "windy") {
  document.write(
    "<div class='card' style='width: 18rem; height:18rem; margin:auto; margin-top:14%;box-shadow: rgba(0, 0, 0, 0.65) 0px 5px 15px; '>" +
      "<img src='assets/windy.png' style ='width:18rem; margin:auto;' class='card-img-top' alt='...>" +
      " <div class='card-body'>" +
      "<p class='card-text'>" +
      "<h1 style='margin:auto; font-size:2rem;'>" +
      "WINDY" +
      "</h1>" +
      "</p>" +
      "</div>" +
      " </div>"
  );
} else if (currentWeather == "stormy") {
  document.write(
    "<div class='card' style='width: 18rem; height:18rem; margin:auto; margin-top:14%;box-shadow: rgba(0, 0, 0, 0.65) 0px 5px 15px; '>" +
      "<img src='assets/stormy.png' style ='width:12rem; margin:auto;' class='card-img-top' alt='...>" +
      " <div class='card-body'>" +
      "<p class='card-text'>" +
      "<h1 style='margin:auto; font-size:2rem;'>" +
      "STORMY" +
      "</h1>" +
      "</p>" +
      "</div>" +
      " </div>"
  );
} else {
  document.write(
    "<div class='card' style='width: 18rem; height:18rem; margin:auto; margin-top:14%;box-shadow: rgba(0, 0, 0, 0.65) 0px 5px 15px; '>" +
      "<img src='assets/error.png' style ='width:13rem; margin:auto;' class='card-img-top' alt='...>" +
      " <div class='card-body'>" +
      "<p class='card-text'>" +
      "<h1 style='margin:auto; font-size:2rem;'>" +
      "NOT A WEATHER" +
      "</h1>" +
      "</p>" +
      "</div>" +
      " </div>"
  );
}
