document.getElementById("cityField").addEventListener("keyup", function(event) {
    event.preventDefault();
    const url = "http://bioresearch.byu.edu/cs260/jquery/getcity.cgi?q=" +
      document.getElementById("cityField").value;
    fetch(url)
        .then(function(response) {
            return response.json();
        }).then(function(json) {
            console.log(json);
            console.log(json[0]);
            console.log("Got " + json[0].city);
            const everything = document.createElement("ul");
            for (let i = 0; i < json.length; i++) {
                const value = json[i].city;
                const listItem = document.createElement("li");
                listItem.appendChild(document.createTextNode(value));
                everything.appendChild(listItem);
            };
            const txtHint = document.getElementById("txtHint");
            txtHint.textContent = "";
            txtHint.appendChild(everything);
        });
});
