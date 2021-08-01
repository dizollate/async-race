import game from '../../game-components/game';
import table from '../../table-components/table';

export class ToGarage {
    toGarageBtn:HTMLElement;

    constructor() {
        this.toGarageBtn = document.createElement('button');
    }

    render():HTMLElement {
        this.toGarageBtn.id = 'toGarage';
        this.toGarageBtn.classList.add('btn_toGarage');
        this.toGarageBtn.innerText = 'To Garage';
        this.toGarageBtn.addEventListener('click', this.click);
        return this.toGarageBtn;
    }

    click():void {
        game.show();
        table.hide();
    }
}
const toGarage = new ToGarage();
export default toGarage;
