import '../../example.precompiled.js'

export default class FilmPoster {

    constructor(context = {}) {
      const {
        title, MainGenre, year, SmallImg, id
      } = context;
      this.title = title;
      this.genre = MainGenre;
      this.image = SmallImg;
      this.year = year;
      this.id = id;
      this.poster = document.createElement('div');
      this.template = Handlebars.templates.FilmPoster;
    }

    render() {
      return this.template({
        id: this.id,
        title: this.title,
        MainGenre: this.genre,
        year: this.year,
        SmallImg: this.image,
      });
    }
}