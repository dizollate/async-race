import cars from '../cars-field/cars';
import garageNumber from '../garage/garage-components/garage-number';
import createColor from './create-color';
import createInput from './create-input';

class CreateBTn {
    btn:HTMLElement;

    constructor() {
        this.btn = document.createElement('button');
        this.btn.addEventListener('click', this.createCar);
    }

    render():HTMLElement {
        this.btn.id = 'create__btn';
        this.btn.innerText = 'CREATE';
        return this.btn;
    }

    async createCar() {
        const inputValue = createInput.input.value;
        const colorValue = createColor.input.value;
        cars.createNewCar(inputValue, colorValue);
        const response = await fetch('http://127.0.0.1:3000/garage', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "name": `${inputValue}`,
                "color": `${colorValue}`,
            }),
          });
        garageNumber.plus();
        createColor.input.value = '#000000';
        createInput.input.value = '';
    }
}

const createBtn = new CreateBTn();
export default createBtn;
