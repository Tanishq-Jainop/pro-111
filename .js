prediction1="";
prediction2="";
Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:90});

    camera=document.getElementById("camera");
Webcam.attach("#camera");
function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML="<img id='captured_image' src='"+data_uri+"'>";
    });
}
console.log('ml5 version',ml5.version);
classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/4NpmKOdLR/model.json',modeLLoaded);
function modeLLoaded(){
    console.log("modeLLoaded");
}
function speak(){
    synth=window.speechSynthesis;
    data_1="The 1st prediction is"+prediction1;
    data_2="The 2nd prediction is"+prediction2;
    utterthis=new SpeechSynthesisUtterance(data1+data2);
    synth.speak(utterthis);
}