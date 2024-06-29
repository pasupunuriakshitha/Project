function listen() {
    let inputArea = document.getElementById('input-area');
    let outputArea = document.getElementById('output-area');
  
    var recognition = new webkitSpeechRecognition();
    recognition.lang = "hi-IN"; // Hindi language code
    recognition.start();
  
    recognition.onresult = function(event) {
      let transcript = event.results[0][0].transcript;
      transcript = transcript.trim().toLowerCase(); // Convert to lowercase and remove leading/trailing spaces
      inputArea.textContent = transcript.substring(0, transcript.length - 1);
  
      // Process the transcript based on the selected language
      if (transcript.includes("बुखार")) {
        outputArea.textContent = "दवा का नाम: पैरासिटामोल.....फायदे: आम सर्दी के लक्षणों जैसे बंद नाक, बहती नाक, आंखों से पानी आना, छींक आना और नाक बंद होना या बंद होना आदि से प्रभावी रूप से राहत मिलती है।.........नुकसान: उल्टी, चक्कर आना, नींद आना अधिकांश दुष्प्रभावों के लिए किसी चिकित्सकीय देखभाल की आवश्यकता नहीं होती है और जैसे ही आपका शरीर दवा के साथ तालमेल बिठाता है, वे गायब हो जाते हैं। यदि वे बने रहते हैं या आप उनके बारे में चिंतित हैं तो अपने डॉक्टर से परामर्श लें..........खुराक: इस दवा को अपने डॉक्टर द्वारा बताई गई खुराक और अवधि में लें। इसे पूरा निगल लें. इसे चबाएं, कुचलें या तोड़ें नहीं। कोल्ड 3 किट को भोजन के साथ या उसके बिना लिया जा सकता है, लेकिन इसे एक निश्चित समय पर लेना बेहतर होता है। उल्टी, चक्कर आना, नींद आना। अधिकांश दुष्प्रभावों के लिए किसी चिकित्सा देखभाल की आवश्यकता नहीं होती है और जैसे ही आपका शरीर दवा में समायोजित हो जाता है, वे गायब हो जाते हैं। यदि वे बने रहते हैं या आप उनके बारे में चिंतित हैं तो अपने डॉक्टर से परामर्श लें";
      } else {
        outputArea.textContent = "क्षमा करें, मुझे समझ में नहीं आया";
      }
    };
  }
  