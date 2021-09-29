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


function check(){
    console.log("check")
    img=document.getElementById('captured_image');
    classifier.classify(img,got_result);

}
function got_result(error,results){
    if(error){
        console.log(error);
    }
    else{
      console.log(results);
      document.getElementById('result_emotion_name').innerHTML=results[0].label; 
      document.getElementById('result_emotion_name2').innerHTML=results[1].label;
    prediction1=results[0].label; 
    prediction2=results[1].label;
    speak();
    if(results[0].label=="Happy")
    {document.getElementById("update_emoji").innerHTML="&#128522;"}
    if(results[0].label=="Sad")
    {document.getElementById("update_emoji").innerHTML="&#128532;"}
    if(results[0].label=="Angry")
    {document.getElementById("update_emoji").innerHTML="&#128548;"}

    if(results[1].label=="Happy")
    {document.getElementById("update_emoji2").innerHTML="&#128522;"}
    if(results[1].label=="Sad")
    {document.getElementById("update_emoji2").innerHTML="&#128532;"}
    if(results[1].label=="Angry")
    {document.getElementById("update_emoji2").innerHTML="&#128548;"}
}
}
function speak(){
    synth=window.speechSynthesis;
    data_1="The 1st prediction is"+prediction1;
    data_2="The 2nd prediction is"+prediction2;
    utterthis=new SpeechSynthesisUtterance(data_1+data_2);
    synth.speak(utterthis);}