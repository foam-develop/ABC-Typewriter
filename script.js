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
const regex = new RegExp('[^a-z|s|\n|\b| ]', 'gmi'); // match everything but a-z, whitespace, backspace

const imgTxts = {
    a: "<span class='italic'>ABC da Cana</span> (2014) is a photo essay which shows workers from the TABU refinery performing the letters of the alphabet using sugarcane, during their break from working in the fields.",
    b: "Blue work costumes contrast with the brown-beige background of the sugarcane fields, making the men stand out clearly from the background.",
    c: "Composition: Each photo shows the labourers in the centre, bending and stretching themselves to manipulate the sugarcane into shape.",
    d: "De Andrade typically stages social experiments on locations where power dynamics are at play. For the works in this series, he collaborated with labourers from a sugar refinery.",
    e: "Experience Jonathas de Andrade's artistic practice yourself in our free Walk-in Workshop, every Sunday between 14:00 - 16:00.",
    f: "Foam Amsterdam is currently exhibiting <span class='italic'>Next Level: Jonathas de Andrade - Staging Resistance</span>.",
    g: "Global production of sugarcane is estimated at almost 2 billion tonnes a year, with Brazil taking up almost 40% of this production.",
    h: "How do you think the material feels? The canes look stiff, yet they also seem to bend easily into different shapes.",
    i: "Inspiration for the <span class='italic'>ABC da Cana</span> came from the 1957 typography of Luís Jardim for <span class='italic'>Brasil Açucareiro</span>, a trade magazine published by the Brazilian Institute for Alcohol and Sugar.",
    j: "Jonathas de Andrade is a Brazilian artist who addresses issues of social, economic and racial inequality that are – and have historically been – at the core of Brazilian politics.",
    k: "Knowledge test: do you know how sugar is made from sugar cane? Hint: the answer can be found under another photo!",
    l: "Language plays an important role in Jonathas de Andrade's work. By combining visual with text, he creates a unique type of visual storytelling.",
    m: "Make your own photo alphabet: pick a type of food that you like or perhaps have at home. Think carefully about the composition, colour and background. How can you make your letters stand out? Share using #foamabc.",
    n: "Next Level is an exhibition series that introduces artists who are making radical use of photography. Jonathas de Andrade is the current Next Level artist on display in Foam Fotografiemuseum Amsterdam.",
    o: "Once sugarcane is harvested, a process called 'milling' extracts the juice, concentrates the juice into syrup and then crystallizes the syrup into sugar.",
    p: "Pay attention to the background of the photo you typed before and after this one. What is similar or different? What is the effect of this in your 'photoword’?",
    q: "Questioning colonial power structures is central to Jonathas de Andrade's practice. This can also be seen in his other work, <span class='italic'>Hunger for Resistance</span> and <span class='italic'>Tejucupapo Heroins</span>, also on display at Foam.",
    r: "Raw materials, like sugar, were traded against manufactured goods and enslaved people, thus forming the colonial 'triangle trade'.",
    s: "Sugarcane is the raw material for refined sugar. It has been an important Brazilian export product since colonial times, and has a dark history of slavery, land reclamation through logging and unequal distribution of natural resources.",
    t: "The performance of the letters of the alphabet can also be seen as a commentary on the level of illiteracy in rural Brazil.",
    u: "Underneath the playful act of performing letters lies a gesture of empowerment and light-hearted disobedience.",
    v: "Visit <span class='italic'>Next Level: Jonathas de Andrade - Staging Resistance</span> at Foam (Keizersgracht 609, Amsterdam).",
    w: "Why do you think the artist works with local communities, such as the workers of the sugar refinery? How does that impact the photo?",
    x: "X-ray your body: how much sugar have you consumed today? Can you find out where this came from?",
    y: "‘You are what you eat’ is a common saying. But how much do we actually know about the social, economic and environmental conditions in which our food is produced?",
    z: "Zoom in to view the photographs better, or view from up close in the exhibition at Foam!"   
}

let j = 0;
const title = "<span class='italic'>ABC da Cana</span> Typewriter";
const speedTitle = 75;

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

function toggleNavTxt(id) {
    let el = document.getElementById(id + "-txt");
    navTxts.forEach(navtxt => { 
        navtxt.style.display = "none"
        navtxt.classList.remove("visible");
    });
    el.style.display = "block";
    el.classList.add("visible");
}

function addImage(i, cursorLocation) {
    const image = document.createElement("img");
    image.setAttribute("class", "img " + i);
    image.setAttribute("src", "img-bw/" + i + "_bw.jpg");
    logContainer.insertBefore(image, logContainer.children[cursorLocation -1]);
}

function addSpace(cursorLocation) {
    const space = document.createElement("div");
    space.setAttribute("class", "space");
    logContainer.insertBefore(space, logContainer.children[cursorLocation -1]);

}

function addBreak(cursorLocation) {
    const enter = document.createElement("br");
    logContainer.insertBefore(enter, logContainer.children[cursorLocation -1]);
}

function removeCharacter(cursorLocation) {
    logContainer.removeChild(logContainer.children[cursorLocation]);
}

function updateValue(e) {
    const txt = e.target.value.replace(regex, '').toLowerCase();
    const cursorLoc = e.target.selectionStart;
    console.log("text length " + txt.length);
    const lastChar = txt[cursorLoc -1];
    if (txt.length >= 0) {
        if (e.inputType == "deleteContentBackward") {
            console.log("backspace is pressed");
            removeCharacter(cursorLoc);
        } else if (lastChar === " ") {
            console.log("space is pressed");
            addSpace(cursorLoc);
        } else if (lastChar === "\n") {
            console.log("enter is pressed");
            addBreak(cursorLoc);
        } else if (!regex.test(e.target.value)) {
            console.log("key is pressed");
            addImage(lastChar, cursorLoc);
            hover(lastChar);
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
        image.setAttribute("src", "img/" + input + ".jpg");
    }));
    document.querySelectorAll("." + input).forEach(image => image.addEventListener("mouseout", function() {
        document.getElementById("img-txt").innerHTML = "";
        image.setAttribute("src", "img-bw/" + input + "_bw.jpg");
    }));
}