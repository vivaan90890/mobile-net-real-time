function setup() {
  canvas = createCanvas(200, 150);
  canvas.center();
  video = createCapture(VIDEO);
  video.hide();
  Modelloaded=ml5.imageClassifier('MobileNet',modelLoaded);
}
function modelLoaded(){
  console.log("Model is loaded!")
}
function draw(){
image(video,0,0,200,150);
Modelloaded.classify(video,gotResult);
}
function gotResult(error,results){
if(error){
console.error(error);
}
else{
document.getElementById("result_object_name").innerHTML=results[0].label;
document.getElementById("result_object_accuracy").innerHTML=results[0].confidence.toFixed(3);
}
}