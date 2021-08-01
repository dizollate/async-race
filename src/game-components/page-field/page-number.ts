class PageNumber {
    pageNumber: HTMLSpanElement;

    i:number;

    constructor() {
        this.pageNumber = document.createElement('p');
        this.i = 1;
    }

    uploadPageMinus():void {
        this.i -= 1;
        if (this.i === 0) {
            this.i = 1;
            this.pageNumber.innerText = '#1';
        } else {
            this.pageNumber.innerText = `#${this.i}`;
        }
    }

    uploadPagePlus():void {
        this.i += 1;
        this.pageNumber.innerText = `#${this.i}`;
    }

    nextP() {
        const end = this.i * 7;
        const start = end - 7;
        const cars = document.querySelectorAll('.car');
        for (let o = 0; o < cars.length; o++) {
            if (cars[o] === undefined) break;
            cars[o].classList.add('none');
            cars[o].classList.remove('active_car');
        }
        for (let o = start; o < end; o++) {
            if (cars[o] === undefined) break;
            cars[o].classList.remove('none');
            cars[o].classList.add('active_car');
        }
    }

    prevP() {
        const end = this.i * 7;
        const start = end - 7;
        const cars = document.querySelectorAll('.car');
        for (let o = 0; o < cars.length; o++) {
            if (cars[o] === undefined) break;
            cars[o].classList.add('none');
            cars[o].classList.remove('active_car');
        }
        for (let o = start; o < end; o++) {
            if (cars[o] === undefined) break;
            cars[o].classList.remove('none');
            cars[o].classList.add('active_car');
        }
    }

    render():HTMLSpanElement {
        this.pageNumber.className = 'page-number';
        this.pageNumber.innerText = `#${this.i}`;
        return this.pageNumber;
    }
}

const pageNumber = new PageNumber();
export default pageNumber;
