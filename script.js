let quotes = [];

function filterQuote() {
  const id = Math.floor(Math.random() * quotes.length) + 1;
  console.log(quotes[id]);
}

async function getQuotes() {
  const apiUrl = 'https://jacintodesign.github.io/quotes-api/data/quotes.json';
  try {
    const req = await fetch(apiUrl);
    quotes = await req.json();

    filterQuote();
  }
  catch (error) {
    throw new Error(error);
  }
}

getQuotes();