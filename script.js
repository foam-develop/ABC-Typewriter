const log = document.getElementById('log');
const click = document.getElementById('clickhere');
const container = document.getElementById('container');
const input = document.getElementById('input');
const clear = document.getElementById('clear');
const logContainer = document.getElementById('log-container');
document.addEventListener('keydown', logKey);
var string = [];
var keyTyped = false;
const alphabet = ["a", "A", "b", "B", "c", "C", "d", "D", "e", "E", "", "f", "F", "g", "G", "h", "H", "i", "I", "j", "J", "k", "K", "l", "L", "m", "M", "n", "N", "o", "O", "p", "P", "q", "Q", "r", "R", "s", "S", "t", "T", "u", "U", "v", "V", "w", "W", "x", "X", "y", "Y", "z", "Z", " "];
const specialChars = ["Backspace", "Enter"];

var i = 0;
var txt = 'you can use lowercase a-z, SPACE, BACKSPACE and ENTER keys to type your message. no numbers or special characters.';
var speed = 50;

function typeWriter() {
    if (i < txt.length) {
      document.getElementById("key").innerHTML += txt.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    } else {
        click.style.display = "block";
        clear.style.display = "block";
    }
  }

setTimeout(typeWriter, 1650);

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

click.onclick = function () { 
    click.style.display = "none";
}; 

input.onclick = function () { 
    input.innerHTML = "";
}; 

clear.onclick = function () {
    logContainer.innerHTML = "";
    log.innerHTML = "";  
    input.innerHTML = "";
    string = [];
    click.style.display = "none";
}

function checkIfLetter(key) {
    if (alphabet.includes(key)) {
        // key = key.toLowerCase();
        keyTyped = true;
        console.log(key + keyTyped);
    } else if (specialChars.includes(key)) {
        keyTyped = true;
    } else {
        keyTyped = false;
        console.log(key + keyTyped);
    }
}   

function addImage(i, container) {
    const image = document.createElement("img");
    image.setAttribute("src", i + ".png");
    image.setAttribute("class", "img");
    container.appendChild(image);
    return image;
}

function addSpace(s, container) {
    const space = document.createElement("div");
    space.setAttribute("class", "space");
    container.appendChild(space);
}

function logKey(e) {
    checkIfLetter(e.key);
    click.style.display = "none";
    if (keyTyped) {
        if (e.key === "Backspace") {
            if (string.length > 0) {
                string.pop();
                logContainer.removeChild(logContainer.lastElementChild);
            }
        } else if (e.key === " ") {
            addSpace(e.key, logContainer);
            string.push(e.key);
        } else if (e.key === "Enter") {
            const enter = document.createElement("br");
            logContainer.appendChild(enter);
            string.push("<br/>");
        } else {
            addImage(e.key, logContainer);
            console.log(string);
            string.push(e.key);
        }
        // log.innerHTML = string.join('');
    }
}


