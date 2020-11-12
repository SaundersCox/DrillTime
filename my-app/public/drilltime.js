let tips = [
  "Tip: Use the 'create' button to load the performers in your marching drill!",
  "there's a tip",
  "another tip"
];

// Saunders' Code

// Initial load
let performerData = {};

$("document").ready(function () {

  let rand = Math.floor(Math.random() * tips.length);

  $("#nextTipButton").on("click", nextTip);

  function randomizeTip() {
    rand = Math.floor(Math.random() * tips.length);
    $("#tipDisplay").text(tips[rand]);
  }

  function nextTip() {
    rand = (rand + 1) % tips.length;
    $("#tipDisplay").text(tips[rand]);
  }
  randomizeTip();


  // Sets the curSet and numSets variables to be displayed
  document.getElementById('setNum').textContent = curSet + 1 ;
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

    $("#innerEditor").append("<div id=\"p-" + pNum + "\" class=\"animate\">" + pNum + "</div>")

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

    $("#p-" + pNum).draggable(
      {
        opacity: 0.7,                   // Dim the performer when dragging
        cursorAt: { top: 0, left: 0 },//Default
        appendTo: '#innerEditor',
        containment: '#innerEditor',
        scroll: true,
        // When releasing the performer, we want to record their location
        stop: function () {
          console.log(pNum)
          console.log(curSet);
          // If the performer's data has been initialized
          if (typeof (performerData[pNum]) != "undefined") {
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
          $("#xPos").text(curX);
          $("#yPos").text(curY);

          // Future functionality

          // if (e.ctrlKey) {
          //   curX = curX - curX % 5
          // }
          // if (e.altKey) {

          // }

        },
      }
    );
    numPerformers += 1;
  }


  function nextSet() {
    if (curSet < numSets - 1) {
      curSet++;
      document.getElementById('setNum').textContent = curSet + 1;
      // $("#setNum").text(curSet);
    }
  }
  function prevSet() {
    if (curSet > 0) {
      curSet--;
      document.getElementById('setNum').textContent = curSet + 1;
    }
  }
  function gotoSet() {
    var set = prompt("Please enter the set number you'd like to navigate to:", "Set Num");
    if (set == null) {
      return;
    }
    else if (set > numSets || set < 1) {
      window.alert("The set number you entered does not exist!");
    }
    else {
      curSet = set - 1;
      document.getElementById('setNum').textContent = curSet + 1;
      redraw();
    }
  }
  function playDrill() {

  }
  function stopDrill() {

  }
  function saveDrill() {
    if (Object.keys(performerData).length == 0) {
      alert("No performer data has been recorded");
    }
    else {
      console.log(JSON.stringify(performerData));
    }

  }
  function loadDrill() {

  }
  function clearDrill() {
    $("#innerEditor").text("");
    $("#setNum").text("1");
    $("#setCount").text("1");
    performerData = {};
    numPerformers = 0;
    curSet = 1;
    numSets = 1;
  }

  // Redraw should be called when:
  // - a set is changed (next set, prev set, goto set)
  // - a drill is loaded
  function redraw() {
    // First wipe all HTML from the drill editor pane

    // Reference performerData for the current set
    // Build all
  }
})





