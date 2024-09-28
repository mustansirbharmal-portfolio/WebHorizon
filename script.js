// Sample movie data
const movies = [
    { title: "Movie 1", description: "Description of Movie 1", image: "https://via.placeholder.com/300x450" },
    { title: "Movie 2", description: "Description of Movie 2", image: "https://via.placeholder.com/300x450" },
    { title: "Movie 3", description: "Description of Movie 3", image: "https://via.placeholder.com/300x450" },
    { title: "Movie 4", description: "Description of Movie 4", image: "https://via.placeholder.com/300x450" },
    { title: "Movie 5", description: "Description of Movie 5", image: "https://via.placeholder.com/300x450" },
    { title: "Movie 6", description: "Description of Movie 6", image: "https://via.placeholder.com/300x450" },
];

// Function to create movie cards
function createMovieCard(movie) {
    return `
        <div class="col-lg-3 col-md-4 col-sm-6">
            <div class="card">
                <img src="${movie.image}" class="card-img-top" alt="${movie.title}">
                <div class="card-body">
                    <h5 class="card-title">${movie.title}</h5>
                    <p class="card-text">${movie.description}</p>
                </div>
            </div>
        </div>
    `;
}

// Function to populate movie list
function populateMovieList() {
    const movieList = document.getElementById('movieList');
    movieList.innerHTML = movies.map(createMovieCard).join('');
}

// Call the function when the page loads
document.addEventListener('DOMContentLoaded', populateMovieList);
