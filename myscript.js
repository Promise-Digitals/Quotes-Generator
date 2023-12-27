const api_url = "https://api.quotable.io/random";
const quotes = document.getElementById("quotes");
const author = document.getElementById("author");

async function getQuotes(url) {
    const response = await fetch(url);
    var data = await response.json();

    quotes.innerHTML = data.content;
    author.innerHTML = data.author;
}

getQuotes(api_url);

function tweet() {
    window.open("https://twitter.com/intent/tweet?text=" + quotes.innerHTML + "   ---- by" + author.innerHTML, "Tweet Window", "width=800, height=400");
}
