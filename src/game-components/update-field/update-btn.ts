import updateColor from './update-color';
import updateInput from './update-input';

class UpdateBTn {
    btn:HTMLElement;

    car: HTMLElement | null;

    id: number | null;

    constructor() {
        this.btn = document.createElement('button');
        this.car = null;
        this.id = null;
    }

    render():HTMLElement {
        this.btn.id = 'update__btn';
        this.btn.innerText = 'UPDATE';
        this.btn.addEventListener('click', async () => {
            const response = await fetch(`http://127.0.0.1:3000/garage/${this.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    "name": `${updateInput.input.value}`,
                    "color": `${updateColor.input.value}`,
                }),
              });
            this.car!.querySelector('g')?.setAttribute('fill', `${updateColor.input.value}`);
            const nameCar = this.car!.querySelector('#car__name') as HTMLElement;
            nameCar.innerHTML = updateInput.input.value;
            updateColor.input.value = '#000000';
            updateInput.input.value = '';
        });
        return this.btn;
    }

    catchId(id:number) {
        this.id = id;
    }

    catchCar(selectCar: HTMLElement) {
        this.car = selectCar;
    }
}
const updateBtn = new UpdateBTn();
export default updateBtn;
