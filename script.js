//Querying html elements
const quoteCardEl = document.getElementById('quote-card');
const quoteTextEl = document.getElementById('quote-text');
const quoteAuthorEl = document.querySelector('#quote-author span');

const newQuoteBtnEl = document.getElementById('btn-new-quote');
const tweetBtnEl = document.getElementById('btn-tweet-quote'); 

//Declaring and initializing quote variable to empty list
let quotes = [];

function render(quote) {
  if (!quote.author) {
    quoteAuthorEl.textContent = 'Unknown';
  }
  else {
    quoteAuthorEl.textContent = quote.author;
  }


  if (quote.text.length > 120) {
    quoteTextEl.className = 'quote-long';
  }
  else {
    quoteTextEl.className = null;
  }

  quoteTextEl.textContent = quote.text;

}

function getQuote() {
  const id = Math.floor(Math.random() * quotes.length) + 1;
  render(quotes[id]);
}

function tweetQuote() {
  const apiTwitterUrl = `https://twitter.com/intent/tweet/?text=${quoteTextEl.textContent} - ${quoteAuthorEl.textContent}`;
  window.open(apiTwitterUrl, '_blank');
}

async function getQuotes() {
  const apiUrl = 'https://jacintodesign.github.io/quotes-api/data/quotes.json';
  try {
    const req = await fetch(apiUrl);
    quotes = await req.json();

    getQuote();
  }
  catch (error) {
    throw new Error(error);
  }
}

//Add event listeners on the buttons
newQuoteBtnEl.addEventListener('click', getQuote);
tweetBtnEl.addEventListener('click', tweetQuote);

//Fetching data
getQuotes();

