var copyText = document.getElementById("password");
var length = 0

var checkCharacters = document.getElementById('checkCharacters') 

checkNumber()

function checkNumber (){
    length = prompt("Please indicate the length of password. Must enter a number between 8 to 128.","8");
    if (7 > length > 129) {
        checkNumber()
    }
}

function myCopyFunction() {
    copyText.select();
    copyText.setSelectionRange(0, 99999)
    document.execCommand("copy");
}

function myGeneratePassword() {

    var exitNow = false
    var values = ""
    var password = ""
    var allVales = [" !#$%&'()*+,-./:;<=>?@[\]^_`{|}~", "1234567890", "abcdefghijklmnopqrstuvwxyz", "ABCDEFGHIJKLMNOPQRSTUVWXYZ"]
    
    for (var i = 0; i < allVales.length; i++) {
        if (checkCharacters.children[i].children[0].checked) {
            values = values + allVales[i]
        }
    }
    
    console.log(values)

    // while (exitNow == false) {
        password = "";
        for (var i = 1; i <= length; i++) {
            password = password + values.charAt(Math.floor(Math.random() * Math.floor(values.length - 1)));
        }
        let passwordCheck = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W)/;
        let result = passwordCheck.test(password);
        exitNow = result;
    // }
    document.getElementById("password").value = password;
    copyText.classList.remove('text-center')
}