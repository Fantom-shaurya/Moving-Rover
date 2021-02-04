canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
rover_image="rover.png";
rover_x=10;
rover_y=10;
Mars_background_images=["mars.jpg","Mars2.jpg","Mars3.jpg","Mars4.jpg"]
random_number=Math.floor(Math.random()*4);

rover_width=100;
rover_height=90;
background_image=Mars_background_images[random_number]
function add(){
    background_imgTag=new Image()
    background_imgTag.onload=upload_background()
    background_imgTag.src=background_image

    rover_imgTag=new Image()
    rover_imgTag.onload=upload_rover()
    rover_imgTag.src=rover_image
}
function upload_background(){
    ctx.drawImage(background_imgTag,0,0,canvas.width,canvas.height)

}
function upload_rover(){
    ctx.drawImage(rover_imgTag,rover_x,rover_y,rover_width,rover_height)

}
window.addEventListener("keydown",mykeydown)
function mykeydown(e){
keypressed=e.keyCode
console.log(keypressed)
if(keypressed=='37'){
    Left()
    console.log("Left")
    
}
if(keypressed=='38'){
    Up()
    console.log("Up")
    
}
if(keypressed=='39'){
    Right()
    console.log("Right")
    
}
if(keypressed=='40'){
    Down()
    console.log("Down")
    
}
}
function Up(){
    if(rover_y>=0)
    rover_y-=10;
    console.log("when up arrow is pressed,x= "+rover_x+" Y= "+rover_y)
upload_background();
upload_rover();

}
function Down(){
    if(rover_y<=500)
    rover_y+=10;
    console.log("when down arrow is pressed,x= "+rover_x+" Y= "+rover_y)
upload_background();
upload_rover();

}
function Right(){
    if(rover_x<=700)
    rover_x+=10;
    console.log("when right arrow is pressed,x= "+rover_x+" Y= "+rover_y)
upload_background();
upload_rover();

}
function Left(){
    if(rover_x>=0)
    rover_x-=10;
    console.log("when left arrow is pressed,x= "+rover_x+" Y= "+rover_y)
upload_background();
upload_rover();

}

