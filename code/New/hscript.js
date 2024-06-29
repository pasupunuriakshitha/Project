function listen() {
  let inputArea = document.getElementById('input-area');
  let outputArea = document.getElementById('output-area');

  var recognition = new webkitSpeechRecognition();
  recognition.lang = "hi-IN"; // Hindi language code
  recognition.start();

  recognition.onresult = function(event) {
    let transcript = event.results[0][0].transcript;
    transcript = transcript.trim().toLowerCase();
    inputArea.textContent = transcript.substring(0, transcript.length - 1);

    // Process the transcript based on the selected language
    if (transcript.includes("नमस्ते")) {
      outputArea.textContent = "नमस्ते, उपयोगकर्ता";
      speak('नमस्ते, उपयोगकर्ता');
    } else {
      outputArea.textContent = "क्षमा करें, मुझे समझ में नहीं आया";
      speak('क्षमा करें, मुझे समझ में नहीं आया');
    }
  };
}

function speak(text) {
  const utterance = new SpeechSynthesisUtterance(text);
  speechSynthesis.speak(utterance);
}
