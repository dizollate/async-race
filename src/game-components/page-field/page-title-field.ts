import pageNumber from './page-number';
import pageTitle from './page-title';

class PageField {
    pageField: HTMLDivElement;

    constructor() {
        this.pageField = document.createElement('div');
    }

    render():HTMLDivElement {
        this.pageField.className = 'page-field';
        this.pageField.appendChild(pageTitle.render());
        this.pageField.appendChild(pageNumber.render());
        return this.pageField;
    }
}

const pageField = new PageField();
export default pageField;
