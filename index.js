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
  const cards = document.querySelector('#cardsContainer');
  searchBox.style.display = 'none';
  
//   const card = document.createElement('div');
//   card.setAttribute('class', 'card');
//   card.style.width="18rem";
  
//   card.innerHTML = `
//   <img src="..." class="card-img-top" alt="...">
//   <div class="card-body">
//     <h5 class="card-title">Card title</h5>
//     <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//     <a href="#" class="btn btn-primary">Go somewhere</a>
//   </div> 
// `;

  cards.innerHTML = `<div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
<div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
<div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
<div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
<div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>`


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
