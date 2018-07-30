/*
* User-specific configuration
* IMPORTANT NOTES:
*  Please ensure you do not interchange your username and password.
*  Your username is the longer value: 36 digits, including hyphens
*  Your password is the smaller value: 12 characters
*/

exports.workspaceId = 'd6cc4fb0-4295-42b2-ba97-ba5bfea99fd3'; // replace with the workspace identifier of your conversation

// Set this to false if your TJBot does not have a camera.
exports.hasCamera = true;

// Create the credentials object for export
exports.credentials = {};

// Watson Assistant
// https://www.ibm.com/watson/services/conversation/
exports.credentials.assistant = {
	password: 'UK68nAm10k0b',
	username: 'f7b72b76-a27b-4853-aeb5-e5ba9fe7b299'
};

// Watson Speech to Text
// https://www.ibm.com/watson/services/speech-to-text/
exports.credentials.speech_to_text = {
	password: 'inPUxHIscoBH',
	username: '0c7a9279-8534-4a88-8ddc-bb28be4c85b3'
};

// Watson Text to Speech
// https://www.ibm.com/watson/services/text-to-speech/
exports.credentials.text_to_speech = {
	password: '05mZ6yQiLdEY',
	username: 'ca72973e-8430-4071-8d59-132ae31bcec2'
};

// Watson Visual Recognition
// https://www.ibm.com/watson/services/visual-recognition/
exports.credentials.visual_recognition = {
    api_key: 'ubt9Ri10fnOgsT-ZQPIqHwz63ly9ig5mb9O4EqlN0xEv'
};
