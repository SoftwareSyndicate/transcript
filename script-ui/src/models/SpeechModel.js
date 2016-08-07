import Notifications from '../services/NotificationService'

class SpeechModel {
  constructor(){
    this.SpeechRecognition = this.SpeechRecognition || webkitSpeechRecognition;
    this.SpeechGrammarList = this.SpeechGrammarList || webkitSpeechGrammarList;
    this.SpeechRecognitionEvent = this.SpeechRecognitionEvent || webkitSpeechRecognitionEvent;

    this.grammar = '#JSGF V1.0; grammar colors; public <color> = aqua | azure | beige | bisque | black | blue | brown | chocolate | coral | crimson | cyan | fuchsia | ghostwhite | gold | goldenrod | gray | green | indigo | ivory | khaki | lavender | lime | linen | magenta | maroon | moccasin | navy | olive | orange | orchid | peru | pink | plum | purple | red | salmon | sienna | silver | snow | tan | teal | thistle | tomato | turquoise | violet | white | yellow ;'

    this.recognition = new this.SpeechRecognition();
    this.speechRecognitionList = new this.SpeechGrammarList();
    this.speechRecognitionList.addFromString(this.grammar, 1);
    this.recognition.grammars = this.speechRecognitionList;
    //recognition.continuous = false;
    this.recognition.lang = 'en-US';
    this.recognition.interimResults = false;
    this.recognition.maxAlternatives = 1;

    this.diagnostic = document.querySelector('.output');
    this.bg = document.querySelector('html');


    this.recognition.onresult = function(event) {
      console.log(event.results[0][0].transcript);
      // The SpeechRecognitionEvent results property returns a SpeechRecognitionResultList object
      // The SpeechRecognitionResultList object contains SpeechRecognitionResult objects.
      // It has a getter so it can be accessed like an array
      // The first [0] returns the SpeechRecognitionResult at position 0.
      // Each SpeechRecognitionResult object contains SpeechRecognitionAlternative objects that contain individual results.
      // These also have getters so they can be accessed like arrays.
      // The second [0] returns the SpeechRecognitionAlternative at position 0.
      // We then return the transcript property of the SpeechRecognitionAlternative object 
      var color = event.results[0][0].transcript;
      /* this.diagnostic.textContent = 'Result received: ' + color + '.'; */
      /* bg.style.backgroundColor = color; */
      console.log(color);
      console.log('Confidence: ' + event.results[0][0].confidence);

      Notifications.notify("SpeechModel.gotText", color);
    }.bind(this);

    this.recognition.onspeechend = function() {
      this.recognition.stop();
    }.bind(this);

    this.recognition.onnomatch = function(event) {
      /* this.diagnostic.textContent = 'I didnt recognise that color.'; */
    }.bind(this);

    this.recognition.onerror = function(event) {
      /* this.diagnostic.textContent = 'Error occurred in recognition: ' + event.error; */
    }.bind(this);
  }

  startRecognition(){
    this.recognition.start();
  }


}
export default new SpeechModel();
