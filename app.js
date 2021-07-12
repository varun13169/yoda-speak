var btnSubmit = document.querySelector("#btn-submit");
var txtInput = document.querySelector("#txt-input");
var txtOutput = document.querySelector("#output-txt");
var baseUrl = "https://api.funtranslations.com/translate/yoda.json?text="

txtInput.addEventListener("change", onChangeHandler);
btnSubmit.addEventListener("click", onClickHandler)

function getTranslation(inpText) {
    var url = baseUrl + inpText;

    return fetch(url)
        .then((res) => {
            return res.json()
        })
        .then((json) => {
            return json;
        });
}

function onChangeHandler(e) {
    //console.log(e.target.value);
}

function onClickHandler() {

    getTranslation(txtInput.value)
        .then((res) => {
            txtOutput.innerText = res.contents.translated;
        })
        .catch((err) => {
            console.log(err);
            alert("Something wrong with server, try again after sometime!");
        });
}

// "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json?text="
