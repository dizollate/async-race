class Table {
    table:HTMLElement;

    constructor() {
        this.table = document.createElement('div');
    }

    render():HTMLElement {
        this.table.id = 'table';
        this.table.classList.add('table');
        return this.table;
    }

    show():void {
        const table = document.getElementById('table');
        table?.classList.add('block');
    }

    hide():void {
        const table = document.getElementById('table');
        table?.classList.remove('block');
    }
}
const table = new Table();
export default table;
