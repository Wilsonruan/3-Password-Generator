var copyText = document.getElementById('password');
var length = 0;
var password = "";
var checkCharacters = document.getElementById('check-characters');
var arrayCharacters = ['Special', 'Numeric', 'Lowercase', 'Uppercase']

promptNumber();
promptCharacter();

function promptNumber() {
    length = prompt("Please indicate the length of password. Must enter a number between 8 to 128.", "8");
    if (!(8 <= length && length <= 128)) {
        alert("Please select a number between 8 to 128.");
        promptNumber();
    }
}

function promptCharacter() {
    var ensureAtLeastOne = false;
    for (var i = 0; i < arrayCharacters.length; i++) {
        arrayCharacters[i] = confirm("Would you like " + arrayCharacters[i] + " Characters? If not, please click cancel.");
        if (arrayCharacters[i]) {
            checkCharacters.children[i].children[0].setAttribute('checked', 'checked');
            ensureAtLeastOne = true;
        }
    }
    if (!(ensureAtLeastOne)) {
        alert("Please select at least one character type!");
        arrayCharacters = ['Special', 'Numeric', 'Lowercase', 'Uppercase']
        promptCharacter();
    }
}

function myCopyFunction() {
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    document.execCommand("copy");
}

function myGeneratePassword() {
    var values = "";
    var allVales = [" !#$%&'()*+,-./:;<>?@[\]^_`{|}~=", "1234567890", "abcdefghijklmnopqrstuvwxyz", "ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
    var passwordCheck = [/(?=.*\W)/, /(?=.*\d)/, /(?=.*[a-z])/, /(?=.*[A-Z])/];
    // var result = false;
    password = "";
    for (var i = 0; i < allVales.length; i++) {
        if (checkCharacters.children[i].children[0].checked) {
            values = values + allVales[i];
        }
    }
    for (var i = 1; i <= length; i++) {
        password = password + values.charAt(Math.floor(Math.random() * Math.floor(values.length - 1)));
    }
    for (var i = 0; i < allVales.length; i++) {
        if (checkCharacters.children[i].children[0].checked) {
            if (!passwordCheck[i].test(password)) {
                myGeneratePassword();
            }
        }
    }
    copyText.value = password;
    copyText.classList.remove('text-center');
}