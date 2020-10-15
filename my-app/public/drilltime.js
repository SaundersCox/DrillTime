// cancel action on a function while it's active
function myMove() {
    var elem = document.getElementById("p0");   
    var pos = 0;
    var id = setInterval(frame, 5);
    function frame() {
      if (pos == 350) {
        clearInterval(id);
      } else {
        pos++; 
        elem.style.top = pos + "px"; 
        elem.style.left = pos + "px"; 
      }
    }
    
  }
  
  function myMove2() {
    var elem = document.getElementById("p1");   
    var pos = 0;
    var id = setInterval(frame, 5);
    function frame() {
      if (pos == 350) {
        clearInterval(id);
      } else {
        pos++; 
        elem.style.top = pos/2 + "px"; 
        elem.style.left = pos*2 + "px"; 
      }
    }
  }