import Base from './Base.js';
import FilmLenta from '../Components/FilmLenta/FilmLenta.js';
import filmService from '../Services/filmService.js';
import { nav, application } from "../config.js";

export default class MenuPage extends Base {
  constructor(parent) {
    super(nav);
    this.parent = parent;
  }
    render() {
      super.render(false);
      this.parent.innerHTML = '';
      this.parent.className = '';
      const body = document.getElementById('body');
      body.className = 'main__black';
      const lentas = [
        {
          rusGenre:'Фантастика',
          genre: 'fantasy',
          parent: this.parent,
        },
        {
          rusGenre: 'Комедии',
          genre: 'comedy',
          parent: this.parent,
        },
      ];
      let j = 0;
      for (let i = 0; i < lentas.length; i++) {
        let responseBody;
        filmService.getByGenre(lentas[i].genre)
            .then((res) => {
              try {
                responseBody = res.get;
              } catch (e) {
                this.menuPage();
                return;
              }
              if (res.ok) {
                const lenta = new FilmLenta({
                  genre: lentas[i].rusGenre,
                  body: responseBody,
                  parent: application
                });
                lenta.render();
              } else {
                this.menuPage();
              }
              if (j === lentas.length - 1) {
                  this.createBox();
              }
              j++;
            });
    }
  }

  createBox() {
      const box = document.createElement('div');
      box.className = 'invisible_box';
      this.parent.appendChild(box);
  }
}
