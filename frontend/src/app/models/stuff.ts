export class Stuff {
    constructor(_id = "", id = "", name = "", quantity = 0, state = "") {
        this._id = _id;
        this.id = id;
        this.name = name;
        this.quantity = quantity;
        this.state = state;
    }
    _id: string;
    id: string;
    name: string;
    quantity: number;
    state: string;

}