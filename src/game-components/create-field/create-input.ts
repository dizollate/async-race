class CreateInput {
    input:HTMLInputElement;

    constructor() {
        this.input = document.createElement('input');
    }

    render():HTMLElement {
        this.input.id = 'create__input';
        this.input.type = 'text';
        return this.input;
    }
}

const createInput = new CreateInput();
export default createInput;
