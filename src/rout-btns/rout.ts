import toGarage from './btns/to-garage';
import toWinners from './btns/to-winners';

export class Rout {
    routBtns:HTMLElement;

    constructor() {
        this.routBtns = document.createElement('div');
    }

    render():HTMLElement {
        this.routBtns.id = 'routBtns';
        this.routBtns.classList.add('routBtns');
        this.routBtns.appendChild(toGarage.render());
        this.routBtns.appendChild(toWinners.render());
        return this.routBtns;
    }
}
const rout = new Rout();
export default rout;
