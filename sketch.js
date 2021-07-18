const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg,bg2,bg3,bg4,bg5,bg6,bg7,bg8,bg9,bg10,bg11,bg12 ;

function preload() 
{
    // create getBackgroundImg( ) here
    bg = loadImage("sunrise1.png");
    bg2 = loadImage("sunrise2.png");
    bg3 = loadImage("sunrise3.png");
    bg4 = loadImage("sunrise4.png");
    bg5 = loadImage("sunrise5.png");
    bg6 = loadImage("sunrise6.png");
    bg7= loadImage("sunset7.png");
    bg8 = loadImage("sunset8.png");
    bg9 = loadImage("sunset9.png");
    bg10 = loadImage("sunset10.png");
    bg11 = loadImage("sunset11.png");
    bg12 = loadImage("sunset12.png");

}

function setup()
{
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw()
{

    // add condition to check if any background image is there to add
    if(backgroundImg)
    {
      background(backgroundImg)  
    }

    Engine.update(engine);

    // write code to display time in correct format here
    textSize(30);
    fill("black");
    if(hour>=12){
        text("TIME :" + hour%12+"PM",50,100)
    }
else if(hour == 0){
    text("TIME : 12 AM" ,100,100)
}
else{text("TIME :" + hour%12+"AM",50,100)}

}

async function getBackgroundImg()
{

    // write code to fetch time from API
    var response= await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");

    //change the data in JSON format
    var responseJson= await response.json()
    var datetime= responseJson.datetime
    console.log("Time",responseJson)

    // write code slice the datetime
    hour = datetime.slice(11,13);

    console.log(hour);

    // add conditions to change the background images from sunrise to sunset
    if(hour>=04&&hour<=06)
    {
        bg="sunrise1.png";
    }
    else if(hour>=06&&hour<=08)
    {
        bg2="sunrise2.png";
    }
    else if(hour=08&&hour<=10)
    {
        bg3="sunrise3.png";
    }
    else if(hour=10&&hour<=12)
    {
        bg4="sunrise4.png";
    }
    else if(hour=12&&hour<=14)
    {
        bg5="sunrise5.png";
    }
    else if(hour=14&&hour<=16)
    {
        bg6="sunrise6.png";
    }
    else if(hour=16&&hour<=18)
    {
        bg7="sunset7.png";
    }
    else if(hour=18&&hour<=20)
    {
        bg8="sunset8.png";
    }
    else if(hour=20&&hour<=22)
    {
        bg9="sunset9.png";
    }
    else if(hour=22&&hour<=24)
    {
        bg10="sunset10.png";
    }
    else if(hour=00&&hour<=02)
    {
        bg11="sunset11.png";
    }
    else if(hour=02&&hour<=04)
    {
        bg12="sunset12.png";
    }


    //load the image in backgroundImg variable here
    backgroundImg = loadImage(bg);
    console.log("backgroundImage", backgroundImg); 

}
