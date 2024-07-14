// Fetch movie data and populate the page
fetch('http://localhost:3000/films')
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
  const buyTicketButton = document.getElementById('buy-ticket');

  // Update details with movie data
  moviePoster.src = movie.poster;
  movieTitle.textContent = movie.title;
  movieRuntime.textContent = movie.runtime;
  movieShowtime.textContent = movie.showtime;

  // Calculate and display available tickets
  const availableTicketsCount = movie.capacity - movie.tickets_sold;
  availableTickets.textContent = availableTicketsCount;

  // Update button state based on ticket availability
  buyTicketButton.disabled = availableTicketsCount === 0;
  buyTicketButton.textContent = availableTicketsCount === 0 ? 'Sold Out' : 'Buy Ticket';

  // Show movie details
  movieDetails.style.display = 'block';
}