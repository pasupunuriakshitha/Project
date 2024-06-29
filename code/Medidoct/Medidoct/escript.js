function listen() {
    let inputArea = document.getElementById('input-area');
    let outputArea = document.getElementById('output-area');
  
    var recognition = new webkitSpeechRecognition();
    recognition.lang = "en-US"; // English language code
    recognition.start();
  
    recognition.onresult = function(event) {
      let transcript = event.results[0][0].transcript;
      transcript = transcript.trim().toLowerCase(); // Convert to lowercase and remove leading/trailing spaces
      inputArea.textContent = transcript.substring(0, transcript.length - 1);
  
      // Process the transcript based on the selected language
      if (transcript.includes("fever")) {
        outputArea.textContent = "Medicine name: Paracetamol.....Advantages : effectively relieves symptoms of the common cold such as blocked nose, runny nose, watery eyes, sneezing, and congestion or stuffiness......Disadvantages: vomiting,dizziness,sleepiness Most side effects do not require any medical attention and disappear as your body adjusts to the medicine. Consult your doctor if they persist or if you’re worried about them...Dosage : Take this medicine in the dose and duration as advised by your doctor. Swallow it as a whole. Do not chew, crush or break it. Cold 3 Kit may be taken with or without food, but it is better to take it at a fixed time.vomiting,dizziness,sleepiness Most side effects do not require any medical attention and disappear as your body adjusts to the medicine. Consult your doctor if they persist or if you’re worried about them";
      } else {
        outputArea.textContent = "Sorry, I don't understand";
      }
    };
  }
  