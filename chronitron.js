//
// Chronitron.js
// Uses jQuery, but you can use vanilla JS if you like.
//

$(document).ready(function() {
  $('input').focus(); // Focus the input field
});

// IGNORE ALL ABOVE THIS LINE

document.getElementById("Submit").onclick = parse();

function displayUserContent() {
  // When user presses ENTER, add <div class="input"> with text.
  $('.history').append('<div class="input">' + $('input').val("hi") + '</div>'); // Add new <div class="input">
  $('input').val(''); // Clear input field
}

function parse() {
  alert("Button");
}
