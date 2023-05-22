export interface TableFill {
    title: string;
    className: string;
}
export class listDropdownVM {
    id: string;
    name: string;
    icon?: string;

    constructor() {
        this.id = 'all';
        this.name = '';
    }
}