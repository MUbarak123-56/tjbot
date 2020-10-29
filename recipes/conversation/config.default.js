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
exports.workspaceId = ''; // replace with the workspace identifier of your conversation

// Set this to false if your TJBot does not have a camera.
exports.hasCamera = true;

// Create the credentials object for export
exports.credentials = {};

// Watson Assistant
// https://www.ibm.com/watson/services/conversation/
exports.credentials.assistant = {
	apikey: ""
};

// Watson Speech to Text
// https://www.ibm.com/watson/services/speech-to-text/
exports.credentials.speech_to_text = {
	apikey: ""
};

// Watson Text to Speech
// https://www.ibm.com/watson/services/text-to-speech/
exports.credentials.text_to_speech = {
	apikey: ""
};

// Watson Visual Recognition
// https://www.ibm.com/watson/services/visual-recognition/
//exports.credentials.visual_recognition = {
//    apikey: ""
//};
exports.credentials.tone_analyzer = {
    apikey: ""
};
