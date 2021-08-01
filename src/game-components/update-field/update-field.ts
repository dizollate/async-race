import updateBtn from './update-btn';
import updateColor from './update-color';
import updateInput from './update-input';

class UpdateField {
    field:HTMLElement;

    constructor() {
        this.field = document.createElement('div');
    }

    render():HTMLElement {
        this.field.id = 'update__field';
        this.field.appendChild(updateInput.render());
        this.field.appendChild(updateColor.render());
        this.field.appendChild(updateBtn.render());
        return this.field;
    }
}

const updateField = new UpdateField();
export default updateField;
