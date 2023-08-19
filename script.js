function makebubble(){
var clutter="";

for(var i=1; i<=200; i++)
{
    var rn= Math.floor(Math.random()*10);
    clutter= clutter+`<div class="bubble">${rn}</div>`;
}
document.querySelector("#pbot").innerHTML=clutter;
}

var timer= 60;
function settimer(){
   var timeint= setInterval(function(){
        if(timer>0)
        {
            timer--;
            document.querySelector("#time").textContent=timer;
        }
        else{
            clearInterval(timeint);
             //since evn though printing was not ahppening the memmeory was being consumed.
             var scorefinal =`<h1>Game Over  <br> Score: ${score}</h1>`;
             //https://stackoverflow.com/questions/68632634/seperate-tag-using-multiple-innerhtml-in-javascript
             //scorefinal+=`<br/>`;
             //scorefinal+=`<h1>Score:</h1>`
             //scorefinal+=`<h1 class="heh">${score}</h1>`; //another method keep in mind
            var finalcontent= document.querySelector("#pbot");
            finalcontent.innerHTML=scorefinal;
            
             //after timer becomes zero we ahve to clear the bubbles
        }
    }, 1000); //its function is to perform the function mentioned in the parameter every 1 second

}
var hitrn=0;
function hitvalue()
{
     hitrn= Math.floor(Math.random()*10);
     //random gives value between 0 and 1

     document.querySelector("#hitval").textContent=hitrn;
     return rn;
}
var score=0;
function scoreincrease()
{
    score= score+10;
    document.querySelector("#scoreinc").textContent=score;
}

document.querySelector("#pbot").addEventListener("click", function(dets){ var clickednum= Number(dets.target.textContent)
if(clickednum===hitrn)
{
    scoreincrease();
    makebubble(); //refersh the entire set
    hitvalue();
}});//.target lets us know where we clicked, .textContent gives the value in the tag as a styring and hence we sued trhe number function
settimer();
makebubble();
hitvalue();





//the difference between '' and `` is that in order to attach a dynamic value with ''+2+2 it is written 
//like this but in case of `${2+2}` we can add a dynamic value by simply using ${} 