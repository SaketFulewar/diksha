const appWrapper = document.querySelector(".app-wrapper");
const content = document.querySelector(".content");
const emo = document.querySelector(".emo");
const caption = document.querySelector(".caption");
const box = document.querySelector(".box-main");
const startBtn = document.querySelector(".start-btn");
const stopBtn = document.querySelector(".stop-btn");

const pass = ["manya", "vaibhav", "tatya", "adi"];
alert("You Have To Enter Your Unique Identity To Acess The Website");
var user = window.prompt("Enter Your Unique Identity");
var timeRange = 50000;
var hitTime = 100;
var passAuth;

for (let i = 0; i < pass.length; i++) {
    if (user === pass[i]) {
        passAuth = 0;
        console.log(pass[i]);
        break;
    }
    else {
        passAuth = 1;
    }
}

if (passAuth === 0) {
    var inter = setInterval(() => {
        textBlower();
    }, hitTime);
} else if (passAuth === 1) {
    emoAppear();
}

function emoAppear() {
    appWrapper.style.display = "none";
    document.querySelector(".spam-pg").style.display = "flex";
    setInterval(() => {
        emo.style.opacity = "1";
        content.style.opacity = "1";
        caption.style.opacity = "1";
        emo.style.transform = "translateY(0px)";
        content.style.transform = "translateY(0px)";
        caption.style.transform = "translateY(0px)";

    }, 200);
}

function textBlower(e) {
    var boxHeight = box.clientHeight;
    var boxWidth = box.clientWidth;

    var randomTop = Math.random() * boxHeight;
    var randomLeft = Math.random() * boxWidth;

    var randomRotation = Math.random() * 360;

    var myText = document.createElement("h2");
    myText.style.top = randomTop + "px";
    myText.style.left = randomLeft + "px";
    myText.style.transform = "rotate(" + randomRotation + "deg)";
    myText.innerHTML = "Diksha"
    box.appendChild(myText);

    setTimeout(() => {
        myText.style.opacity = 0;
    }, timeRange);
}

startBtn.addEventListener("click", () => {
    inter = setInterval(() => {
        textBlower();
    }, hitTime);
})

stopBtn.addEventListener("click", () => {
    clearInterval(inter);
})