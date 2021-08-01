class GarageP {
    garageP:HTMLParagraphElement;

    constructor() {
        this.garageP = document.createElement('p');
    }

    render():HTMLParagraphElement {
        this.garageP.className = 'garage-title';
        this.garageP.innerText = 'Garage';
        return this.garageP;
    }
}

const garageP = new GarageP();
export default garageP;
