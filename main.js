noseX = 0;
noseY = 0;
difference = 0;
LeftWristX = 0;
RightWristX = 0;

function setup()
{
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550, 550);
    canvas.position(560, 150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw()
{
    background('#50C7C7');

    document.getElementById("square_side").innerHTML = "Width and Height of a square will be = "+ difference + "px"
    fill('#4CCF94');
    stroke('#554CCF');
    square(noseX, noseY, difference);
}

function modelLoaded()
{
    console.log('Posenet Is Intialized!');
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("noseY = " + noseY);
        console.log("noseX = "+ noseX +" noseY = " + noseY);

        LeftWristX = results[0].pose.leftWrist.x;
        RightWristX = results[0].pose.rightWrist.x;
        difference = floor(LeftWristX - RightWristX);

        console.log("LeftWristX =" + LeftWristX + " RightWristX = " + RightWristX + " difference " + difference);
    }
}

