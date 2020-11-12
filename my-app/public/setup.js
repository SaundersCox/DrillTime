
var drill = {
  credit: "The Dev Team",
  name: "Test"
};

// Initial variables
var numPerformers = 0;
var curSet = 0
var numSets = 2;
// Instruments: Trumpet, Trombone, Tuba, Clarinet, Alto Sex, Tenor Sax, Piccolo, Snare, Bass, Cymbal

// Sets the curSet and numSets variables to be displayed
document.getElementById('setNum').textContent = curSet;
document.getElementById('setCount').textContent = numSets;

// Map of performer name to ID
var performerMapSample = {};
performerMapSample["Alice"] = 0;

// All performer info
var performersSample = [
  {
    id: 0,
    name: "Alice",
    inst: "Piccolo",
    sets: [
      {
        x: 10,
        y: 20,
      }
      , {
        x: 20,
        y: 40
      }
    ]
  },
  {
    id: 1,
    name: "Brian",
    inst: "Clarinet",
    sets: [
      {
        x: 10,
        y: 20,
      }
      , {
        x: 20,
        y: 40
      }
    ]
  },
  {
    id: 2,
    name: "Chris",
    inst: "Alto Sax",
    sets: [
      {
        x: 10,
        y: 20,
      }
      , {
        x: 20,
        y: 40
      }
    ]
  },
  {
    id: 3,
    name: "David",
    inst: "Tenor Sax",
    sets: [
      {
        x: 10,
        y: 20,
      }
      , {
        x: 20,
        y: 40
      }
    ]
  },
  {
    id: 4,
    name: "Erin",
    inst: "Trumpet",
    sets: [
      {
        x: 10,
        y: 20,
      }
      , {
        x: 20,
        y: 40
      }
    ]
  },
  {
    id: 5,
    name: "Faith",
    inst: "Trombone",
    sets: [
      {
        x: 10,
        y: 20,
      }
      , {
        x: 20,
        y: 40
      }
    ]
  },
  {
    id: 6,
    name: "George",
    inst: "Tuba",
    sets: [
      {
        x: 10,
        y: 20,
      }
      , {
        x: 20,
        y: 40
      }
    ]
  },
  {
    id: 7,
    name: "Harris",
    inst: "Bass Drum",
    sets: [
      {
        x: 10,
        y: 20,
      }
      , {
        x: 20,
        y: 40
      }
    ]
  },
  {
    id: 8,
    name: "Irene",
    inst: "Snare",
    sets: [
      {
        x: 10,
        y: 20,
      }
      , {
        x: 20,
        y: 40
      }
    ]
  },
  {
    id: 9,
    name: "John",
    inst: "Cymbal",
    sets: [
      {
        x: 10,
        y: 20,
      }
      , {
        x: 20,
        y: 40
      }
    ]
  }
]