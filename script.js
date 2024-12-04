const btnNewQuote = document.querySelector('#btn-new-quote');
const btnTweatQuote = document.querySelector('#btn-new-quote');

let quotes = [];

function getQuote() {
  const randomId = Math.floor(Math.random() * quotes.length);
  const quote = quotes[randomId];
  
  console.log(quote)
}

async function getQuotes () {
  const apiUrl = "https://jacintodesign.github.io/quotes-api/data/quotes.json";

  try {
    const req = await fetch(apiUrl);
    quotes = await req.json();

    // get only one quote using a random [id] number
    getQuote()
    console.log(quotes)
  } catch (error) {
    throw new Error(error);
  }

}
