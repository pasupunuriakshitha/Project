function listen() {
  let inputArea = document.getElementById('input-area');
  let outputArea = document.getElementById('output-area');

  var recognition = new webkitSpeechRecognition();
  recognition.lang = "en-US"; // English language code
  recognition.start();

  recognition.onresult = function(event) {
    let transcript = event.results[0][0].transcript;
    transcript = transcript.trim().toLowerCase();
    inputArea.textContent = transcript.substring(0, transcript.length - 1);

    // Process the transcript based on the selected language
    if (transcript.includes("hello")) {
      outputArea.textContent = "Hello, User";
      speak("Hello, User");
    } else {
      outputArea.textContent = "Sorry, I don't understand";
      speak("Sorry, I don't understand");
    }
  };
}

function speak(text) {
  const utterance = new SpeechSynthesisUtterance(text);
  speechSynthesis.speak(utterance);
}
