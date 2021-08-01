import cars from './cars-field/cars';
import createField from './create-field/create-field';
import garageField from './garage/garage-field';
import pageField from './page-field/page-title-field';
import pagField from './pagination/pagination-field';
import raceReset from './race-reset-field/race-reset';
import updateField from './update-field/update-field';

class Game {
    gameScreen:HTMLElement;

    constructor() {
        this.gameScreen = document.createElement('div');
    }

    render():HTMLElement {
        this.gameScreen.id = 'game__screen';
        this.gameScreen.classList.add('game');
        this.gameScreen.classList.add('block');
        this.gameScreen.appendChild(createField.render());
        this.gameScreen.appendChild(updateField.render());
        this.gameScreen.appendChild(raceReset.render());
        this.gameScreen.appendChild(garageField.render());
        this.gameScreen.appendChild(pageField.render());
        this.gameScreen.appendChild(cars.render());
        this.gameScreen.appendChild(pagField.render());
        return this.gameScreen;
    }

    show():void {
        const gameScreen = document.getElementById('game__screen');
        gameScreen?.classList.add('block');
    }

    hide():void {
        const gameScreen = document.getElementById('game__screen');
        gameScreen?.classList.remove('block');
    }
}

const game = new Game();
export default game;
