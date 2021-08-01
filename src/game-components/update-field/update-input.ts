class UpadateInput {
    input: HTMLInputElement;

    constructor() {
        this.input = document.createElement('input');
    }

    render():HTMLElement {
        this.input.id = 'update__input';
        this.input.type = 'text';
        return this.input;
    }

    updateText(e:string) {
        this.input.value = `${e}`;
    }
}

const updateInput = new UpadateInput();
export default updateInput;
