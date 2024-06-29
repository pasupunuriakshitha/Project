function listen() {
    let inputArea = document.getElementById('input-area');
    let outputArea = document.getElementById('output-area');

    var recognition = new webkitSpeechRecognition();
    recognition.lang = "te-IN"; // Telugu language code
    recognition.start();

    recognition.onresult = function(event) {
        let transcript = event.results[0][0].transcript;
        transcript = transcript.trim().toLowerCase(); // Convert to lowercase and remove leading/trailing spaces
        inputArea.textContent = transcript.substring(0, transcript.length - 1);

        // Process the transcript based on the selected language
        let responseText = "";

        if (transcript.includes("జ్వరం")) {
            responseText = "మందు";
        } else if (transcript.includes("జలుబు")) {
            responseText = "హలో, వాడుకర్తా";
        } else {
            responseText = "క్షమించండి, నాకు అర్థం కాదు";
        }

        outputArea.textContent = responseText;

        // Convert the response text to speech
        speak(responseText);
    };
}

function speak(text) {
    const speechSynthesis = window.speechSynthesis;
    const utterance = new SpeechSynthesisUtterance(text);
    speechSynthesis.speak(utterance);
}
