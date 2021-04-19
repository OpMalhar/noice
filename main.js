var mycanvas = new fabric.Canvas('o');
playerx=10;
playery=10;
blockimage_height=30;
blockimage_width=30;
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
    new_image("wall.jpg");console.log("W");
    
  }
  if (keypressed=="71"){
    new_image("ground.png");console.log("G");
    
  }
  if (keypressed=="116"){
    new_image("trunk.jpg");console.log("t");
    
  }
  if (keypressed=="89"){
    new_image("yellow_wall.png");console.log("Y");
    
  }
  if (keypressed=="82"){
    new_image("roof.jpg");console.log("R");
    
  }
  if (keypressed=="85"){
    new_image("unique.png");console.log("U");
    
  }
  if (keypressed=="76"){
    new_image("light_green.png");console.log("L");
    
  }
  if (keypressed=="68"){
    new_image("dark_green.png");console.log("D");
    
  }
  if (keypressed=="67"){
    new_image("cloud.jpg");console.log("C");
    
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