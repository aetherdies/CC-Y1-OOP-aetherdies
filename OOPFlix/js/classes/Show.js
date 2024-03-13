import DB from "./DB.js";

class Show {

    constructor (_data){
        this.first_air_date = _data.first_air_date;
        this.genres = _data.genres;
        this.homepage = _data.homepage;
        this.overview = _data.overview;
        this.poster = _data.poster;
        this.title = _data.title;
        this.youtube_id = _data.youtube_id;
    }

    static findAll(){
        let db = new DB();
        let data = db.getShowData();

        let show = data.map(dataObj => new Show(dataObj));

        console.log(show);
    }

    getDetails(){
        return `
        Title: ${this.title}
        Genres: ${this.genres}
        Homepage: ${this.homepage}
        Overview: ${this.overview}
        Poster: ${this.poster}
        Title: ${this.title}
        Youtube ID: ${this.youtube_id}
        `;
    }
};

export default Show;