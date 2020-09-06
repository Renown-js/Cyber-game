class Timer{
    constructor(){}
    
    begintimeforEpisodes(){
        textSize(26);
        text(timer1, displayWidth/2+650, displayHeight/2-360); 
        if (frameCount % 60 == 0 && timer1 > 0) {
        // if the frameCount is divisible by 60, then a second has passed. it will stop at 0
         timer1--;
         } 
        if (timer1 == 0) {
            textSize(50)
            text("Reload the page to play again!",displayWidth/2-180, displayHeight-700);
             fill("red");
            
            //image(gameover,displayWidth, displayHeight,displayWidth-100,displayHeight-100);
            
        //   restart = createButton("RESTART");
        //  restart.position(displayWidth/2-700, displayHeight/2+90)
        //  restart.mousePressed(()=>{
        //     reset();
        //  })

        
        }
        
     }

}