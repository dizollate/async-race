import garageNumber from './garage-components/garage-number';
import garageP from './garage-components/garage-p';

class GarageField {
    garageField:HTMLDivElement;

    constructor() {
        this.garageField = document.createElement('div');
    }

    render():HTMLDivElement {
        this.garageField.className = 'garage-field';
        this.garageField.appendChild(garageP.render());
        this.garageField.appendChild(garageNumber.render());
        return this.garageField;
    }
}

const garageField = new GarageField();
export default garageField;
