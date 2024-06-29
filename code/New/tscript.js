function listen() {
  let inputArea = document.getElementById('input-area');
  let outputArea = document.getElementById('output-area');

  var recognition = new webkitSpeechRecognition();
  recognition.lang = "te-IN"; // Telugu language code
  recognition.start();

  recognition.onresult = function(event) {
    let transcript = event.results[0][0].transcript;
    transcript = transcript.trim().toLowerCase();
    inputArea.textContent = transcript.substring(0, transcript.length - 1);

    // Process the transcript based on the selected language
    if (transcript.includes("జ్వరం")) {
      outputArea.textContent = "హలో, వాడుకర్తా";
      speak('హలో, వాడుకర్తా');
    } 
    if (transcript.includes("జలుబు")) {
      outputArea.textContent = "హలో, వాడుకర్తా";
      speak('హలో, వాడుకర్తా');
    } 
    else {
      outputArea.textContent = "క్షమించండి, నాకు అర్థం కాదు";
      speak('క్షమించండి, నాకు అర్థం కాదు');
    }
  };
}

function speak(text) {
  const utterance = new SpeechSynthesis
}