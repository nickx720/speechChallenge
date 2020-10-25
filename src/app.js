import voiceRecognizer from "./voiceRecognizer";

var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;

voiceRecognizer.listenForVoice(new SpeechRecognition());
