import game from '../../game-components/game';
import table from '../../table-components/table';

export class ToWinners {
    toWinnersBtn:HTMLElement;

    constructor() {
        this.toWinnersBtn = document.createElement('button');
    }

    render():HTMLElement {
        this.toWinnersBtn.id = 'toWinners';
        this.toWinnersBtn.classList.add('btn_toWinners');
        this.toWinnersBtn.innerText = 'To Winners';
        this.toWinnersBtn.addEventListener('click', this.click);
        return this.toWinnersBtn;
    }

    click():void {
        game.hide();
        table.show();
    }
}

const toWinners = new ToWinners();
export default toWinners;
