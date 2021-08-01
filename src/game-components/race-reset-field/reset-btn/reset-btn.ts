class ResetBtn {
    resetBtn: HTMLButtonElement;

    constructor() {
        this.resetBtn = document.createElement('button');
    }

    render():HTMLButtonElement {
        this.resetBtn.id = 'reset-btn';
        this.resetBtn.innerText = 'Reset';
        return this.resetBtn;
    }
}

const resetBtn = new ResetBtn();
export default resetBtn;
