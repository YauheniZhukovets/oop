export class RectangleInc {
    private _width;
    private _height;

    constructor(w: number, h: number) {
        this._width = w;
        this._height = h
    }

    get width() {
        return this._width
    }

    set width(value: number) {
        if (value <= 0) {
            this._width = 1;
        } else {
            this._width = value
        }
    }

    private calcArea() {
        return this._height * this._width
    }

    private calcPerimeter() {
        return (this._height + this._width) * 2
    }
}


export class User {
    private _username;
    private _password;
    private _id;


    constructor(username: string, password: string) {
        this._password = password;
        this._username = username;
        this._id = this.generateRandomId()
    }

    private generateRandomId() {
        return this.username + this.password + Math.floor(Math.random() * 100)
    }

    get username() {
        return this._username;
    }

    set username(value) {
        this._username = value;
    }

    get password() {
        return this._password;
    }

    set password(value) {
        this._password = value;
    }

    get id() {
        return this._id;
    }
}


