import fetchBooks from './api.js';
import displayCards from './helpers/displayCards.js';

// Get DOM elements
const btn = document.getElementById('button-addon2');

btn.addEventListener('click', function () {
  // getting the input value from user input
  const userInput = document.getElementById('input').value;

  const book = userInput;

  fetchBooks(book).then((response) => {
    displayCards(response);
  });
});
