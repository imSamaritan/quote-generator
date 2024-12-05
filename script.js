//Querying html elements
const quoteCardEl = document.getElementById('quote-card');
const quoteTextEl = document.getElementById('quote-text');
const quoteAuthorEl = document.querySelector('#quote-author span');
const loaderEl = document.getElementById('loader');

const newQuoteBtnEl = document.getElementById('btn-new-quote');
const tweetBtnEl = document.getElementById('btn-tweet-quote'); 

// start loading then hide quote card [F]
function loading() {
  if (loaderEl.hidden === true) {
    loaderEl.hidden = false;
    quoteCardEl.hidden = true;
  }
}

// end loading then unhide quote card
function endLoading() {
  if (loaderEl.hidden === false) {
    loaderEl.hidden = true;
    quoteCardEl.hidden = false;
  }
}

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
  //Stop loading
  endLoading();
}

function tweetQuote() {
  const apiTwitterUrl = `https://twitter.com/intent/tweet/?text=${quoteTextEl.textContent} - ${quoteAuthorEl.textContent}`;
  window.open(apiTwitterUrl, '_blank');
}

async function getQuotes() {
  //loading for when fetch is loading data
  loading();

  const apiUrl = 'https://jacintodesign.github.io/quotes-api/data/quotes.json';
  try {
    const req = await fetch(apiUrl);
    const quotes = await req.json();

    const id = Math.floor(Math.random() * quotes.length) + 1;
    render(quotes[id]);
  }
  catch (error) {
    throw new Error(error);
  }
}

//Add event listeners on the buttons
newQuoteBtnEl.addEventListener('click', getQuotes);
tweetBtnEl.addEventListener('click', tweetQuote);

//Fetching data
getQuotes();

