var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");
//var serverURL = "https://api.funtranslations.com/translate/minion.json";
var serverURL = "https://api.jokes.one";
function getTranslationURL(text)
{
  return serverURL+"?"+"text="+text
}
function errorHandler(error){
    console.log("error occured", error);
    alert("something went wrong with server, please try after sometime");
}

function clickHandler()
{
    //outputDiv.innerText = "Sree";
    var inputText = txtInput.value;//Input from UI
    //calling server for processing
    fetch(getTranslationURL(inputText))
         .then(response => response.json())
         .then(json => {var translatedText = json.contents.translated;
                        outputDiv.innerText=  translatedText})
         .catch(errorHandler);

};

btnTranslate.addEventListener("click", clickHandler);