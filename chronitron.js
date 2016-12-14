
//
// Chronitron.js
// Uses jQuery, but you can use vanilla JS if you like.
//
//$(document).ready(function() {
//  $('input').focus(); // Focus the input field
//});

// IGNORE ALL ABOVE THIS LINE

$("#submit").click(parse);

function parse() {
  $('.history').prepend('<div class="input">' + $('#input').val() + '</div>'); // When you say something, add it to the chat
  $('#input').val(text="hi");
  
  // then... parse and reply
}

$(document).keypress(function(e) { // Press ENTER to submit
    if(e.which == 13) {
        parse();
    } 
});
