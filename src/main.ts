import cars from './game-components/cars-field/cars';
import game from './game-components/game';
import rout from './rout-btns/rout';
import table from './table-components/table';

export class Main {
    main:HTMLElement;

    constructor(private readonly rootElement: HTMLElement) {
        this.main = document.createElement('main');
    }

    async getCars() {
        const promise = await fetch('http://127.0.0.1:3000/garage');
        const jsons = await promise.json();
        jsons.forEach((el:{ name:string, color:string, id:string }) => {
            cars.createFirstCar(el.name, el.color, el.id);
        });
    }

    start() {
        this.main.classList.add('main');
        this.rootElement.appendChild(this.main);
        this.main.appendChild(rout.render());
        this.main.appendChild(game.render());
        this.getCars();
        this.main.appendChild(table.render());
    }
}

export default Main;
