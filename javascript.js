function myCopyFunction() {
    var copyText = document.getElementById("password");
    copyText.select();
    copyText.setSelectionRange(0, 99999)
    document.execCommand("copy");
}

function myGeneratePassword(){
    let values = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!"
    let length = Math.floor(Math.random() * (128 - 8)) + 8;
    let password ="";
    for(var i = 0; i <=length-1; i++){
        password = password + values.charAt(Math.floor(Math.random() * Math.floor(values.length -1)));
    }
    document.getElementById("password").value = password;
    console.log(length)
}