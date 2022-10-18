class User {
    username!: string
    age!: number
}

class Car {

}

export interface Repository<T> {
    create: (obj: T) => T
    get: () => void
    delete: (obj: T) => T
    update: (obj: T) => T
}

class UserRepo implements Repository<User> {
    create(obj: User): User {
        return obj
    }

    delete(obj: User): User {
        return obj
    }

    get(): void {
    }

    update(obj: User): User {
        return obj
    }
}

class CarRepo implements Repository<Car>{
    create(obj: Car): Car {
        return obj;
    }

    delete(obj: Car): Car {
        return obj;
    }

    get(): void {
    }

    update(obj: Car): Car {
        return obj;
    }
    
}