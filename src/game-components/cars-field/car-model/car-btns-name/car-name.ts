class CarName {
    carName: HTMLElement;

    constructor() {
        this.carName = document.createElement('div');
    }

    takeName(str:string) {
        this.carName.innerText = `${str}`;
    }

    render(inputValue:string):HTMLElement {
        this.carName.id = 'car__name';
        this.carName.innerText = `${inputValue}`;
        return this.carName;
    }
}

export default CarName;
