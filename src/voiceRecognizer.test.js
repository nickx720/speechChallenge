import Corti from "./corti";
import voiceRecognizer from "./voiceRecognizer";

const SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;

let spy;

beforeAll(() => {
  spy = jest.spyOn(document, "getElementById");
  Corti.patch();
});

afterAll(() => {
  jest.clearAllMocks();
  Corti.unPatch();
});

test('app responses to voice command "I solved the challenge"', () => {
  const mockElement = document.createElement("div");
  spy.mockReturnValue(mockElement);
  const recognition = new window.SpeechRecognition();
  voiceRecognizer.receivedCorrectVoiceCommand = jest.fn();
  voiceRecognizer.listenForVoice(recognition);
  recognition.start();

  recognition.say("I solved the challenge");
  expect(voiceRecognizer.receivedCorrectVoiceCommand).toHaveBeenCalledWith(
    "I solved the challenge"
  );
});
