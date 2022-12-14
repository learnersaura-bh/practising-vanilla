var btnTranslate = document.querySelector("#btn-translate")
var txtInput = document.querySelector("#txt-input")
var txtOutput = document.querySelector("#txt-output")

var serverUrl = "https://api.funtranslations.com/translate/hodor.json"
function getTranslationalUrl(inputText){
return  serverUrl + "?" + "text=" + inputText;
}

function clickEventHandler(){
    var inputText = txtInput.value

    fetch(getTranslationalUrl(inputText))
    .then(response => response.json())
    .then(json =>{
        var translatedText = json.contents.translated;
        txtOutput.innerText = translatedText;
    } )

    
}


btnTranslate.addEventListener("click" , clickEventHandler)