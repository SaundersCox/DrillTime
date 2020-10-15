// cancel action on a function while it's active
function load() {
  let sampleInput = { id: 0, inst: "Trumpet" }
console.log(sampleInput)
}


function myMove(pid) {
  document.getElementById("button1").disabled = true
  var elem = document.getElementById(pid);
  var pos = 0;
  var id = setInterval(frame, 20);
  function frame() {
    if (pos == 350) {
      clearInterval(id);
    } else {
      pos++;
      elem.style.top = pos + "px";
      elem.style.left = pos + "px";
    }
  }
  setTimeout(function () { enableSubmit(that) }, 1000);
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
      elem.style.top = pos / 2 + "px";
      elem.style.left = pos * 2 + "px";
    }
  }
}