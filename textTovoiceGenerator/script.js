let speech = new SpeechSynthesisUtterance();
let text = document.querySelector(".text");
let button = document.querySelector(".button");
let voiceList = document.querySelector(".voices");
let voices = [];

window.speechSynthesis.onvoiceschanged = () => {
    voices = window.speechSynthesis.getVoices();
    speech.voice = voices[0];
    voices.forEach((voice, i) => {
         voiceList.options[i] = new Option(voice.name, i);
         });
}

button.addEventListener("click", () => {
    speech.text = text.value;
    window.speechSynthesis.speak(speech);
    // console.log(speech.text);    // for debuging
});


voiceList.addEventListener("change",()=>{
    speech.voice = voices[voiceList.value];
});

