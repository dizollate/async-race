import pageNumber from '../page-field/page-number';

class PagNext {
    pagNext:HTMLButtonElement;

    constructor() {
        this.pagNext = document.createElement('button');
        this.pagNext.addEventListener('click', this.nextPage);
    }

    nextPage() {
        pageNumber.uploadPagePlus();
        pageNumber.nextP();
    }

    render():HTMLButtonElement {
        this.pagNext.className = 'pagination-next';
        this.pagNext.innerText = 'Next';
        return this.pagNext;
    }
}

const pagNext = new PagNext();
export default pagNext;
