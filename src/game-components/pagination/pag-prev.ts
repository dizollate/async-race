import pageNumber from '../page-field/page-number';

class PagPrev {
    pagPrev:HTMLButtonElement;

    constructor() {
        this.pagPrev = document.createElement('button');
        this.pagPrev.addEventListener('click', this.pagP);
    }

    pagP() {
        pageNumber.uploadPageMinus();
        pageNumber.prevP();
    }

    render():HTMLButtonElement {
        this.pagPrev.className = 'pagination-prev';
        this.pagPrev.innerText = 'Prev';
        return this.pagPrev;
    }
}

const pagPrev = new PagPrev();
export default pagPrev;
