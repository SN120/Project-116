function preload(){
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
}
function Snapshot(){
    save('myFilterImage.png');
}
function modelLoaded(){
    console.log("Posenet started");
}
function gotPoses(result){
    if(result.length > 0){
        console.log(result);
        console.log("Nose x = "+ result[0].pose.nose.x);
        console.log("Nose y = "+ result[0].pose.nose.y);
    }
}