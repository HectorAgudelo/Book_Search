import fetchBooks from './js/api.js';
import displayCards from './js/helpers/displayCards.js';

// Get DOM elements
const btn = document.getElementById('button-addon2');

btn.addEventListener('click', function () {
  // getting the input value from user input
  const userInput = document.getElementById('input').value;

  const book = userInput;

  if (!book) return; // Prevent empty searches

  // Show loading spinner and clear previous results
  const loadingSpinner = document.getElementById('loadingSpinner');
  const cardsContainer = document.getElementById('cardsContainer');
  loadingSpinner.classList.add('active');
  cardsContainer.innerHTML = '';

  fetchBooks(book).then((response) => {
    displayCards(response);
  }).catch((err) => {
    loadingSpinner.classList.remove('active');
    cardsContainer.innerHTML = `<p class="text-light fs-4 mt-4">Failed to fetch books. Please try again.</p>`;
    console.error(err);
  });
});

// Also trigger search on Enter key press
document.getElementById('input').addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    e.preventDefault();
    btn.click();
  }
});
