// var timer=60;
// var score=0;
// var hitrn=0;


// function increaseScore(){
//     score +=10;
//     document.querySelector("#scoreval").textContent=score;
// }
// function getNewHit(){
//     hitrn =Math.floor(Math.random()*10);
//     document.querySelector("#hitval").textContent=hitrn;
// }

// function makeBubble(){
//     var clutter="";

// for(var i=1;i<=168;i++){
//     var rn=Math.floor(Math.random()*10)
//     clutter +=`<div class="bubble">${rn}</div>`;
// }
// document.querySelector("#pbtm").innerHTML = clutter
// }

// function runTimer(){
//     var timerint = setInterval(function(){
//         if(timer>0){
//             timer--;
//         document.querySelector("#timerval").textContent=timer
//         }
//         else{
//             clearInterval(timerint);
//             document.querySelector("#pbtm").innerHTML=`Game Over`
//         }
//     },1000);
// }

// document.querySelector("#pbtm").addEventListener("click",function(details){
//     var clickednum=Number(details.target.textContent);
//     if(clickednum===hitrn){
//         increaseScore();
//         makeBubble();
//         getNewHit();
//     }
// })

// runTimer();
// makeBubble();
// getNewHit();

var timer=60
var hitrn=0
var score=0
function increaseScore(){
    score +=10
    document.querySelector("#scoreval").textContent=score
}
function getNewHit(){
    random=Math.floor(Math.random()*10)
    document.querySelector("#hitval").textContent=random
}
function makeBubble(){
    var clutter=""
    for(var i=0;i<168;i++){
        var rn=Math.floor(Math.random()*10)
        clutter +=`<div class="bubble">${rn}</div>`;
    }
    document.querySelector("#pbtm").innerHTML=clutter
}
function runTimer(){
    var tapu=setInterval(function(){
        if(timer>0){
            timer --
            document.querySelector("#timerval").textContent=timer
        }
        else{
            clearInterval(tapu)
            document.querySelector("#timerval").textContent="Game Over"
        }
    },1000)
}
document.querySelector("#pbtm").addEventListener('click',function(details){
    var clickednum=Number(details.target.textContent)
    if(clickednum===random){
        increaseScore()
        makeBubble()
        getNewHit()
    }
})
makeBubble()
getNewHit()
runTimer()
