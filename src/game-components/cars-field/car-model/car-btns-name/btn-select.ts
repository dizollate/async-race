import updateBtn from '../../../update-field/update-btn';
import updateColor from '../../../update-field/update-color';
import updateInput from '../../../update-field/update-input';

class BtnSelect {
    btnSelect: HTMLButtonElement;

    constructor() {
        this.btnSelect = document.createElement('button');
        this.btnSelect.addEventListener('click', this.checkSelect);
    }

    render():HTMLButtonElement {
        this.btnSelect.id = 'btn__select';
        this.btnSelect.classList.add('car__btns');
        this.btnSelect.innerText = 'Select';
        return this.btnSelect;
    }

    checkSelect(e: MouseEvent) {
        const target = e.target as HTMLElement;
        const car = target!.closest('.car') as HTMLElement;
        const find = Number.parseInt(car.id, 10);
        updateBtn.catchId(find);
        updateBtn.catchCar(car!);
        const svgEl = car!.querySelector('g');
        const nameCar = car!.querySelector('#car__name')?.innerHTML;
        const fill = svgEl?.getAttribute('fill');
        updateInput.updateText(nameCar!);
        updateColor.updateCar(fill!);
    }
}

export default BtnSelect;
