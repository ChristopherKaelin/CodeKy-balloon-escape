const US_Cities = [
    "New York", "Los Angeles", "Chicago", "Houston", "Phoenix", "Philadelphia", "San Antonio", "San Diego", "Dallas", "San Jose",
    "Austin", "Jacksonville", "Fort Worth", "Columbus", "Charlotte", "San Francisco", "Indianapolis", "Seattle", "Denver", "Washington",
    "Boston", "El Paso", "Nashville", "Detroit", "Oklahoma City", "Portland", "Las Vegas", "Memphis", "Louisville", "Baltimore",
    "Milwaukee", "Albuquerque", "Tucson", "Fresno", "Sacramento", "Mesa", "Kansas City", "Atlanta", "Omaha", "Colorado Springs",
    "Raleigh", "Miami", "Long Beach", "Virginia Beach", "Oakland", "Minneapolis", "Tulsa", "Arlington", "New Orleans", "Wichita",
    "Cleveland", "Tampa", "Bakersfield", "Aurora", "Honolulu", "Anaheim", "Santa Ana", "Corpus Christi", "Riverside", "Lexington",
    "Stockton", "Henderson", "Saint Paul", "Saint Louis", "Cincinnati", "Pittsburgh", "Greensboro", "Anchorage", "Plano", "Lincoln",
    "Orlando", "Irvine", "Newark", "Toledo", "Durham", "Chula Vista", "Fort Wayne", "Jersey City", "Saint Petersburg", "Laredo",
    "Madison", "Chandler", "Buffalo", "Lubbock", "Scottsdale", "Reno", "Glendale", "Gilbert", "Winston-Salem", "Owensboro",
    "Norfolk", "Chesapeake", "Garland", "Boise", "Fremont", "Spokane", "Richmond", "Baton Rouge", "Tacoma", "San Bernardino"
  ];

function getRandomCity(cities) {
    const randomIndex = Math.floor(Math.random() * cities.length);
    return cities[randomIndex].toLowerCase();
}

function checkLetter() {
    const letterGuessed = document.getElementById("guess-input").value;
    document.getElementById("guess-input").value = "";
    let cityDisplayCurr = document.getElementById("city-display").textContent;
    let cityDisplayNew ="";

    for (let i=0; i<cityDisplayCurr.length; i++) {
        if (letterGuessed == chosen_city[i]) {
            cityDisplayNew += letterGuessed;
            listOfGuesses += letterGuessed;
        } else {
            cityDisplayNew += cityDisplayCurr[i];
        };
    }
    updateCityDisplay(cityDisplayNew);
}

function updateCityDisplay(guessStatus) {
    let cityDisplay = document.getElementById("city-display");
    cityDisplay.textContent  = guessStatus;    
}

function updateMessage(message) {
    document.getElementById("messageDisplay").textContent = message;
}

const chosen_city = getRandomCity(US_Cities);
let listOfGuesses = "";
let cityDisplayCurr = "";

for (const letter of chosen_city) {
    if (letter === " ") {
        cityDisplayCurr += " ";
    } else {
        cityDisplayCurr += "-";
    }
}

updateCityDisplay(cityDisplayCurr);
