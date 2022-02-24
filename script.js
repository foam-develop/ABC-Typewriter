const content = document.getElementById('content');
const input = document.getElementById('input');
const about = document.getElementById('about');
const key = document.getElementById('key');
const clear = document.getElementById('clear');
const changeFont = document.getElementById('change-font');
const aboutTxt = document.getElementById('about-txt');
const keyTxt = document.getElementById('key-txt');
const navTxts = document.querySelectorAll('.nav-txt');
const logContainer = document.getElementById('log-container');
input.addEventListener("input", updateValue);
var backspace = false;
var keyTyped = false;
let bwFont = false;
const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", " ", "Backspace", "Enter", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

const imgTxts = {
    a: "ABC da Cana, 2014 is a photo essay which shows workers from the TABU refinery performing the letters of the alphabet using sugar cane, during their break from working in the fields.",
    b: "By performing the alphabet, the artist, Jonathas de Andrade is commenting on...",
    c: "Composition: Each photo shows the labourers in the center, bending and stretching themselves to manipulate the sugar cane into shape.",
    d: "De Andrade typically stages social experiments on locations where such power dynamics are at play. For the works in this series, he collaborated with labourers from a sugar refinery.",
    e: "Experience Jonathas de Andrade artistic practice yourself in our free Walk-in Workshop, every Sunday between 14:00 - 16:00.",
    f: "Foam Amsterdam is currently exhibiting Next Level: Jonathas de Andrade <span class='italic'>Staging Resistance</span>.",
    g: "Global production of sugarcane is estimated at almost 2 billion tonnes a year, with Brazil taking up almost 40% of this production.",
    h: "H",
    i: "Inspiration came from the 1957 typography of Luís Jardim for Brasil Açucareiro, a trade magazine published by the Brazilian Institute for Alcohol and Sugar.",
    j: "Jonathas de Andrade is a Brazilian artist who addresses issues of social, economic and racial inequality that are – and have historically been – at the core of Brazilian politics.",
    k: "K",
    l: "L",
    m: "M",
    n: "Next Level is an exhibition series that introduces artists who are making radical use of photography. Jonathas de Andrade is the current Next Level artist on display in Foam Photography Museum Amsterdam.",
    o: "Other works in the exhibition Next Level <span class='italic'>Staging Resistance</span> include ",
    p: "Photo challenge: think of type of food that you like or you perhaps currently have at home, and re-create the alphabet using only this type of food. Think carefully about the composition and use of colour: what background do you use so your letters can stand out and be read easily? How do you arrange the letters on this background? Take a photo of each letter and share using #foamabc.",
    q: "Question: how much sugar have you consumed today? Can you find out where this came from?",
    r: "Raw materials, like sugar, were traded against manufactured goods and enslaved people, thus forming the colonial 'triangle trade'.",
    s: "Sugar cane is the raw material for refined sugar. It has been an important Brazilian export product since colonial times, and has a dark history of slavery, land reclamation through logging, and unequal distribution of natural resources.",
    t: "T",
    u: "U",
    v: "Visit us Next Level: Jonathas de Andrade <span class='italic'>Staging Resistance</span> at Foam Photography Museum Amsterdam (Keizersgracht 609, Amsterdam).",
    w: "What stands out in this series, is the use of colour: The mostly blue work costumes constrast with the brown-beige background of the sugar cane fields, making the men stand out from the background.",
    x: "X",
    y: "Y",
    z: "Z",
}
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

function clearTypewriter() {
    logContainer.innerHTML = "";
    input.value = "";
    string = [];
}

function toggleFont() {
    if (bwFont === false) {
        bwFont = true;
        changeFont.innerHTML = "Change font to photo"
    } else {
        bwFont = false;
        changeFont.innerHTML = "Change font to black and white"
    }
    changeImg();
}

function toggleNavTxt(id) {
    let el = document.getElementById(id + "-txt");
    navTxts.forEach(navtxt => { 
        navtxt.style.display = "none"
        navtxt.classList.remove("visible");
    });
    el.style.display = "block";
    el.classList.add("visible");
}

function addImage(i, container) {
    const image = document.createElement("img");
    image.setAttribute("class", "img " + i);
    if (bwFont) {
        image.setAttribute("src", "img-bw/" + i + "-bw.png");
    } else {
        image.setAttribute("src", "img/" + i + ".jpg");
    }
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
            if (backspace) {
                logContainer.removeChild(logContainer.lastElementChild);
            } else if (lastKey === " ") {
                addSpace(lastKey, logContainer);
            } else if (lastKey === "\n") {
                const enter = document.createElement("br");
                logContainer.appendChild(enter);
            } else if (alphabet.includes(lastKey)) {
                addImage(lastKey, logContainer);
                hover(lastKey);
            }
            console.log(string);
        }
    }
}

function restrict(x) {
    x.value = x.value.replace(/[^a-z\s]/i, "");
    console.log("restrict works");
}

function hideNavTxts() {
    if (document.querySelector(".visible")) {    
        document.querySelector(".visible").style.display = "none";
    }
}

function hover(input) {
    document.querySelectorAll("." + input).forEach(image => image.addEventListener("mouseover", function() {
        toggleNavTxt("img");
        var txt = imgTxts[input];
        document.getElementById("img-txt").innerHTML = txt;
    }));
    document.querySelectorAll("." + input).forEach(image => image.addEventListener("mouseout", function() {
        document.getElementById("img-txt").innerHTML = "";
    }));
}