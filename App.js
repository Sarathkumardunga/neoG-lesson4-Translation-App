//creating referrence using query selector
var btnTranslate = document.querySelector("#btn-translate");
var inputText = document.querySelector(".txt-input");
var serverURL = "https://api.funtranslations.com/translate/valyrian.json";

var output = document.querySelector("#output");

//construct url function
function constructURL(input){
    return serverURL + "?text=" + input;
}

//call back function for error handling
function errorHandler(error){
    console.log("error occured", error);
}

//Call back function of click handler
function clickHandler(){
    var input = inputText.value;
    //calling the mock api for fetching the translation
    fetch(constructURL(input))
    .then(response => response.json())
    .then(json=>{
        var translatedText = json.contents.translated;
        output.innerText = translatedText;
    })
    .catch(errorHandler)
}

btnTranslate.addEventListener("click", clickHandler);

