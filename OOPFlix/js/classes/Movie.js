import DB from "./DB.js";

class Movie {

    constructor (_data){
        this.title = _data.title;
        this.poster = _data.poster;
        this.genres = _data.genres;
        this.homepage = _data.homepage;
        this.rating = _data.rating;
        this.revenue = _data.revenue;
        this.imdb_id = _data.imdb_id;
    }

    static findAll(){
        let db = new DB();
        let data = db.getMovieData();

        let movies = data.map(dataObj => new Movie(dataObj));

        console.log(movies);
    }

    getDetails(){
        return `
        Title: ${this.title}
        Poster: ${this.poster}
        Genres: ${this.genres}
        Homepage: ${this.title}
        Rating: ${this.rating}
        Revenue: ${this.revenue}
        IMDB id: ${this.imdb_id}
        `;
    }
}

export default Movie;