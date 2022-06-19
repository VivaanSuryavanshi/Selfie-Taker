var SpeechRecognition=window.webkitSpeechRecognition;
var recognition=new SpeechRecognition();

function startCamera(){
    document.getElementById("textbox").innerHTML="";
    recognition.start();
}

recognition.onresult=function(event){
    console.log(event);
    var content=event.results[0][0].transcript
    console.log("content="+content);
    document.getElementById("textbox").innerHTML=content;
    if(content=="take my selfie"){
        speak();
        console.log("Taking Selfie");
    }
}

function speak(){
    var sinth=window.speechSynthesis;
    speakdata="Taking Your Selfie in 5 Seconds";
    var utterthis=new SpeechSynthesisUtterance(speakdata);
    sinth.speak(utterthis);
    Webcam.attach(camera);

    setTimeout(function(){
        take_snapshot();
        save();
    },5000);
}

Webcam.set({
    width:360,
    height:250,
    image_format:'png',
    png_quality:90
});

camera=document.getElementById("camera");

function take_snapshot(){
    Webcam.snap(function(data_URI){
    document.getElementById("result").innerHTML="<img id='selfieImage' src=' "+data_URI+"'>";
    });
}

function save(){
    var link=document.getElementById("link");
    image=document.getElementById("selfieImage").src;
    link.href=image;
    console.log("savingtheimage");
    link.click();
}