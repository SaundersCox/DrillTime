


// function play(pid) {
//   // TODO document.getElementById("button1").disabled = true
//   var elem = document.getElementById(pid);
//   var pos = 0;
//   var id = setInterval(frame, 20);
//   function frame() {
//     if (pos == 350) {
//       clearInterval(id);
//     } else {
//       pos++;
//       elem.style.top = pos + "px";
//       elem.style.left = pos + "px";
//     }

//   }
//   setTimeout(function () { enableSubmit(that) }, 1000);
// }

// function myMove2() {
//   var elem = document.getElementById("p1");
//   var pos = 0;
//   var id = setInterval(frame, 5);
//   function frame() {
//     if (pos == 350) {
//       clearInterval(id);
//     } else {
//       pos++;
//       elem.style.top = pos / 2 + "px";
//       elem.style.left = pos * 2 + "px";
//     }
//   }
// }


// // Chung's Code
// var num = 1;
// var instr = "none";
// var person = { number: num, x: 0, y: 0, instrument: instr };
// var performers = [];

// //Create new performer object.
// function createP() {
//   person = { number: num, x: 0, y: 0, instrument: instr };
//   performers.push(person);
//   num++;
//   printOutput(); //Delete later
// }

// //Delete most recent performer.
// function deleteP() {
//   performers.pop(person);
//   num--;
//   printOutput(); //Delete later
// }

// //Clears all
// function clearP() {
//   performers = [];
//   num = 1;
//   printOutput(); //Delete later
// }

// //Set instrument to clarinet
// function addClarinet() {
//   instr = "clarinet";
// }
// //Set instrument to Trombone
// function addTrombone() {
//   instr = "trombone";
// }

// //Set most recently added performers instrument to inputted text.
// function setInstrument() {
//   var inst1 = document.getElementById("myText").value;
//   //instr = inst1; //Delete later
//   performers[performers.length - 1]["instrument"] = inst1;
//   printOutput(); //Delete later
// }

// //Set x coordinate
// function setX(xval) {
//   performers[performers.length - 1]["x"] = xval;
// }

// //Set y coordinate
// function setY(yval) {
//   performers[performers.length - 1]["y"] = yval;
// }

// //Print output. Delete later.
// function printOutput() {
//   var data = "";
//   for (let i = 0; i < performers.length; i++) {
//     data += " " + performers[i]["number"] + " " + performers[i]["instrument"] + ", ";
//   }
//   document.getElementById("demo").innerHTML = data;
// }


// Saunders' Code

// Initial load
let performerData = {};

$("document").ready(function () {
  // Sets the curSet and numSets variables to be displayed
  document.getElementById('setNum').textContent = curSet;
  document.getElementById('setCount').textContent = numSets;

  $("#createButton").on("click", createPerformer);
  $("#nextSetButton").on("click", nextSet);
  $("#prevSetButton").on("click", prevSet);
  $("#gotoSetButton").on("click", gotoSet);
  $("#playButton").on("click", playDrill);
  $("#stopButton").on("click", stopDrill);
  $("#saveButton").on("click", saveDrill);
  $("#loadButton").on("click", loadDrill);
  $("#clearButton").on("click", clearDrill);

  // Creates one performer on the field. The performer can be dragged to any position on the field, and its position will be recorded for that set.
  function createPerformer() {
    let pNum = numPerformers;
    performerData[pNum] = {
      id: 0
    }
    let curX = 0;
    let curY = 0;

    console.log("Create");

    $(".container").append("<div id=\"p-" + pNum + "\" class=\"animate\">" + pNum + "</div>")

    $("#p-" + pNum).draggable(
      {
        opacity: 0.7,                   // Dim the performer when dragging
        cursorAt: { top: 0, left: 0 },//Default
        appendTo: '#container',
        containment: '#container',
        scroll: true,
        // When releasing the performer, we want to record their location
        stop: function () {
          console.log(pNum)
          console.log(curSet);
          // If not on the field, snap performer back to previous location TODO
          if (curX < 0 || curX > 900 || curY < 0 || curY > 500) {

          }
          // If the performer's data has been initialized
          else if (typeof (performerData[pNum]) != "undefined") {
            performerData[pNum] = {
              id: pNum,
              name: "",
              inst: "",
              sets: [
                {
                  x: curX,
                  y: curY
                }
              ]
            }
          }
          // 
          else {
            performerData[pNum].sets[curSet].sets.x = curX;
            performerData[pNum].sets[curSet].sets.y = curY;
          }
        },
        drag: function (e, ui) {
          curX = ui.position.left;
          curY = ui.position.top;
        },
      }
    );
    numPerformers += 1;
  }


  function nextSet() {
    if (curSet < numSets) {
      curSet++;
      document.getElementById('setNum').textContent = curSet;
    }
  }
  function prevSet() {
    if (curSet > 0) {
      curSet--;
      document.getElementById('setNum').textContent = curSet;
    }
  }
  function gotoSet() {
    var set = prompt("Please enter the set number you'd like to navigate to:", "Set Num");
    if (set > numSets || set < 0) {
      window.alert("The set number you entered does not exist!");
    }
    else {
      curSet = set;
      document.getElementById('setNum').textContent = curSet;
    }
  }
  function playDrill() {

  }
  function stopDrill() {

  }
  function saveDrill() {

  }
  function loadDrill() {

  }
  function clearDrill() {

  }
})





