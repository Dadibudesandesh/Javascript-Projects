let btnStart=document.querySelector("div .btn-start");
let btnStop=document.querySelector("div .btn-stop");
let text=document.getElementById("text");
console.log(btnStop);
btnStart.addEventListener("click",()=>{
    var speech=true;
    window.SpeechRecognition = window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();
    console.log(recognition);
    recognition.lang="hi";
    recognition.interimResults = true;


    recognition.addEventListener("result",(e)=>{
        const transcript=Array.from(e.results).map(result=>result[0]).map(result=>result.transcript);
        text.innerHTML=transcript;
    })
    if(speech==true){
        recognition.start();
    }
});

btnStop.addEventListener("click",()=>{
    recognition.stop();

})