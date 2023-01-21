
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