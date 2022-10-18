//Композиция агрегация


class Engine {
    drive() {
        console.log('Двигатель работает')
    }
}

class Wheel {
    drive() {
        console.log('Колёса едут')
    }
}

class Freshener {

}

export class Car {
    engine: Engine
    wheels: Wheel[] = []
    freshener;

    constructor(freshener: Freshener) {
        //Агрегация
        this.freshener = freshener
        //композиция
        this.engine = new Engine()
        this.wheels.push(new Wheel())
        this.wheels.push(new Wheel())
        this.wheels.push(new Wheel())
        this.wheels.push(new Wheel())
    }

    //делегирование
    drive() {
        this.engine.drive()
        for (let i = 0; i < this.wheels.length; i++) {
            this.wheels[i].drive()
        }
    }
}