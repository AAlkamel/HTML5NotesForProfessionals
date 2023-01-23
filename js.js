
let state = false
function myFunction(){
  if(!state){
    document.querySelectorAll('.jsfun').innerHTML = 'this text from javaScript';
    state = true
  }else{
    document.querySelectorAll('.jsfun').innerHTML = 'Run Code';
    state = false

  }
  
}

// canvas ////////////////////////////////////////////////////////////////////////

var ctx = document.getElementById("myCanvas").getContext("2d");
// now we can refer to the canvas's 2D layer context using `ctx`
ctx.fillStyle = "#f00";
ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height); // x, y, width, height
ctx.fillStyle = "#fff";
ctx.fillText("My red canvas with some black text", 24, 32); // text, x, y