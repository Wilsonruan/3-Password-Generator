// // Generate Password Button
// $("#generate").on("click", function() {
//     $("password")
// })




// // Copy Button
// $("#copy").on("click", function() {
//     $("password")
// })

// W3school experiment
function myFunction() {
    var copyText = document.getElementById("password");
    copyText.select();
    copyText.setSelectionRange(0, 99999)
    document.execCommand("copy");
    alert("Copied the text: " + copyText.value);
  }