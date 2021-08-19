var nose_x = "";
var nose_y = "";
var clown_nose = "";
function preload(){
    clown_nose = loadImage("stach.png");
}
function setup(){
    canvas = createCanvas(400, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(400, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function draw(){
    image(video, 0, 0, 400, 300);
    image(clown_nose, nose_x, nose_y, 40, 40);
}
function Snapshot(){
    save('myFilterImage.png');
}
function modelLoaded(){
    console.log("Posenet initialised");
}
function gotPoses(result){
    if(result.length > 0){
        console.log(result);
        nose_x = result[0].pose.nose.x - 18;
        nose_y = result[0].pose.nose.y - 5;
        console.log("Nose x = "+ nose_x);
        console.log("Nose y = "+ nose_y);
    }
}
