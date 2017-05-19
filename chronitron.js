//
//
//
//  Chronitron.js
//
//
//

$('.type').keypress(function() {
  if (event.which == 13) {
    output = '';
    event.preventDefault();
    var text = $('.type').val();
    $('.history').prepend('<div class="you">' + text + '</div>');
    $('.type').val('');
    var output = parse(text);
    $('.history').prepend('<div class="them">' + output + '</div>');
  }
});
function getTime() {
  return new Date($.now());
}
function parse(input) {
  text = input.toLowerCase();
  text = text.replace(/[.,\ \'\/#!$%\^&\*;:{}?=\-_`~()]/g,"");
  var help = 'Need help? <a href="https://github.com/AMGTeen/Chronitron/blob/master/README.md#current-features">Click here</a> see what I can do. If you\'re a programmer, check out the <a href="https://raw.githubusercontent.com/AMGTeen/Chronitron/master/chronitron.js">source code</a>!',
  hey = ['Hey','Hello','Yo','Hey!','Hello!','Yo!','Heya','Hey There','Heyyy','What\'s up?','Eyy','Ayy','Hello there!'];

  var replacements = {
    'hello':hey,
    'hey':hey,
    'yo':hey,
    'heya':hey,
    'hello there':hey,
    'hi':['Hey','Hello','Yo','Hey!','Hello!','Yo!','Heya','Hi!'],
    'whatsup':['Not much!','Just sitting here waiting for you to type something ;)','Haha not much','Talking to you! :)','THE SKY','The Sky ;)','Haha hello!','Not much!','Not much :)','Not much, how about you?','Not much, how\'re you doing?'],
    'wassup':['Not much!','Just sitting here waiting for you to type something ;)','Haha not much','Talking to you! :)','THE SKY','The Sky ;)','Haha hello!','Not much!','Not much :)','Not much, how about you?','Not much, how\'re you doing?'],
    'wazzup':['Not much!','Just sitting here waiting for you to type something ;)','Haha not much','Talking to you! :)','THE SKY','The Sky ;)','Haha hello!','Not much!','Not much :)','Not much, how about you?','Not much, how\'re you doing?'],
    'heywhatsup':['Not much!','Just sitting here waiting for you to type something ;)','Haha not much','Talking to you! :)','THE SKY','The Sky ;)','Haha hello!','Not much!','Not much :)','Not much, how about you?','Not much, how\'re you doing?'],
    'whatshappening':['Not much!','Just sitting here waiting for you to type something ;)','Haha not much','Talking to you! :)','THE SKY','The Sky ;)','Haha hello!','Not much!','Not much :)','Not much, how about you?','Not much, how\'re you doing?'],
    'suh':['Just sitting here waiting for you to type something 😉','Suh to you bro','Haha not much','Talking to you! :)','Haha hello!','Not much!','Not much :)','Not much, how about you?','Not much, how\'re you doing?'],
    'howareyou':['Fine!','Great!','Good.','Awesome!','OK','Doing good, how about you?'],
    'howareyou':['Fine!','Great!','Good.','Awesome!','OK','Doing good, how about you?'],
    'whatsthetime':[getTime()],
    'whattimeisit':[getTime()],
    'whattime':[getTime()],
    'time':[getTime()],
    'cool':['👍'],
    'google':[window.open("google.com")],
    'chronitron':['Did you say my name?','Yes?','Hello!','Did you say my name?','Cool name right 😏'],
    'heychronitron':['Yes?','Hello!'],
    'guesswhat':['What!!','What?','I am litttterally on the edge of my seat','What is it?','Yes?'],
    'help':[help],
    'ineedhelp':[help],
    'helpme':[help],
    'howdoiusethis':[help],
    'howamisupposedtousethis':[help],
  }
  for(var i = 0;i < Object.keys(replacements).length; i++) {
    var index = Object.keys(replacements)[i];
    var value = replacements[index];
    if(index == text) {
      var items = value.length;
      var number = Math.floor(Math.random() * items);
      var output = value[number];
      return output;
      return;
    }
  }
  // IDK what you said?!!
  if(text !== '') {
    var idk = [
      'Sorry, I\'m confused :(',
      'Siri quote: I\'m not sure I understand! :D',
      'Say what now what now',
      'Pardon?',
      'Could you please say that again?',
      'Sorry, what do you mean?',
      'I can only understand a few things, you know... so don\'t judge. Plus, I\'ll have more features soon anyway',
      'You\'ve probably noticed I\'m a lame chatbot so I probably don\'t know what you mean :)'
    ];
      var idknumber = Math.floor(Math.random() * idk.length);
      var output = idk[idknumber];
      return output;
  } else {
    return '';
  }
}
