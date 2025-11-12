const factElement = document.getElementById('fact');
const button = document.getElementById('newFact');

async function getFact() {
  try {
    const response = await fetch('https://uselessfacts.jsph.pl/api/v2/facts/random');
    const data = await response.json();
    factElement.textContent = data.text;
  } catch (error) {
    factElement.textContent = "Oops! Couldn't load a fact. Try again.";
  }
}

button.addEventListener('click', getFact);

// Load a fact on page start
getFact();
