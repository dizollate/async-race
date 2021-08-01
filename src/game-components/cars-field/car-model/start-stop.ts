import StartBtn from './start-stop/btn-start';
import StopBtn from './start-stop/btn-stop';

class StartStop {
    startStop:HTMLElement;

    constructor() {
        this.startStop = document.createElement('div');
    }

    render():HTMLElement {
        this.startStop.id = 'start__stop';
        this.startStop.appendChild(new StartBtn().render());
        this.startStop.appendChild(new StopBtn().render());
        return this.startStop;
    }
}

export default StartStop;
