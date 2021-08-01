import garageNumber from "../../../garage/garage-components/garage-number";

class StopBtn {
    stop:HTMLButtonElement;

    constructor() {
        this.stop = document.createElement('button');
        this.stop.addEventListener('click', this.stopCar);
    }

    render():HTMLButtonElement {
        this.stop.id = 'stop';
        this.stop.innerText = 'Stop';
        return this.stop;
    }

    stopCar(e: MouseEvent) {
        const target = e.target as HTMLElement;
        const car = target!.closest('.car') as HTMLElement;
        const find = Number.parseInt(car.id, 10);
        const carSvg = car.getElementsByClassName('car__svg')[0] as HTMLElement;
        // requestVelosuity(find);
        garageNumber.catchBtnStart(find, 'stopped', carSvg);
        // async function requestVelosuity(e: number) {
        //     const response = await fetch(`http://127.0.0.1:3000/engine?id=${e}&status=stopped`);
        //     const jsons = await response.json();
        //     console.log(jsons)
        // }
    }
}

export default StopBtn;
