// banks - keycode, keytrigger, id, and sound url

const bankOne = [
  {
    keyCode: 81,
    keyTrigger: "Q",
    id: "Heater-1",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
  },
  {
    keyCode: 87,
    keyTrigger: "W",
    id: "Heater-2",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"
  },
  {
    keyCode: 69,
    keyTrigger: "E",
    id: "Heater-3",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"
  },
  {
    keyCode: 65,
    keyTrigger: "A",
    id: "Heater-4",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"
  },
  {
    keyCode: 83,
    keyTrigger: "S",
    id: "Clap",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"
  },
  {
    keyCode: 68,
    keyTrigger: "D",
    id: "Open-HH",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"
  },
  {
    keyCode: 90,
    keyTrigger: "Z",
    id: "Kick-n-Hat",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"
  },
  {
    keyCode: 88,
    keyTrigger: "X",
    id: "Kick",
    url: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"
  },
  {
    keyCode: 67,
    keyTrigger: "C",
    id: "Closed-HH",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
  }
];

const bankTwo = [
  {
    keyCode: 81,
    keyTrigger: "Q",
    id: "Chord-1",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3"
  },
  {
    keyCode: 87,
    keyTrigger: "W",
    id: "Chord-2",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3"
  },
  {
    keyCode: 69,
    keyTrigger: "E",
    id: "Chord-3",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3"
  },
  {
    keyCode: 65,
    keyTrigger: "A",
    id: "Shaker",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3"
  },
  {
    keyCode: 83,
    keyTrigger: "S",
    id: "Open-HH",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3"
  },
  {
    keyCode: 68,
    keyTrigger: "D",
    id: "Closed-HH",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3"
  },
  {
    keyCode: 90,
    keyTrigger: "Z",
    id: "Punchy-Kick",
    url: "https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3"
  },
  {
    keyCode: 88,
    keyTrigger: "X",
    id: "Side-Stick",
    url: "https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3"
  },
  {
    keyCode: 67,
    keyTrigger: "C",
    id: "Snare",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3"
  }
];

// bank selector
let bank = bankOne;

// target bank input
document
  .querySelector("#bank label input")
  .addEventListener("click", changeBank);

function changeBank(e) {
  // change bank variable
  if (bank === bankOne) {
    bank = bankTwo;
  } else {
    bank = bankOne;
  }
  // set buttons with new bank info
  setbtns();
}

// Select all drum pads
var btns = document.querySelectorAll(".drum-pad");

// Set buttons on load
setbtns();

function setbtns() {
  // Work with each pad
  for (let i = 0; i < btns.length; i++) {
    // button and bank variables
    let btn = btns[i];
    let bnk = bank[i];

    // set button attribute, text, and event handler
    btn.innerHTML = bnk.keyTrigger;
    btn.setAttribute("id", bnk.id);
    btn.addEventListener("click", clicksound);

    // put an audio element inside the button with: src, class and id
    var audio = document.createElement("audio");
    audio.setAttribute("src", bnk.url);
    audio.setAttribute("class", "clip");
    audio.setAttribute("id", bnk.keyTrigger);
    btn.appendChild(audio);
  }
}

// When a drum pad is clicked
function clicksound(e) {
  e.preventDefault();
  // Display the pad id
  document.getElementById("sound").innerHTML = e.target.id;
  // select the audio element by the button id's audio child
  let clip = document.querySelector(`#${e.target.id} audio`);
  // play the audio
  clip.play();
}

// keyboard listener
document.body.addEventListener("keydown", keysound);
// keyboard event handler
function keysound(e) {
  // loop through objects in the bank
  for (obj in bank) {
    // if the object has the same keycode as the one pressed
    if (bank[obj].keyCode === e.keyCode) {
      // change the display to the button id
      document.getElementById("sound").innerHTML = bank[obj].id;
      // select that clip
      let clip = document.querySelector(`#${bank[obj].id} audio`);
      // play the clip
      clip.play();
    }
  }
}
