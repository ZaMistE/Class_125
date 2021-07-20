noseX = 0;
noseY = 0;
diffrence = 0;
rigthWristX = 0;
leftWristX = 0;


function setup(){
    video = createCapture(VIDEO);
    video.size(550,500);
    canvas = createCanvas(550,550);
    canvas.position(560,150);

    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose', gotPoses);
}
function modelLoaded(){
    console.log("poseNet is initialized");
}
function gotPoses(results){
    if (results.length >0){
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);

        console.log("NoseX = "+ noseX + " noseY = " + noseY);
        console.log("leftWristX = "+ leftWristX + " rightWristX = " + rightWristX);
    }

}


function draw(){
    background("#38F3C0");
    document.getElementById("square_side").innerHTML = "width and height of a square will be = " + difference + "px";    
    fill ('#f90093');
    stroke ('#f90093');
    square(noseX, noseY, difference);

}
