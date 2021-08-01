import './styles.scss';
import { Main } from './main';

window.onload = () => {
    const mainElement = document.getElementById('body');

    if (!mainElement) throw Error('Main root element not found');
    (() => new Main(mainElement))().start();
};
