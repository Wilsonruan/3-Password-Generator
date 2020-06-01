function myCopyFunction() {
    var copyText = document.getElementById("password");
    copyText.select();
    copyText.setSelectionRange(0, 99999)
    document.execCommand("copy");
}

function myGeneratePassword(){
    let values = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()"
    let length = Math.floor(Math.random() * (12 - 8)) + 8;
    let password ="";
    for(var i = 1; i <=length; i++){
        password = password + values.charAt(Math.floor(Math.random() * Math.floor(values.length -1)));
    }
    document.getElementById("password").value = password;
    let passwordCheck = /[0-9]+/g;
    let result = passwordCheck.test(password);
    console.log(result);
    console.log(length);
}