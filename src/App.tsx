import React from 'react';
import './App.css';
import {RectangleInc, User} from 'encapsulation/encapsulation';
import {Developer, Employee} from 'inheritance/inheritance';
import {
    DeveloperPolimorhism,
    EmployeePolimorhism,
    PersonPolimorhism
} from 'polimorhism/polimorhism';
import {Car} from 'composition&aggregation/compasition&aggregation';


function App() {

    //инкапсуляция
    const rectangle = new RectangleInc(12, 22)
    const user = new User('Evgen', 'zhukavets')
    console.log(rectangle.width)
    console.log(user.id)

    //наследование
    const employee = new Employee('jon', 'kazl,', 2, 123, 8525814, 'fghkjdfgxfglfjg')
    const devEvgen = new Developer('Evgen', 'Zhukavets', 30, 123, 456845454, 'gfdgdfgdf', 'middle')
    console.log(employee)
    console.log(devEvgen.fullName)

    //Полиморфизм
    const person = new PersonPolimorhism('Viktor', 'Klimov', 32)
    const worker = new EmployeePolimorhism('Worker', 'Z.', 30, 123, 456, 'snils')
    const proger = new DeveloperPolimorhism('Proger', 'Z.', 30, 123, 456, 'snils', 'junior')

    const personList: PersonPolimorhism[] = [person, worker, proger]

    const massGreeting = (persons: PersonPolimorhism[]) => {
        for (let i = 0; i < persons.length; i++) {
            const person = persons[i]
            person.greeting()
        }
    }

    massGreeting(personList)

    //композиция, агрегация
    const bmw = new Car('')
    bmw.drive()

    

    return (
        <div className="App">
            <h3>Инкапсуляция</h3>
            <h3>наследование</h3>
            <h3>Полиморфизм</h3>
        </div>
    );
}

export default App;
