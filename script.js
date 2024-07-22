//      MY CODE
let input = document.querySelector ("body")
let hihat1 = new Audio ("sounds/hihat.wav")
let snare1 = new Audio ("sounds/snare.wav")
let bass1 = new Audio ("sounds/kick.wav")
let tom1 = new Audio ("sounds/tom.wav")
let cymbal1 = new Audio ("sounds/ride.wav")
const cymbal = document.getElementById("cymbal")
const tom = document.getElementById("tom")
const bass = document.getElementById("bass")
const hihat = document.getElementById("hihat")
const snare = document.getElementById("snare")
input.addEventListener("keypress", (event) => {
    if (event.key == "g" || event.key == "G") {
        hihat1.play()
    }
})
hihat.addEventListener ("click", () => {
    hihat1.play()
})
snare.addEventListener("click", () =>{
    snare1.play()
})
bass.addEventListener ("click", () => {
    bass1.play()
})
tom.addEventListener ("click", () => {
    tom1.play()
})
cymbal.addEventListener ("click", () => {
    cymbal1.play()
})
input.addEventListener("keypress", (event) => {
    if (event.key == "r" || event.key == "R") {
        snare1.play()
    }
})
input.addEventListener("keypress", (event) => {
    if (event.key == "y" || event.key == "Y") {
        bass1.play()
    }
})
input.addEventListener("keypress", (event) => {
    if (event.key == "b" || event.key == "B") {
        tom1.play()
    }
})
input.addEventListener("keypress", (event) => {
    if (event.key == "o" || event.key == "O") {
        cymbal1.play()
    }
})


//      CHAT GPT SIMPLIFICATION OF MY CODE

// const sounds = {
//     hihat: new Audio("sounds/hihat.wav"),
//     snare: new Audio("sounds/snare.wav"),
//     bass: new Audio("sounds/kick.wav"),
//     tom: new Audio("sounds/tom.wav"),
//     cymbal: new Audio("sounds/ride.wav")
// };

// document.addEventListener("keypress", (event) => {
//     const key = event.key.toLowerCase();
//     switch (key) {
//         case "g":
//             playSound("hihat");
//             break;
//         case "r":
//             playSound("snare");
//             break;
//         case "y":
//             playSound("bass");
//             break;
//         case "b":
//             playSound("tom");
//             break;
//         case "o":
//             playSound("cymbal");
//             break;
//         default:
//             break;
//     }
// });

// function playSound(elementId) {
//     sounds[elementId].currentTime = 0;
//     sounds[elementId].play();
// }

// Object.keys(sounds).forEach((elementId) => {
//     const element = document.getElementById(elementId);
//     element.addEventListener("click", () => playSound(elementId));
// });
