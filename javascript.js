var copyText = document.getElementById("password");
var length = 0


checkNumber()

function checkNumber (){
    length = prompt("Please indicate the length of password. Must enter a number between 8 to 128.","8");
    if (length > 7 && length < 129) {
        console.log(length)
    } else {
        checkNumber()
    }
}

function myCopyFunction() {
    copyText.select();
    copyText.setSelectionRange(0, 99999)
    document.execCommand("copy");
}

function myGeneratePassword() {

    let exitNow = false;
    let values = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890 !#$%&'()*+,-./:;<=>?@[\]^_`{|}~"
    let password = "";
    while (exitNow == false) {
        password = "";
        // length = Math.floor(Math.random() * (128 - 8)) + 8;
        for (var i = 1; i <= length; i++) {
            password = password + values.charAt(Math.floor(Math.random() * Math.floor(values.length - 1)));
        }
        let passwordCheck = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W)/;
        let result = passwordCheck.test(password);
        exitNow = result;
        console.log(length)
        console.log(exitNow)
    }
    document.getElementById("password").value = password;
    copyText.classList.remove('text-center')
}