var numPerformers = 10;
var curSet = 1
var numSets = 2;
var drill = {
  sets:
    [
      {
        id: 1,
        x: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
        y: [10, 10, 10, 10, 10, 10, 10, 10, 10, 10]
      },
      {
        id: 2,
        x: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
        y: [10, 10, 10, 10, 10, 10, 10, 10, 10, 10]
      }
    ]
};

// cancel action on a function while it's active
function load() {
  let sampleInput = { id: 0, inst: "Trumpet" }
  console.log(sampleInput)
}


function play(pid) {
  // TODO document.getElementById("button1").disabled = true
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


// Chung's Code
var num = 1;
var instr = "none";
var person = { number: num, x: 0, y: 0, instrument: instr };
var performers = [];

//Create new performer object.
function createP() {
  person = { number: num, x: 0, y: 0, instrument: instr };
  performers.push(person);
  num++;
  printOutput(); //Delete later
}

//Delete most recent performer.
function deleteP() {
  performers.pop(person);
  num--;
  printOutput(); //Delete later
}

//Clears all
function clearP() {
  performers = [];
  num = 1;
  printOutput(); //Delete later
}

//Set instrument to clarinet
function addClarinet() {
  instr = "clarinet";
}
//Set instrument to Trombone
function addTrombone() {
  instr = "trombone";
}

//Set most recently added performers instrument to inputted text.
function setInstrument() {
  var inst1 = document.getElementById("myText").value;
  //instr = inst1; //Delete later
  performers[performers.length - 1]["instrument"] = inst1;
  printOutput(); //Delete later
}

//Set x coordinate
function setX(xval) {
  performers[performers.length - 1]["x"] = xval;
}

//Set y coordinate
function setY(yval) {
  performers[performers.length - 1]["y"] = yval;
}

//Print output. Delete later.
function printOutput() {
  var data = "";
  for (let i = 0; i < performers.length; i++) {
    data += " " + performers[i]["number"] + " " + performers[i]["instrument"] + ", ";
  }
  document.getElementById("demo").innerHTML = data;
}

// Drag and drop code
ball.onmousedown = function (event) {
  // (1) prepare to moving: make absolute and on top by z-index
  ball.style.position = 'absolute';
  ball.style.zIndex = 1000;

  // move it out of any current parents directly into body
  // to make it positioned relative to the body
  document.body.append(ball);

  // centers the ball at (pageX, pageY) coordinates
  function moveAt(pageX, pageY) {
    ball.style.left = pageX - ball.offsetWidth / 2 + 'px';
    ball.style.top = pageY - ball.offsetHeight / 2 + 'px';
  }

  // move our absolutely positioned ball under the pointer
  moveAt(event.pageX, event.pageY);

  function onMouseMove(event) {
    moveAt(event.pageX, event.pageY);
  }

  // (2) move the ball on mousemove
  document.addEventListener('mousemove', onMouseMove);

  // (3) drop the ball, remove unneeded handlers
  ball.onmouseup = function () {
    document.removeEventListener('mousemove', onMouseMove);
    ball.onmouseup = null;
  };

};