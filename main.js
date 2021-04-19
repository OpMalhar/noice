var mycanvas = new fabric.Canvas('o');
playerx=10;
playery=10;
blockimage_height=100;
blockimage_width=100;
player_object="";
var blockimage_object="";
function player_update()
 { fabric.Image.fromURL("player.png", function(Img)
  { player_object = Img; player_object.scaleToWidth(150);
     player_object.scaleToHeight(140);
      player_object.set({ top:playery, left:playerx });
       mycanvas.add(player_object);
     });
     }
function new_image(getimage)
 { fabric.Image.fromURL(getimage, function(Img)
  { block_imageobject = Img; block_imageobject.scaleToWidth(blockimage_width);
     block_imageobject.scaleToHeight(blockimage_height);
      block_imageobject.set({ top:playery, left:playerx });
      mycanvas.add(block_imageobject);
     });
    }
window.addEventListener("keydown",mykeydown);
function mykeydown(e){
  keypressed=e.keyCode;
  console.log(keypressed);
  if (keypressed=="38"){
    moveup();console.log("up");
    
  }
  if (keypressed=="40"){
    movedown();console.log("down");
    
  }
  if (keypressed=="37"){
    moveleft();console.log("left");
    
  }
  if (keypressed=="39"){
    moveright();console.log("right");
    
  }
  if (keypressed=="87"){
    new_image("hulkd_body.png");console.log("W");
    
  }
  if (keypressed=="71"){
    new_image("hulk_legs.png");console.log("G");
    
  }
  if (keypressed=="116"){
    new_image("hulk_right_hand.png");console.log("t");
    
  }
  if (keypressed=="89"){
    new_image("hulk_left_hand.png");console.log("Y");
    
  }
  if (keypressed=="82"){
    new_image("hulk_face.png");console.log("R");
    
  }
  if (keypressed=="85"){
    new_image("ironman_body.png");console.log("U");
    
  }
  if (keypressed=="76"){
    new_image("ironman_face.png");console.log("L");
    
  }
  if (keypressed=="68"){
    new_image("ironman_legs.png");console.log("D");
    
  }
  if (keypressed=="67"){
    new_image("ironman_left_hand.png");console.log("C");
    
  }
  if (keypressed=="65"){
    new_image("ironman_right_hand.png");console.log("A");
    
  }
  if (keypressed=="66"){
    new_image("spiderman_right_hand.png");console.log("B");
    
  }
  if (keypressed=="69"){
    new_image("spiderman_left_hand.png");console.log("E");
    
  }
  if (keypressed=="70"){
    new_image("spiderman_body.png");console.log("F");
    
  }
  if (keypressed=="72"){
    new_image("spiderman_legs.png");console.log("H");
    
  }
  if (keypressed=="73"){
    new_image("thor_face.png");console.log("I");
    
  }
  if (keypressed=="74"){
    new_image("thor_left_hand.png");console.log("J");
    
  }
  if (keypressed=="74"){
    new_image("thor_right_hand.png");console.log("J");
    
  }
} 
function moveup()
 { if(playery >=0)
   { playery = playery - blockimage_height;
     console.log("block image height = " + blockimage_height);
      console.log("When Up arrow key is pressed, X = " + playerx + " , Y = "+playery);
       mycanvas.remove(player_object);
        player_update();
       } 
}
function movedown()
 { if(playery <=500)
   { playery = playery + blockimage_height;
     console.log("block image height = " + blockimage_height);
      console.log("When down arrow key is pressed, X = " + playerx + " , Y = "+playery);
       mycanvas.remove(player_object);
        player_update();
       } 
}
function moveleft()
 {console.log("inside function");
  if(playerx >0)
   { playerx = playerx - blockimage_width;
     console.log("block image width = " + blockimage_width);
      console.log("When left arrow key is pressed, X = " + playerx + " , Y = "+playery);
       mycanvas.remove(player_object);
        player_update();
       } 
}
function moveright()
 { if(playerx <=850)
   { playerx = playerx + blockimage_width;
     console.log("block image width = " + blockimage_width);
      console.log("When right arrow key is pressed, X = " + playerx + " , Y = "+playery);
       mycanvas.remove(player_object);
        player_update();
       } 
}