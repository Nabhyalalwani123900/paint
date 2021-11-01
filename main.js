var mouseEvent="empty";
var last_position_of_x,last_position_of_y;
radius=20;
Color="black"
width_of_line=1;
canvas=document.getElementById("myCanvas")
ctx=canvas.getContext("2d");
canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e){
    mouseEvent="mousedown";
    radius= document.getElementById("radius").value
    Color=document.getElementById("color").value
    width_of_line=document.getElementById("width").value

}
canvas.addEventListener("mouseup",my_mouseup);
function my_mouseup(e){
    mouseEvent="mouseup";
}

canvas.addEventListener("mouseleave",my_mouseleave);
function my_mouseleave(e){
    mouseEvent="mouseleave";
}

canvas.addEventListener("mousemove",my_mousemove);
function my_mousemove(e){
current_position_of_mouse_x=e.clientX-canvas.offsetLeft;
current_position_of_mouse_y=e.clientY-canvas.offsetTop;
if(mouseEvent=="mousedown"){
   ctx.beginPath();
   ctx.strokeStyle=Color;
   ctx.lineWidth=width_of_line;
   console.log("last position of X and Y coordinates= ");
   console.log("X="+last_position_of_x+"Y="+last_position_of_y);
   console.log("current position of X and Y coordinates= ");
   console.log("X="+current_position_of_mouse_x+"Y="+current_position_of_mouse_y);
   ctx.arc(current_position_of_mouse_x,current_position_of_mouse_y,radius,0,2*Math.PI)
   ctx.stroke();
}
last_position_of_mouse_x=current_position_of_mouse_x;
last_position_of_mouse_y=current_position_of_mouse_y;
} 
function cleararea(){
    ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height)
}