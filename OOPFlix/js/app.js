import Movie from './classes/Movie.js';

let movieList = Movie.findAll();

//console.log(movieList);

movieList.forEach(movie => {
    console.log(movie.getDetails());
});

// let dataObj = {
//     title: 'Inception',
//     poster: 'https://image.tmdb.org/t/p/w500/oYuLEt3zVCKq57qu2F8dT7NIa6f.jpg',
//     genres: ['Action', 'Science Fiction', 'Adventure'],
//     homepage: 'https://www.warnerbros.com/movies/inception',
//     rating: 8.367,
//     revenue: 825532764,
//     imdb_id: 'tt1375666',
// };

// let movie1 = new Movie(dataObj);

// console.log(dataObj);
// console.log(movie1.getDetails());
// console.log(Movie.movies);

import Show from './classes/Show.js';

let showList = Show.findAll();

//console.log(showList);

showList.forEach(show => {
    console.log(show.getDetails());
});