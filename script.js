// ===============================
// Happy Girlfriend Day ❤️
// Hemash ❤️ Richa
// ===============================

// Typewriter Effect
const text =
"Every love story is beautiful, but ours is my favorite. ❤️";

const typeTarget = document.querySelector(".message");

if (typeTarget) {
    typeTarget.innerHTML = "";
    let i = 0;

    function typeWriter() {
        if (i < text.length) {
            typeTarget.innerHTML += text.charAt(i);
            i++;
            setTimeout(typeWriter, 50);
        }
    }

    typeWriter();
}

// Floating Hearts
function createHeart() {

    const heart = document.createElement("div");

    heart.innerHTML = ["❤️","💖","💕","💗","🌹","✨"][Math.floor(Math.random()*6)];

    heart.style.position = "fixed";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.top = "-50px";
    heart.style.fontSize = (20 + Math.random()*20) + "px";
    heart.style.animation = "fall 6s linear";
    heart.style.zIndex = "999";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 6000);

}

setInterval(createHeart, 400);

// Open Gift
function openGift(){

    const gift=document.getElementById("gift");
    const msg=document.getElementById("message");

    if(gift){
        gift.innerHTML="💝";
    }

    if(msg){
        msg.style.display="block";
    }

}

// Memory Jar

const memories=[

"❤️ The day we first met is my favorite memory.",

"🌹 Your smile makes every day brighter.",

"💕 Every moment with you is special.",

"💖 Thank you for being in my life.",

"🥰 Hemash ❤️ Richa Forever."

];

let memoryIndex=0;

function nextMemory(){

const card=document.getElementById("card");

if(card){

card.style.display="block";

card.innerHTML=memories[memoryIndex];

memoryIndex++;

if(memoryIndex>=memories.length){

memoryIndex=0;

}

}

}

// Fireworks / Celebration

function celebrate(){

for(let i=0;i<80;i++){

setTimeout(createHeart,i*80);

}

alert("❤️ Happy Girlfriend Day Richa ❤️");

}

// Music Button

function toggleMusic(){

const audio=document.querySelector("audio");

if(!audio) return;

if(audio.paused){

audio.play();

}else{

audio.pause();

}

}

// Countdown (Optional)

function startLoveCounter(){

const counter=document.getElementById("counter");

if(!counter) return;

const startDate=new Date("2025-01-01");

setInterval(()=>{

const now=new Date();

const diff=now-startDate;

const days=Math.floor(diff/(1000*60*60*24));

counter.innerHTML="❤️ Together for "+days+" Days ❤️";

},1000);

}

startLoveCounter();