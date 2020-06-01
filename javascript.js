function myCopyFunction() {
    var copyText = document.getElementById("password");
    copyText.select();
    copyText.setSelectionRange(0, 99999)
    document.execCommand("copy");
}

function myGeneratePassword(){
 
    let exitNow = false;
    let values = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890 !#$%&'()*+,-./:;<=>?@[\]^_`{|}~"
    let password ="";  

    while (exitNow == false) {
        let length = Math.floor(Math.random() * (12 - 8)) + 8;
        for(var i = 1; i <=length; i++){
            password = password + values.charAt(Math.floor(Math.random() * Math.floor(values.length -1)));
        }
        let passwordCheck = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W)/;
        let result = passwordCheck.test(password);
        exitNow = result;
        console.log(exitNow);
        console.log(password);
        console.log(length);
    }
    document.getElementById("password").value = password;

    
}