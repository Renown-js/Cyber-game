
var Beginform, database,episode1,episode2,episode3,episode4,end,backimage,restartimg,restart,gameoverimg,gameover,hintbot,mysound;
var timer1 = 100;
var score = 0;
var time;

function preload(){
    backimage= loadImage("image.png");
    restartimg = loadImage("reset.png");
    gameover = loadImage("gameover.png");
    //mysound = loadSound("music2.mp3");
    themeSound = loadSound("theme.mp3"); 
}

function setup() {
    console.log("abcd")
    
    database = firebase.database();
    var canvas = createCanvas(displayWidth,displayHeight);
    Beginform = new Beginning();
    episode1 = new Episode1();
    episode2 = new Episode2();
    episode3 = new Episode3();
    episode4 = new Episode4();
    end = new End();
    time = new Timer();
}
function draw() {
    background(backimage);
    
themeSound.play();

   //mysound.play();
    Beginform.display();
    time.begintimeforEpisodes();
        textSize(26);
        text(score, displayWidth/2+400, displayHeight/2-360); 
        textSize(26);
        text("SCORE:", displayWidth/2+300, displayHeight/2-360); 
        textSize(26);
        text("TIMER:", displayWidth/2+550, displayHeight/2-360);         
 }
  