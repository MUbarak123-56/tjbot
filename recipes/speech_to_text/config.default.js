var TJBot = require('tjbot');
var tj = new TJBot([], {}, {
tone_analyzer: {
    apikey: ""
  }
});

var text = "I like TJBot so much!";

tj.analyzeTone(text).then(response => {
  console.log(response);
});
exports.credentials = {};

exports.credentials.speech_to_text = {
 apikey: ""
};
exports.credentials.tone_analyzer = {
 apikey: ""
};
