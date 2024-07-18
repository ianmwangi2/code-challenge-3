// Fetch movie data and populate the page
fetch('https://backend-code-challenge-p39f.vercel.app/films')
  .then(response => response.json())
  .then(movies => {
    const filmsList = document.getElementById('films');

    // Create list items for each movie
    movies.forEach(movie => {
      const filmItem = document.createElement('li');
      filmItem.classList.add('film', 'item');
      filmItem.textContent = movie.title;

      // Add click event to display movie details
      filmItem.addEventListener('click', () => showMovieDetails(movie));
      filmsList.appendChild(filmItem);
    });

    // Display details for the first movie by default
    showMovieDetails(movies[0]);
  });

// Function to display movie details
function showMovieDetails(movie) {
  const movieDetails = document.getElementById('movie-details');
  const moviePoster = document.getElementById('movie-poster');
  const movieTitle = document.getElementById('movie-title');
  const movieRuntime = document.getElementById('movie-runtime');
  const movieShowtime = document.getElementById('movie-showtime');
  const availableTickets = document.getElementById('available-tickets');
  let buyTicketButton = document.getElementById('buy-ticket'); // Use let to reassign later

  // Update details with movie data
  moviePoster.src = movie.poster;
  movieTitle.textContent = movie.title;
  movieRuntime.textContent = movie.runtime;
  movieShowtime.textContent = movie.showtime;

  // Calculate and display available tickets
  let availableTicketsCount = movie.capacity - movie.tickets_sold;
  availableTickets.textContent = availableTicketsCount;

  // Update button state based on ticket availability
  buyTicketButton.disabled = availableTicketsCount === 0;
  buyTicketButton.textContent = availableTicketsCount === 0 ? 'Sold Out' : 'Buy Ticket';

  // Add click event to the buy-button
  buyTicketButton.addEventListener('click', () => {
    if (availableTicketsCount > 0) {
      availableTicketsCount--;
      availableTickets.textContent = availableTicketsCount;
      movie.tickets_sold++;

      if (availableTicketsCount === 0) {
        buyTicketButton.disabled = true;
        buyTicketButton.textContent = 'Sold Out';
      }
    }
  });

  // Show movie details
  movieDetails.style.display = 'block';
}
