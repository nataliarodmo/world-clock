function updateTime(){

// Bogota //
let bogotaElement = document.querySelector("#bogota");
let bogotaDateElement = bogotaElement.querySelector(".date");
let bogotaTimeElement = bogotaElement.querySelector(".time");
let shownBogotaTime = moment().tz("America/Bogota");
bogotaDateElement.innerHTML = shownBogotaTime.format("MMMM Do YYYY");
bogotaTimeElement.innerHTML = shownBogotaTime.format("h:mm:ss [<small>]A[</small>]");

// Rome //
let romeElement = document.querySelector("#rome");
let romeDateElement = romeElement.querySelector(".date");
let romeTimeElement = romeElement.querySelector(".time");
let shownRomeTime = moment().tz("Europe/Rome");
romeDateElement.innerHTML = shownRomeTime.format("MMMM Do YYYY");
romeTimeElement.innerHTML = shownRomeTime.format("h:mm:ss [<small>]A[</small>]");
};

updateTime();
setInterval(updateTime, 1000);