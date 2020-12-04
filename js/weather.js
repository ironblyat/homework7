function gettingJSON(){
    //Display
    document.getElementById("forecast").style.display="block";
    //Set default location if one isn't provided
    let location = "Ann Arbor";
    if (document.querySelector("#location").value != ""){
        location = document.querySelector("#location").value;
    }

    // Your code here.
    console.log("Location is : " + location);

    //set default temperature format if one isn't provided
    let format;
    if (document.querySelectorAll("input[name=temp]:checked").length == 0){
        format = "imperial"
    } else {
        format = document.querySelectorAll("input[name=temp]:checked")[0].value;

    }
    // Your code here.
    console.log("Format is " + format);

    //set the query
    let query = "https://api.openweathermap.org/data/2.5/weather?q="+ location + "&units=" + format + "&appid=87de2598e6178b3f1b46b2c7e0ced1f3";
    // Your code here.

    console.log("Query is :" + query);

    //Create and set variables for each of the elements you
    //need to update, location, temp, the image, etc.

    let loc = document.querySelector("#loc");
    let temp = document.querySelector("#temp");
    let tempImg = document.querySelector("#tempImg");
    // Your code here.


    $.getJSON(query,function(json){

        loc.innerHTML = (json["name"])
        temp.innerHTML = (json["main"].temp) + " with " + (json["weather"][0].description)
        //console.log(JSON.stringify(json));
        tempImg.src = "http://openweathermap.org/img/wn/" + (json["weather"][0].icon + ".png")
        tempImg.alt = (json["weather"][0].description)
        //console.log("icon is" + json["weather"][0].icon)

    });
}
