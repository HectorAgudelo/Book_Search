import fetchBooks from './js/api.js';
import displayCards from './js/helpers/displayCards.js';

// Get DOM elements
const searchForm = document.getElementById('searchForm');
const btn = document.getElementById('button-addon2');
const inputField = document.getElementById('input');

searchForm.addEventListener('submit', function (e) {
  e.preventDefault();
  // getting the input value from user input
  const userInput = inputField.value;

  const book = userInput;

  if (!book) return; // Prevent empty searches

  // Show loading spinner and clear previous results
  const loadingSpinner = document.getElementById('loadingSpinner');
  const cardsContainer = document.getElementById('cardsContainer');
  loadingSpinner.classList.add('active');
  cardsContainer.innerHTML = '';

  // Disable inputs while fetching
  inputField.disabled = true;
  btn.disabled = true;

  fetchBooks(book).then((response) => {
    displayCards(response);
  }).catch((err) => {
    loadingSpinner.classList.remove('active');
    cardsContainer.innerHTML = `<p class="text-light fs-4 mt-4">Failed to fetch books. Please try again.</p>`;
    console.error(err);
  }).finally(() => {
    // Re-enable inputs
    inputField.disabled = false;
    btn.disabled = false;
  });
});
