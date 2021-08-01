import garageNumber from "../../garage/garage-components/garage-number";

class RaceBtn {
    raceBtn: HTMLButtonElement;

    constructor() {
        this.raceBtn = document.createElement('button');
        this.raceBtn.addEventListener('click', this.race);
    }

    render():HTMLButtonElement {
        this.raceBtn.id = 'race-btn';
        this.raceBtn.innerText = 'Race';
        return this.raceBtn;
    }

    race() {
        const carsRace = document.querySelectorAll('.active_car');
        carsRace.forEach((i) => {
            const find = Number.parseInt(i.id, 10);
            const carSvg = i.getElementsByClassName('car__svg')[0] as HTMLElement;
            const distance = 500000;
            garageNumber.catchBtnStart(find, 'started', carSvg).then(async(data) => {
                const drive = await fetch(`http://127.0.0.1:3000/engine?id=${find}&status=drive`);
                const driveJsons = await drive.json();
                const {velocity} = data;
                const {word} = data;
                const time = distance / velocity;
                let count = 0;
                const interval = setInterval(async (i) => {
                carSvg.style.left = `${count}%`;
                count += 0.25;
                if (count >= 85) {
                    clearInterval(interval);
                 } else if (word === 'stopped') {
                carSvg.style.left = `${0} + %`;
                    clearInterval(interval);
            }
        }, time / 340);
            });
        });
    }
}

const raceBtn = new RaceBtn();
export default raceBtn;
