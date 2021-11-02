function init() {
    // TODO: add event listener for a click on the 'lookup' button
    //       should call the `getLocate()` function when clicked

    let lookup = document.getElementById("lookup");
    lookup.addEventListener("click", geoLocate, false);
    let kelly = document.getElementById("kelly");
    kelly.addEventListener("click", findKelly, false);
}

function findKelly() {
    let winPercent = document.getElementById("winPercent").value/100;
    let ogwinDollars = document.getElementById("winDollars").value;
    let lossDollars = 100*document.getElementById("lossDollars").value/ogwinDollars;
    let winDollars = 100;
    console.log(winPercent+" "+winDollars+" "+lossDollars);


    let kellyValue = 1000000*(winPercent/lossDollars - ((1-winPercent)/winDollars))/ogwinDollars;
    console.log("here is kelly "+kellyValue);



}

function geoLocate(event) {
    console.log("Locate Pressed");
    // Perform geolocation using the Nominatim API
    //  - get plain text location value from text input 'location'
    //  - build URL for using with API
    let date = new Date();
    //let url = 'https://api-nba-v1.p.rapidapi.com/games/date/'+date.getFullYear()+'-'+(date.getMonth()+1)+'-'+"0"+date.getDate();
    // TODO: download geolocation data using the API url
    //       should call the `getJSON()` function
    getJSON(url, (data) => {
        console.log(data);

        let list = document.getElementById('result');
        let i;
        for (i=0; i < data.api.games.length; i++) {
            let game = data.api.games[i];
            console.log(game);
            let item = document.createElement('li');
            item.textContent =  game.vTeam.fullName + " at " + game.hTeam.fullName;
            list.appendChild(item);
        }
    });


    // TODO: once data is downloaded and available, you should dynamically
    //       build items in the unordered list `result`. Each item should
    //       have the full name of the location (display_name), followed
    //       by the latitude and longitude
    //       Example: location = St. Paul
    //        - Saint Paul, Ramsey County, Minnesota, United States of
    //          America (44.9504037, -93.1015026)
    //        - Saint-Paul, Neufchâteau, Vosges, Grand Est, Metropolitan
    //          France, 88170, France (48.3285226, 5.888596)
    //        - ...


}

function getJSON(url, callback) {
    // TODO: use `XMLHttpRequest()` to perform a GET request to the specified
    //       URL. Create a callback for when the readyState has changed. Once
    //       data has successfully downloaded, convert the response text to a
    //       JS Object (use `JSON.parse(text)`), then trigger the specified
    //       callback function with the data.

    var req = new XMLHttpRequest();
    req.onreadystatechange = function() {
        if (req.readyState == 4 && req.status == 200) {
            let data = JSON.parse(req.response);
            callback(data);
        }
    };
    req.open("GET", url, true);
    req.setRequestHeader("x-rapidapi-host", "api-nba-v1.p.rapidapi.com");
    req.setRequestHeader("x-rapidapi-key", "7ab080af2dmshca311c19c0edf06p19a01ejsnd12d3458beb4");
    req.send();
}





/**const gamesButton = document.getElementById('getGamesButton');

function init() {
    let gamesButton = document.getElementById("lookup");
    lookup.addEventListener("click", findGames, false);
}


function findGames(event) {
    console.log("Finding games");

    let date = new Date();
    let url = 'https://api-nba-v1.p.rapidapi.com/games/date/'+date.getFullYear()+'-'+(date.getMonth()+1)+'-'+date.getDate();

    getJSON(url, (data) => {

        console.log('here is the data '+data);

        let list = document.getElementById('result');
        let i;
        for (i=0; i < data.length; i++) {
            let game = data[i];
            let item = document.createElement('li');
            console.log('here is item' + data[i]);
            //item.textContent 
            list.appendChild(item);
        }
    });



}



function getJSON(url, callback) {

    
    var req = new XMLHttpRequest();
    req.withCredentials = true;
    req.onreadystatechange = function() {
        if (req.readyState == 4 && req.status == 200) {
            let data = JSON.parse(req.response);
            callback(data);
        }
    };
    req.open("GET", "https://api-nba-v1.p.rapidapi.com/games/date/%7Bdate%7D");
    req.setRequestHeader("x-rapidapi-host", "api-nba-v1.p.rapidapi.com");
    req.setRequestHeader("x-rapidapi-key", "7ab080af2dmshca311c19c0edf06p19a01ejsnd12d3458beb4");
    req.send();
    
}
**/