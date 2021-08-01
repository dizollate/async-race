import StartBtn from '../../cars-field/car-model/start-stop/btn-start';
import cars from '../../cars-field/cars';
import pagField from '../../pagination/pagination-field';

class GarageNumber {
    garageNumber:HTMLSpanElement;

    i: number;

    constructor() {
        this.garageNumber = document.createElement('span');
        this.i = 4;
        this.takeNum();
    }

    async takeNum() {
        const promise = await fetch('http://127.0.0.1:3000/garage');
        const take = await promise.json();
        this.i = take.length;
    }

    async catchBtnStart(e:number, word:string, carSvg:HTMLElement) {
        const response = await fetch(`http://127.0.0.1:3000/engine?id=${e}&status=${word}`);
        const jsons = await response.json();
        const { velocity } = jsons;
        return {velocity, word};
        // const time = distance / velocity;
        // let count = 0;
        // const interval = setInterval(async (i) => {
        //     carSvg.style.left = `${count}%`;
        //     count += 0.25;
        //     if (count >= 85) {
        //         clearInterval(interval);
        //     } else if (word === 'stopped') {
        //         carSvg.style.left = `${0} + %`;
        //         clearInterval(interval);
        //     }
        // }, time / 340);
    }

    plus() {
        this.i! += 1;
        this.uploadData();
    }

    minus() {
        this.i! -= 1;
        if (this.i === 7) {
            cars.toFirst();
        } else {
            this.uploadData();
        }
    }

    uploadData() {
        if (this.i! > 7) {
            pagField.addPag();
        } else {
            pagField.removePag();
        }
        cars.cons();
        this.garageNumber.innerText = `(${this.i})`;
    }

    render():HTMLSpanElement {
        this.garageNumber.className = 'garage-number';
        this.garageNumber.innerText = `(${this.i})`;
        return this.garageNumber;
    }
}

const garageNumber = new GarageNumber();
export default garageNumber;
