class PageTitle {
    pageTitle: HTMLParagraphElement;

    constructor() {
        this.pageTitle = document.createElement('p');
    }

    render():HTMLParagraphElement {
        this.pageTitle.className = 'page-title';
        this.pageTitle.innerText = 'Page';
        return this.pageTitle;
    }
}

const pageTitle = new PageTitle();
export default pageTitle;
