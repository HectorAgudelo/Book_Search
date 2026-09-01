import fetchBooks from './js/api.js';
import displayCards from './js/helpers/displayCards.js';

// Get DOM elements
const btn = document.getElementById('button-addon2');

btn.addEventListener('click', function () {
  if (btn.disabled) return;

  // getting the input value from user input
  const inputEl = document.getElementById('input');
  const userInput = inputEl.value;

  const book = userInput;

  if (!book) return; // Prevent empty searches

  // Show loading spinner and clear previous results
  const loadingSpinner = document.getElementById('loadingSpinner');
  const cardsContainer = document.getElementById('cardsContainer');
  loadingSpinner.classList.add('active');
  cardsContainer.innerHTML = '';

  // Disable inputs and show loading state on button
  btn.disabled = true;
  inputEl.disabled = true;
  const originalBtnText = btn.innerHTML;
  btn.innerHTML = '<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Searching...';

  fetchBooks(book).then((response) => {
    displayCards(response);
  }).catch((err) => {
    loadingSpinner.classList.remove('active');
    cardsContainer.innerHTML = `<p class="text-light fs-4 mt-4">Failed to fetch books. Please try again.</p>`;
    console.error(err);
  }).finally(() => {
    // Restore inputs and button state
    btn.disabled = false;
    inputEl.disabled = false;
    btn.innerHTML = originalBtnText;
  });
});

// Also trigger search on Enter key press
document.getElementById('input').addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    e.preventDefault();
    btn.click();
  }
});
