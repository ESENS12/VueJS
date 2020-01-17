const canvas = document.getElementById("jsCanvas");
const ctx = canvas.getContext("2d");
ctx.strokeStyle="#2c2c2c";
ctx.lineWidth = 2.5;
canvas.width = 700;
canvas.height = 700;

let x;
let y;
let painting = false;

function stopPainting(){

}

function startPainting(){

}

function onMouseMove(event){
    x = event.offsetX;
    y = event.offsetY;
    if(!painting){
        ctx.beginPath();
        ctx.moveTo(x,y);
    }else{
        ctx.lineTo(x,y);
        ctx.stroke();
    }
}

function onMouseDown(event){
    painting = true;
    console.log(x,y);
}

function onMouseUp(event){
    painting = false;
}

function onMouseLeave(event){
    painting = false;
    
}

if(canvas){
    canvas.addEventListener("mousemove",onMouseMove);
    canvas.addEventListener("mousedown",onMouseDown);
    canvas.addEventListener("mouseup",onMouseUp);
    canvas.addEventListener("moseleave",onMouseLeave);
}