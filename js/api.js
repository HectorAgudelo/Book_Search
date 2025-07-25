const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '1e16a8d7aemsh965bef850564727p10cb7bjsna6a7185b6c67',
    'X-RapidAPI-Host': 'hapi-books.p.rapidapi.com',
  },
};

const fetchBooks = (book) => {
  return fetch(`https://hapi-books.p.rapidapi.com/search/${book}`, options)
    .then((response) => response.json())
    .catch((err) => console.error(err));
};

export default fetchBooks;
