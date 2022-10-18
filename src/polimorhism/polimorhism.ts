export class PersonPolimorhism {
    private _firstName;
    private _lastName;
    private _age;

    constructor(f: string, l: string, a: number) {
        this._firstName = f
        this._lastName = l
        this._age = a
    }

    public get fullName(){
        return `Фамилия-${this._lastName} Имя-${this._firstName}`
    }

    public greeting () {
        console.log(`Привет я человек и меня зовут ${this._firstName}`)
    }

    get firstName() {
        return this._firstName;
    }

    set firstName(value) {
        this._firstName = value;
    }

    get lastName() {
        return this._lastName;
    }

    set lastName(value) {
        this._lastName = value;
    }

    get age() {
        return this._age;
    }

    set age(value: number) {
        if (value < 0) {
            this._age = 0
        } else {
            this._age = value
        }
    }
}

export class EmployeePolimorhism extends PersonPolimorhism {
    private inn;
    private number;
    private snils;

    constructor(f: string, l: string, a: number, inn: number, number: number, snils: string) {
        super(f, l, a);
        this.inn = inn
        this.number = number
        this.snils = snils
    }

    public greeting () {
        console.log(`Привет я работник и меня зовут ${this.firstName}`)
    }

}

export class DeveloperPolimorhism extends EmployeePolimorhism {
    private level;

    constructor(f: string, l: string, a: number, inn: number, number: number, snils: string, level: string) {
        super(f, l, a, inn, number, snils);
        this.level = level
    }

    public greeting () {
        console.log(`Привет я прогер и меня зовут ${this.firstName}`)
    }

}
