import BtnRemove from './car-btns-name/btn-remove';
import BtnSelect from './car-btns-name/btn-select';
import CarName from './car-btns-name/car-name';

class BtnsAndName {
    btnsAndName: HTMLElement;

    constructor() {
        this.btnsAndName = document.createElement('div');
    }

    create(inputValue:string):HTMLElement {
        this.btnsAndName.id = 'btns__and__name';
        this.btnsAndName.appendChild(new BtnSelect().render());
        this.btnsAndName.appendChild(new BtnRemove().render());
        this.btnsAndName.appendChild(new CarName().render(inputValue));
        return this.btnsAndName;
    }

    render(inputValue:string):HTMLElement {
        this.btnsAndName.id = 'btns__and__name';
        this.btnsAndName.appendChild(new BtnSelect().render());
        this.btnsAndName.appendChild(new BtnRemove().render());
        this.btnsAndName.appendChild(new CarName().render(inputValue));
        return this.btnsAndName;
    }
}

export default BtnsAndName;
