import pageNumber from '../page-field/page-number';
import pagField from '../pagination/pagination-field';
import Car from './car-model';

class Cars {
    cars:HTMLElement;

    allSelect:NodeList;

    constructor() {
        this.cars = document.createElement('div');
        this.allSelect = document.querySelectorAll('#btn__select');
    }

    toFirst() {
        const cars = document.querySelectorAll('.car');
        for (let o = 0; o < cars.length; o++) {
            cars[o].classList.remove('none');
        }
        pageNumber.uploadPageMinus();
        pagField.removePag();
    }

    cons() {
        const cars = document.querySelectorAll('.car');
        const iOfPage = pageNumber.i;
        const end = iOfPage * 7;
        const start = end - 7;
        for (let o = 0; o < cars.length; o++) {
            if (cars[o] === undefined) break;
            cars[o].classList.add('none');
        }
        for (let o = start; o < end; o++) {
            if (cars[o] === undefined) break;
            cars[o].classList.remove('none');
        }
    }

    render():HTMLElement {
        this.cars.id = 'cars';
        return this.cars;
    }

    createFirstCar(inputValue:string, colorValue:string, id:string) {
        const idNum = Number.parseInt(id, 10);
        this.cars.appendChild(new Car().loadScreen(inputValue, colorValue, idNum));
    }

    createNewCar(inputValue:string, colorValue:string) {
        this.cars.appendChild(new Car().render(inputValue, colorValue));
    }
}
const cars = new Cars();
export default cars;
