nose_x=0;
nose_y=0;
function preload() {
    butterfly=loadImage("https://i.postimg.cc/ZKyN780R/Butterfly.png");
}
function setup() {
    canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    posenet=ml5.poseNet(video,modelLoaded);
    posenet.on("pose",gotPoses);
    
}
function take_Snapshot() {
    save("filtered_img.png");
}
function draw() {
    image(video,0,0,300,300);
    image(butterfly,nose_x,nose_y,140,100);

}
function modelLoaded() {
    console.log("PoseNet Model Loaded");
}
function gotPoses(results) {
    if (results.length>0) {
        console.log(results);
        nose_x=results[0].pose.nose.x-68;
        nose_y=results[0].pose.nose.y-130;
        console.log("Head X Axis = "+nose_x);
        console.log("Head Y Axis = "+nose_y);
    }
}