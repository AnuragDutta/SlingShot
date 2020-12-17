const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1, pig1;
var bgimg, backgroundImage


function preload(){
}




function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    
    ground = new Ground(600,height,1200,20)
    platform = new Ground(980,260,200,20)

    pig1 = new Pig(930, 235);
    pig3 = new Pig(980, 235);
    pig4 = new Pig(1030, 235);
    pig6 = new Pig(975, 35);
    pig7 = new Pig(1000, 135);
    pig8 = new Pig(950, 135);

    pig9 = new Pig(730, 335);
    pig10 = new Pig(780, 335);
    pig11 = new Pig(830, 335);
    pig12 = new Pig(775, 135);
    pig13 = new Pig(800, 235);
    pig14 = new Pig(750, 250);

    bird = new Bird(265,50);

    sling = new Catapault(bird.body,{x : 300, y : 230})

}

function draw(){
    background(0);

    Engine.update(engine);
    ground.display();
    pig1.display();
    platform.display()
    pig3.display();
    pig4.display();
    pig6.display();
    pig7.display();
    pig8.display();

    pig9.display();
    pig10.display();
    pig11.display();
    pig12.display();
    pig13.display();
    pig14.display();

    bird.display()
    sling.display()
}

function keyPressed(){
    if(keyCode===32){
        bird.trajectory = []
        sling.attach(bird.body)
    }
}

function mouseDragged(){
    Matter.Body.setPosition(bird.body , {x:mouseX, y:mouseY})
}

function mouseReleased(){
    sling.fly()
}

async function getbackgroundImage(){
    var response = await fetch ('https://worldtimeapi.org/api/timezone/Asia/Tokyo')
    var responseJSON = await response.json()
    var hour = responseJSON.datetime.slice(11,13)
    console.log(hour)
    if(hour >= 06 && hour<= 19){
        bgimg = "sprites/bg.png"
    }
    else{
        bgimg = "sprites/bg2.jpg"
    }
backgroundImage = loadImage(bgimg)
}
