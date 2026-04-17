function drawCards() {
  const suits = ["♠","♥","♦","♣"];
  const ranks = ["A","2","3","4","5","6","7","8","9","10","J","Q","K"];

  let deck = [];

  for(let suit of suits){
    for(let rank of ranks){
      deck.push(rank + suit);
    }
  }

  if(document.getElementById("joker").checked){
    deck.push("🃏");
  }

  let count = parseInt(document.getElementById("count").value);

  let cardsDiv = document.getElementById("cards");
  cardsDiv.innerHTML = "";

  for(let i=0;i<count;i++){
    let random = Math.floor(Math.random()*deck.length);
    let card = deck.splice(random,1)[0];

    cardsDiv.innerHTML += `<div class="card">${card}</div>`;
  }
}
