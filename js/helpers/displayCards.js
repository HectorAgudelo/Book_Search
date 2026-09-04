const displayCards = (data) => {
  const cardsContainer = document.querySelector('#cardsContainer');
  const loadingSpinner = document.querySelector('#loadingSpinner');

  // Hide loading spinner
  loadingSpinner.classList.remove('active');

  // Clear any existing cards
  cardsContainer.innerHTML = '';

  // Provide user feedback if no data is found
  if (!data || data.length === 0) {
    cardsContainer.innerHTML = `<p class="text-light fs-4 mt-4">No books found. Try another search.</p>`;
    return;
  }

  for (let i = 0; i < data.length; i++) {
    // Better handling of authors array
    const authors = data[i].authors && data[i].authors.length > 0
      ? data[i].authors.join(', ')
      : 'Unknown';

    cardsContainer.innerHTML += `
    <div class="card m-2" style="width: 18rem;">
      <img src="${data[i].cover}" class="card-img-top bookImage" alt="${data[i].name}">
      <div class="card-body d-flex flex-column">
        <h5 class="card-title">${data[i].name}</h5>
        <p class="card-text mb-1"><strong>Author:</strong> ${authors}</p>
        <p class="card-text mb-1"><strong>Year:</strong> ${data[i].year || 'N/A'}</p>
        <p class="card-text mb-3"><strong>Rating:</strong> ${data[i].rating || 'N/A'}</p>
        <a href="${data[i].url}" target="_blank" rel="noopener noreferrer" class="btn btn-primary mt-auto text-white" aria-label="Explore more about ${data[i].name} (opens in a new tab)">Explore More</a>
      </div>
    </div>
  `;
  }
};

export default displayCards;
