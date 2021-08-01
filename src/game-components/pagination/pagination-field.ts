import pagNext from './pag-next';
import pagPrev from './pag-prev';

class PagField {
    pagField:HTMLElement;

    constructor() {
        this.pagField = document.createElement('div');
    }

    addPag():void {
        this.pagField.classList.add('block');
    }

    removePag():void {
        this.pagField.classList.remove('block');
    }

    render():HTMLElement {
        this.pagField.className = 'pagination-field';
        this.pagField.appendChild(pagPrev.render());
        this.pagField.appendChild(pagNext.render());
        return this.pagField;
    }
}

const pagField = new PagField();
export default pagField;
