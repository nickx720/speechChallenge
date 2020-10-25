const output = "I solved the challenge";
const voiceRecognizer = {
  receivedCorrectVoiceCommand(text) {
    document.body.style.backgroundColor = "green";
    setInterval(() => {
      document.body.style.backgroundColor = "white";
    }, 4000);
  },
  listenForVoice(recognition) {
    const targetElement = document.getElementById("app");
    targetElement.addEventListener("click", () => {
      // todo start listening here
      recognition.start();
    });
    var SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList;
    var grammar =
      "#JSGF V1.0; grammar colors; public <color> = aqua | azure | beige | bisque | black | blue | brown | chocolate | coral | crimson | cyan | fuchsia | ghostwhite | gold | goldenrod | gray | green | indigo | ivory | khaki | lavender | lime | linen | magenta | maroon | moccasin | navy | olive | orange | orchid | peru | pink | plum | purple | red | salmon | sienna | silver | snow | tan | teal | thistle | tomato | turquoise | violet | white | yellow ;";
    // var recognition = new window.SpeechRecognition();
    var speechRecognitionList = new SpeechGrammarList();
    speechRecognitionList.addFromString(grammar, 1);
    recognition.grammars = speechRecognitionList;
    recognition.continuous = false;
    recognition.lang = "en-US";
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    recognition.onstart = function () {
      console.log("I'm listening");
    };

    recognition.addEventListener("result", function (event) {
      // todo response to voice command here
      let { transcript, confidence } = event.results[0][0];
      if (
        transcript.toLowerCase() === output.toLowerCase() &&
        confidence === 1
      ) {
        voiceRecognizer.receivedCorrectVoiceCommand(transcript);
      }
    });
    recognition.addEventListener("end", function () {
      console.log("im not listening anymore");
    });
  }
};

export default voiceRecognizer;
