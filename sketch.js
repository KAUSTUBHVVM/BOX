var canvas;
var music;
var pad1;
var pad2;
var pad3;
var pad4;
var box;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    
    pad1 = createSprite(100,500,150,20);
    pad2 = createSprite(300,500,150,20);
    pad3 = createSprite(500,500,150,20);
    pad4 = createSprite(700,500,150,20);

    box = createSprite(mouseX,mouseY,20,20);
    

}
function draw() {
    background(0);
    //create edgeSprite
    pad1.display();
    pad2.display();
    pad3.display();
    pad4.display();

    box.display();

    
 
    if(box.isTouching(pad1))
    {
        pad1.shapeColor("red");
    }
    if(box.isTouching(pad2))
    {
        pad2.shapeColor("green");
    }
    if(box.isTouching(pad3))
    {
        pad3.shapeColor("blue");
    }
    if(box.isTouching(pad4))
    {
        pad1.shapeColor("purple");
    }
 }
