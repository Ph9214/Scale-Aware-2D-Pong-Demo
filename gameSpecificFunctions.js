//Functions that make things happen in the game, but dont relate to other games (directly)
//Notation for the atom extension custom-folds to allow collapsing code.


//<editor-fold> Mass Operation functions

  function resetGame() {
    ballX = 50;
    ballY = 50;
  }


  function updateGameVariables() {
    if ((ballX+ballDiameterPercent) >= 100 || ballX <= 0){ //We dont factor "diameter" because the ball (whick is a square) origonates on the left (I could fix this with a new function)
      //Reverse the ball speed (equating to a bounce)
      ballSpeed *= -1
      console.log("Bounce");
    }
    ballX += fFM(ballSpeed,framesPerSecond);
  }


  function drawGameCanvas() {

    //Update the game variables BEFORE rendering
    updateGameVariables();

    //Redraw Background
    Rect('black',0,0,canvas.width,canvas.height);

    //Ball
    canvasContext.fillStyle = 'pink';
    canvasContext.fillRect(cFS(ballX,'x',false),	cFS(ballY,'y',false),	cFS(ballDiameterPercent,'x',true),	cFS(ballDiameterPercent,'y',true));


    //Player 1
    Rect(
      'grey' ,
      cFS(0+(paddleEdgeOffsetPercent),'x',false) ,
      cFS(50-integerCenterCalc(paddleHeightPercent),'y',false) ,
      cFSa(paddleWidthPercent,paddleHeightPercent,true).x ,
      cFSa(paddleWidthPercent,paddleHeightPercent,true).y
    );

    //Player 2
    Rect(
      'grey' ,
      cFS(100+(-paddleEdgeOffsetPercent),'x',false)+(-cFS(paddleWidthPercent,'x',true)) ,
      cFS(50-integerCenterCalc(paddleHeightPercent),'y',false) ,
      cFSa(paddleWidthPercent,paddleHeightPercent,true).x ,
      cFSa(paddleWidthPercent,paddleHeightPercent,true).y
    );

  }

//</editor-fold> Mass Operation functions

console.log("Imported gsf");
