const suits = [
  { symbol: '♠', color: 'black' },
  { symbol: '♥', color: 'red' },
  { symbol: '♦', color: 'red' },
  { symbol: '♣', color: 'black' }
];

const ranks = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];

function buildDeck(jokerCount) {
  const deck = [];

  suits.forEach(({ symbol, color }) => {
    ranks.forEach(rank => deck.push({ rank, suit: symbol, color }));
  });

  for (let i = 0; i < jokerCount; i++) {
    deck.push({ rank: 'JOKER', suit: '🃏', color: 'black', isJoker: true });
  }

  return deck;
}

function shuffle(deck) {
  for (let i = deck.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [deck[i], deck[j]] = [deck[j], deck[i]];
  }
  return deck;
}

function updateStatus(deckSize, picked, note) {
  document.getElementById('deck-size').textContent = deckSize;
  document.getElementById('picked-count').textContent = picked;
  document.getElementById('status-note').textContent = note;
}

function renderCard(card) {
  if (card.isJoker) {
    return `
      <article class="card joker">
        <div class="corner top-left">${card.suit}</div>
        <div class="joker-center">${card.suit}</div>
        <div class="corner bottom-right">${card.suit}</div>
      </article>`;
  }

  return `
    <article class="card ${card.color}">
      <div class="corner top-left">${card.rank}${card.suit}</div>
      <div class="center-suit">${card.suit}</div>
      <div class="corner bottom-right">${card.rank}${card.suit}</div>
    </article>`;
}

function drawCards() {
  const count = parseInt(document.getElementById('count').value, 10);
  const jokerCount = parseInt(document.getElementById('joker-count').value, 10);
  const deck = buildDeck(jokerCount);
  const shuffled = shuffle(deck);
  const selection = shuffled.slice(0, count);
  const cardsContainer = document.getElementById('cards');

  cardsContainer.innerHTML = selection.map(renderCard).join('');

  const note = selection.some(card => card.isJoker)
    ? 'Jokers are in play — hope luck is on your side!'
    : 'Classic hand ready. Good luck!';

  updateStatus(deck.length, selection.length, note);
}

window.addEventListener('DOMContentLoaded', () => {
  const drawButton = document.getElementById('draw-button');
  drawButton.addEventListener('click', drawCards);
  drawCards();
});
