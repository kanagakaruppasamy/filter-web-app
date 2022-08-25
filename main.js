noseX =0;
noseY =0;

function preload()
{
    mustache = loadImage('https://i.postimg.cc/zDhQv1G1/mustache.png')
}

function setup()
{
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);

}

function draw()
{
    image(video, 0, 0, 300, 300);
    fill(255,0,0);
    stroke(255,0,0);
    image(nusatche, noseX, noseY, 30, 30)
}

function take_snapshot()
{
    save('myFilterImage.png');
}

function modelLoaded()
{
    console.log('PoseNet Is Initialized');
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        noseX = result[0].pose.nose.x;
        noseY = result[0].pose.nose.x
        console.log(results);
        console.log("nose x = " +results[0].pose.nose.x)
        console.log("nose y = " +results[0].pose.nose.y)
    }
}