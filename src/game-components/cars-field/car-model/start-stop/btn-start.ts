import garageNumber from "../../../garage/garage-components/garage-number";

class StartBtn {
    start:HTMLButtonElement;

    constructor() {
        this.start = document.createElement('button');
        this.start.addEventListener('click', this.startCar);
    }

    render():HTMLButtonElement {
        this.start.id = 'start';
        this.start.innerText = 'Start';
        return this.start;
    }

    startCar(e: MouseEvent) {
        const target = e.target as HTMLElement;
        const car = target!.closest('.car') as HTMLElement;
        const find = Number.parseInt(car.id, 10);
        const carSvg = car.getElementsByClassName('car__svg')[0] as HTMLElement;
        garageNumber.catchBtnStart(find, 'started', carSvg);
    }

    catchResponse(e:number, word:string, carSvg:HTMLElement) {
        async function hello(en:number, words:string, carSvgs:HTMLElement) {
            const response = await fetch(`http://127.0.0.1:3000/engine?id=${en}&status=${words}`);
            const jsons = await response.json();
            const { velocity, distance } = jsons;
            const time = distance / velocity;
            let count = 0;
            const interval = setInterval(async () => {
                carSvgs.style.left = `${count}%`;
                count += 0.25;
                if (count >= 85) {
                    clearInterval(interval);
                }
            }, time / 340);
        }
        hello(e, word, carSvg);
    }
}

export default StartBtn;
