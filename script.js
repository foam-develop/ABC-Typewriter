const log = document.getElementById('log');
const content = document.getElementById('content');
const input = document.getElementById('input');
const about = document.getElementById('about');
const key = document.getElementById('key');
const clear = document.getElementById('clear');
const aboutTxt = document.getElementById('about-txt');
const keyTxt = document.getElementById('key-txt');
const navTxts = document.querySelectorAll('.nav-txt');
const logContainer = document.getElementById('log-container');
input.addEventListener("input", updateValue);
var backspace = false;
var keyTyped = false;
const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", " ", "Backspace", "Enter", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

// var i = 0;
// var txt = 'you can use lowercase a-z, SPACE, BACKSPACE and ENTER keys to type your message. no numbers or special characters.';
// var speed = 50;

// function typeWriter() {
//     if (i < txt.length) {
//       document.getElementById("key").innerHTML += txt.charAt(i);
//       i++;
//       setTimeout(typeWriter, speed);
//     } else {
//         clear.style.display = "block";
//     }
//   }

// setTimeout(typeWriter, 1650);

var j = 0;
var title = 'ABC da Cana Typewriter';
var speedTitle = 75;

function typeWriterTitle() {
    if (j < title.length) {
      document.getElementById("title").innerHTML += title.charAt(j);
      j++;
      setTimeout(typeWriterTitle, speedTitle);
    }
  }

typeWriterTitle();

clear.onclick = function () {
    logContainer.innerHTML = "";
    log.innerHTML = "";  
    input.value = "";
    string = [];
}


function toggle(id) {
    navTxts.forEach(navtxt => navtxt.style.display = "none");
    document.getElementById(id + "-txt").style.display = "block";
}
// about.onclick = function () {
//     aboutTxt.style.display = "block";
// }

// key.onclick = function () {
//     keyTxt.style.display = "block";
// }

function addImage(i, container) {
    const image = document.createElement("img");
    image.setAttribute("src", "img/" + i + ".jpg");
    image.setAttribute("class", "img");
    container.appendChild(image);
    return image;
}

function addSpace(s, container) {
    const space = document.createElement("div");
    space.setAttribute("class", "space");
    container.appendChild(space);
}

input.addEventListener("keydown", function(e) {
    if (alphabet.includes(e.key)) {
        keyTyped = true;
        if (e.key === "Backspace") {
            backspace = true;
        } else {
            backspace = false;
        }
    } else {
        keyTyped = false;
    }
});

function updateValue(e) {
    if (keyTyped) {
        var string = e.target.value.split("");
        if (string.length >= 0) {
            var lastKey = string[string.length-1];
            // console.log("last key is " + lastKey);
            if (backspace) {
                logContainer.removeChild(logContainer.lastElementChild);
            } else if (lastKey === " ") {
                addSpace(lastKey, logContainer);
            } else if (lastKey === "\n") {
                const enter = document.createElement("br");
                logContainer.appendChild(enter);
            } else if (alphabet.includes(lastKey)) {
                addImage(lastKey, logContainer);
            }
            console.log(string);
        }
    }
}

function restrict(x) {
    x.value = x.value.replace(/[^a-z\s]/i, "");
    console.log("restrict works");
}
