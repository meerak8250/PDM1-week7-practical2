let cat;
let catGrowW= 512;
let catGrowH= 410;

function preload() {
    cat = loadImage("assets/pallas_cat.jpg");
}

function setup(){
    imageMode(CENTER);
    createCanvas(512,410);
}

function draw(){
    background(0);
    image(cat, width/2, height/2, catGrowW, catGrowH);
    
    if(catGrowW<800 && catGrowH<650){
        catGrowW++;
        catGrowH++;
    } 
}

