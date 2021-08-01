import garageNumber from '../../../garage/garage-components/garage-number';

class BtnRemove {
    btnRemove:HTMLButtonElement;

    constructor() {
        this.btnRemove = document.createElement('button');
        this.btnRemove.addEventListener('click', this.removeCar);
    }

    render():HTMLButtonElement {
        this.btnRemove.id = 'btn__remove';
        this.btnRemove.classList.add('car__btns');
        this.btnRemove.innerText = 'Remove';
        return this.btnRemove;
    }

    async removeCar(e: MouseEvent) {
        const target = e.target as Element;
        const car = target!.closest('.car');
        const find = Number.parseInt(car!.id, 10);
        const response = await fetch(`http://127.0.0.1:3000/garage/${find}`, {
            method: 'DELETE',
          });
        car!.remove();
        garageNumber.minus();
    }
}

export default BtnRemove;
