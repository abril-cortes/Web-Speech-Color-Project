window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
function start() {
    // see if their browser supports this
    if (!("SpeechRecognition" in window)) {
        console.log("Sorry yoyr browser does not support speech recognition");
        return;
    }
    // it does work
    // make a new speech reco
    const recognition = new SpeechRecognition();
    recognition.continuous = true;
    recognition.interResults = true;
    recognition.onresult = handleResult;
    recognition.start();
}
start();

//# sourceMappingURL=index.24a7de50.js.map
