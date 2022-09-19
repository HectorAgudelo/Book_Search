const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '1e16a8d7aemsh965bef850564727p10cb7bjsna6a7185b6c67',
    'X-RapidAPI-Host': 'hapi-books.p.rapidapi.com',
  },
};

// Get DOM elements
// targeting the button id
const btn = document.getElementById('button-addon2');

btn.addEventListener('click', function () {
  // getting the input value from user input
  const userInput = document.getElementById('input').value;

  const book = userInput;

  fetch(`https://hapi-books.p.rapidapi.com/search/${book}`, options)
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      displayCards(response);
    })
    .catch((err) => console.error(err));
});

// this function will construct the cards with the data from the api.
// this function is called inside the fetch function.
const displayCards = (data) => {
  const searchBox = document.querySelector('#searchBox');
  const cards = document.querySelector('#parentCol')
  searchBox.style.display = "none"

  cards.appendChild(`<h1>HEllo World</h1>`)

  console.log(data[0].authors[0]);
};
// get book by name

// get the 15 most popular book of the month
// const PopBooks = () => {
//     fetch('https://hapi-books.p.rapidapi.com/month/2022/3', options)
// 	.then(response => response.json())
// 	.then(response => console.log(response))
// 	.catch(err => console.error(err));
// }

// PopBooks();
