function updateTime(){

// Bogota //
let bogotaElement = document.querySelector("#bogota");
if (bogotaElement) {
let bogotaDateElement = bogotaElement.querySelector(".date");
let bogotaTimeElement = bogotaElement.querySelector(".time");
let shownBogotaTime = moment().tz("America/Bogota");
bogotaDateElement.innerHTML = shownBogotaTime.format("MMMM Do YYYY");
bogotaTimeElement.innerHTML = shownBogotaTime.format("h:mm:ss [<small>]A[</small>]");
}

// Rome //
let romeElement = document.querySelector("#rome");
if (romeElement) {
let romeDateElement = romeElement.querySelector(".date");
let romeTimeElement = romeElement.querySelector(".time");
let shownRomeTime = moment().tz("Europe/Rome");
romeDateElement.innerHTML = shownRomeTime.format("MMMM Do YYYY");
romeTimeElement.innerHTML = shownRomeTime.format("h:mm:ss [<small>]A[</small>]");
}
};

function updateCity (event){
let cityTimeZone = event.target.value;
let cityName = cityTimeZone.replace("_", " ").split("/")[1];
let cityTime = moment().tz(cityTimeZone);
let citiesElement = document.querySelector("#cities");
citiesElement.innerHTML = ` <div class="city">
            <div>
            <h2>${cityName}</h2>
            <div class="date"> ${cityTime.format("MMMM Do YYYY")}</div>
            </div>
            <div>
            <div class="time"> ${cityTime.format("h:mm:ss [<small>]A[</small>]")} </div>
            </div>
        </div>`
};

updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);