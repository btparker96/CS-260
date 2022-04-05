const APIKEY = "YW4JMM40FKB6XEM6";
const NUM_ENTRIES = 3;
const NAME_MAP = {"temp": "Temperature", "feels_like": "Feels-like", "temp_min": "Minimum Temperature", "temp_max": "Maximum Temperature",
    "pressure": "Pressure", "sea_level": "Sea Level", "grnd_level": "Ground Level", "humidity": "Humidity", "temp_kf": "Temperature (kf)",
"speed": "Speed", "deg": "Degree", "gust": "Gust"}

document.getElementById("ticker-submit").addEventListener("click", function(event) {
    event.preventDefault(); //preventing the default prevents the entire page from reloading, instead, the DOM is updated so the application runs faster and looks like a desktop application.
    const ticker = document.getElementById("ticker-input").value;
    const numDays = document.getElementById("num-days-input").value;
    if (ticker === "")
      return;
    const url = 'https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=' + ticker + '&apikey=' + APIKEY;
    fetch(url) //promise
        .then(function(response) { //when fetch has got something, perform .then and then second .then
            return response.json();
        }).then(function(json) {
            let summary = document.createElement('div');
            summary.className = "summary";
            let h2Element = document.createElement('h2');
            h2Element.className = "current-financial-statement";
            h2Element.appendChild(document.createTextNode('Stock Data for ' + json['Meta Data']['2. Symbol']))
            //summary.appendChild(h2Element);
            console.log("check point 1");
            for (let i = 0; i < numDays; i++) {
                let dayReport = document.createElement('div');
                dayReport.className = "day-report";
                let date = Object.keys(json["Time Series (Daily)"])[i];
                let h3Element = document.createElement('h3');
                h3Element.className = "date-h3";
                h3Element.appendChild(document.createTextNode(date));
                dayReport.appendChild(h3Element);
                // console.log("check point 2");
                for (let k = 0; k < NUM_ENTRIES; k++) {
                    listItem = document.createElement('li');
                    let attribute = Object.keys(json["Time Series (Daily)"][date])[k];
                    listItem.appendChild(document.createTextNode(`${attribute}: \$${json["Time Series (Daily)"][date][attribute]}`));
                    dayReport.appendChild(listItem);
                }
                summary.appendChild(dayReport);
                //console.log(date);
            }
            document.getElementById("financialResults").replaceChildren(h2Element);
            document.getElementById("financialResults").appendChild(summary);
        });
    });
    document.getElementById("ticker-add-submit").addEventListener("click", function(event) {
        event.preventDefault(); //preventing the default prevents the entire page from reloading, instead, the DOM is updated so the application runs faster and looks like a desktop application.
        const ticker = document.getElementById("ticker-input").value;
        const numDays = document.getElementById("num-days-input").value;
        if (ticker === "")
          return;
        const url = 'https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=' + ticker + '&apikey=' + APIKEY;
        fetch(url) //promise
            .then(function(response) { //when fetch has got something, perform .then and then second .then
                return response.json();
            }).then(function(json) {
                let summary = document.createElement('div');
                summary.className = "summary";
                let h2Element = document.createElement('h2');
                h2Element.className = "current-financial-statement";
                h2Element.appendChild(document.createTextNode('Stock Data for ' + ticker))
                //summary.appendChild(h2Element);
                console.log("check point 1");
                for (let i = 0; i < numDays; i++) {
                    let dayReport = document.createElement('div');
                    dayReport.className = "day-report";
                    let date = Object.keys(json["Time Series (Daily)"])[i];
                    let h3Element = document.createElement('h3');
                    h3Element.className = "date-h3";
                    h3Element.appendChild(document.createTextNode(date));
                    dayReport.appendChild(h3Element);
                    // console.log("check point 2");
                    for (let k = 0; k < NUM_ENTRIES; k++) {
                        listItem = document.createElement('li');
                        let attribute = Object.keys(json["Time Series (Daily)"][date])[k];
                        listItem.appendChild(document.createTextNode(`${attribute}: \$${json["Time Series (Daily)"][date][attribute]}`));
                        dayReport.appendChild(listItem);
                    }
                    summary.appendChild(dayReport);
                    //console.log(date);
                }
                document.getElementById("financialResults").appendChild(h2Element);
                document.getElementById("financialResults").appendChild(summary);
            });
        });