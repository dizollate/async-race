class GenerateBtn {
    generateBtn: HTMLButtonElement;

    constructor() {
        this.generateBtn = document.createElement('button');
    }

    render():HTMLButtonElement {
        this.generateBtn.id = 'generate-btn';
        this.generateBtn.innerText = 'Generate cars';
        return this.generateBtn;
    }
}

const generateBtn = new GenerateBtn();
export default generateBtn;
