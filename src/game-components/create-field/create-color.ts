class CreateColor {
    input:HTMLInputElement;

    constructor() {
        this.input = document.createElement('input');
    }

    render():HTMLElement {
        this.input.id = 'create__color';
        this.input.type = 'color';
        return this.input;
    }
}
const createColor = new CreateColor();
export default createColor;
