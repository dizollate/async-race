class Flag {
    flag:HTMLImageElement;

    constructor() {
        this.flag = document.createElement('img');
    }

    render():HTMLImageElement {
        this.flag.src = 'https://images.vectorhq.com/images/previews/b37/red-flag-125953.png';
        this.flag.id = 'flag';
        return this.flag;
    }
}

export default Flag;
