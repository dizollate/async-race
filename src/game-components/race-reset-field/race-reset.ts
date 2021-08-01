import garageNumber from '../garage/garage-components/garage-number';
import generateBtn from './generate/generate-btn';
import raceBtn from './race-btn/race-btn';
import resetBtn from './reset-btn/reset-btn';

class RaceReset {
    raceReset: HTMLElement;

    constructor() {
        this.raceReset = document.createElement('div');
        this.raceReset.addEventListener('click', this.resetRace);
    }

    render():HTMLElement {
        this.raceReset.className = 'race-reset-field';
        this.raceReset.appendChild(raceBtn.render());
        this.raceReset.appendChild(resetBtn.render());
        this.raceReset.appendChild(generateBtn.render());
        return this.raceReset;
    }

    resetRace() {
        const carsReset = document.querySelectorAll('.active_car');
        carsReset.forEach((i) => {
            const find = Number.parseInt(i.id, 10);
            const carSvg = i.getElementsByClassName('car__svg')[0] as HTMLElement;
            garageNumber.catchBtnStart(find, 'stopped', carSvg);
        });
    }
}

const raceReset = new RaceReset();
export default raceReset;
