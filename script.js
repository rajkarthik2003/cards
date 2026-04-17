function drawCards(){

const suits=["♠","♥","♦","♣"];
const ranks=["A","2","3","4","5","6","7","8","9","10","J","Q","K"];

let deck=[];

for(let suit of suits){
 for(let rank of ranks){
   deck.push({rank,suit});
 }
}

if(document.getElementById("joker").checked){
 deck.push({rank:"🃏",suit:""});
}

let count=parseInt(document.getElementById("count").value);
let cards=document.getElementById("cards");
cards.innerHTML="";

for(let i=0;i<count;i++){

 let random=Math.floor(Math.random()*deck.length);
 let card=deck.splice(random,1)[0];

 if(card.rank==="🃏"){
   cards.innerHTML += `
   <div class="card">
     <div class="center">🃏</div>
   </div>`;
   continue;
 }

 let color=(card.suit==="♥" || card.suit==="♦") ? "red":"black";

 cards.innerHTML += `
 <div class="card ${color}">
   <div class="top">${card.rank}${card.suit}</div>
   <div class="center">${card.suit}</div>
   <div class="bottom">${card.rank}${card.suit}</div>
 </div>`;
}
}
