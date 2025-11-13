let blueSky;
let plane;
let x = 0-300;

function preload(){
    blueSky = loadImage("assets/blue-sky.jpg");
    plane = loadImage("assets/plane.png");
}

function setup(){
    imageMode(CENTER);
    createCanvas(blueSky.width, blueSky.height);
}

function draw(){
    background(0);
    image(blueSky, width/2, height/2);
    SmallPlaneMove();
    BigPlaneMove();
}

function SmallPlaneMove(){
    image(plane,x,height/2,150,100);
    x=x+2;
    if( x> width+200){
        x=0
    }
}

function BigPlaneMove(){
    image(plane,x, height/2, 300,200);
    x=x+1;
    if( x> width+300){
        x=0
    }
}