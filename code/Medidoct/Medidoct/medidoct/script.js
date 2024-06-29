function listen() {
    let inputArea = document.getElementById('input-area')
    let outputArea = document.getElementById('output-area')
  
    var recognition = new webkitSpeechRecognition();
    recognition.lang = "en";
    recognition.start();
    recognition.onresult = function(event) {
      let transcript = event.results[0][0].transcript;
      if (transcript == "hello") {
        outputArea.innerHTML = "Hello, User!"
  
      }
      if (transcript == "zoram"){
        outputArea.innerHTML = "Paracetamol"
      }
      if (transcript == "cold"){
        outputArea.innerHTML = "Syrup"
      }
      if (transcript == "fever"){
        outputArea.innerHTML = "Paracetamol"
      }
      if (transcript == "fever"){
        outputArea.innerHTML = "Paracetamol"
      }
      if (transcript == "fever"){
        outputArea.innerHTML = "Paracetamol"
      }
      if (transcript == "fever"){
        outputArea.innerHTML = "Paracetamol"
      }
      if (transcript == "fever"){
        outputArea.innerHTML = "Paracetamol"
      }
      inputArea.innerHTML = event.results[0][0].transcript;
    }
  }

