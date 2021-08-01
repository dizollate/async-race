import garageNumber from '../garage/garage-components/garage-number';
import BtnAndName from './car-model/car-btns&name';
import CarSvg from './car-model/car-svg';
import Flag from './car-model/flag';
import StartStop from './car-model/start-stop';

class Car {
    car: HTMLElement;

    constructor() {
        this.car = document.createElement('div');
    }

    loadScreen(name: string, color:string, i:number):HTMLElement {
        this.car.className = 'car';
        this.car.classList.add('active_car');
        this.car.id = `${i}`;
        if (parseInt(this.car.id, 10) > 7) {
            this.car.classList.remove('active_car');
            this.car.classList.add('none');
        }
        this.car.append(new BtnAndName().render(name));
        this.car.append(new StartStop().render());
        this.car.append(new CarSvg().render(color));
        this.car.append(new Flag().render());
        return this.car;
    }

    async idOfCar() {
        const promise = await fetch('http://127.0.0.1:3000/garage');
        const jsons = await promise.json();
        const obj = jsons[jsons.length - 1];
        this.car.id = obj.id + 1;
    }

    render(inputValue:string, colorValue:string) {
        this.car.className = 'car';
        this.idOfCar();
        setTimeout(() => {
            if (parseInt(this.car.id, 10) > 7) {
                this.car.classList.remove('active_car');
            } else {
                this.car.classList.add('active_car');
            }
        }, 1000);
        this.car.append(new BtnAndName().create(inputValue));
        this.car.append(new StartStop().render());
        this.car.append(new CarSvg().create(colorValue));
        this.car.append(new Flag().render());
        return this.car;
    }
}

export default Car;
