function myCopyFunction() {
    var copyText = document.getElementById("password");
    copyText.select();
    copyText.setSelectionRange(0, 99999)
    document.execCommand("copy");
}

function myGeneratePassword(){
    
}