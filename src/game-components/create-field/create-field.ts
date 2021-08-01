import createBTn from './create-btn';
import createColor from './create-color';
import createInput from './create-input';

class CreateField {
    field:HTMLElement;

    constructor() {
        this.field = document.createElement('div');
    }

    render():HTMLElement {
        this.field.id = 'create__field';
        this.field.appendChild(createInput.render());
        this.field.appendChild(createColor.render());
        this.field.appendChild(createBTn.render());
        return this.field;
    }
}
const createField = new CreateField();
export default createField;
