const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '1e16a8d7aemsh965bef850564727p10cb7bjsna6a7185b6c67',
		'X-RapidAPI-Host': 'hapi-books.p.rapidapi.com'
	}
};

// get book by name
const book = 'one hundred years of solitude'
const getBook = (book)=>{
    fetch(`https://hapi-books.p.rapidapi.com/search/${book}`, options)
	.then(response => response.json())
	.then(response => console.log(response[0].authors[0]))
	.catch(err => console.error(err));
}

getBook(book)

// get the 15 most popular book of the month
const PopBooks = () => {
    fetch('https://hapi-books.p.rapidapi.com/month/2022/3', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));
}

// PopBooks();