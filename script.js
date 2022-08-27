let BtnRecord = document.getElementById("record");

BtnRecord.addEventListener("click" , () =>{
    BtnRecord.classList.add('fade')

    let rec = new webkitSpeechRecognition();
    rec.addEventListener("result" , (e) => {
        document.getElementById("textarea").value = e.results[0][0].transcript;
        BtnRecord.classList.remove('fade')
    })
    rec.start();
})

