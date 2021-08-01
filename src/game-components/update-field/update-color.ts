class UpdateColor {
    input:HTMLInputElement;

    constructor() {
        this.input = document.createElement('input');
    }

    render():HTMLElement {
        this.input.id = 'update__color';
        this.input.type = 'color';
        return this.input;
    }

    updateCar(e:string) {
        this.input.value = `${e}`;
    }
}

const updateColor = new UpdateColor();
export default updateColor;
