"use strict";
class Vehicle {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.rented = false;
    }
    getMake() {
        return this.make;
    }
    getModel() {
        return this.model;
    }
    getYear() {
        return this.year;
    }
    isRented() {
        return this.rented;
    }
    setRented(value) {
        this.rented = value;
    }
    rent() {
        if (this.rented) {
            return `${this.make} ${this.model} is already rented.`;
        }
        else {
            this.rented = true;
            return `${this.make} ${this.model} has been rented for $${this.rentalRate()} per day.`;
        }
    }
    return() {
        if (this.rented) {
            this.rented = false;
            return `${this.make} ${this.model} has been returned.`;
        }
        else {
            return `${this.make} ${this.model} was not rented.`;
        }
    }
}
class Car extends Vehicle {
    constructor(make, model, year, numSeats) {
        super(make, model, year);
        this.numSeats = numSeats;
    }
    rentalRate() {
        return 50; // $50 per day
    }
    getNumSeats() {
        return this.numSeats;
    }
}
class Truck extends Vehicle {
    constructor(make, model, year, maxLoad) {
        super(make, model, year);
        this.maxLoad = maxLoad;
    }
    rentalRate() {
        return 100; // $100 per day
    }
    getMaxLoad() {
        return this.maxLoad;
    }
}
class Motorcycle extends Vehicle {
    constructor(make, model, year, engineSize) {
        super(make, model, year);
        this.engineSize = engineSize;
    }
    rentalRate() {
        return 30; // $30 per day
    }
    getEngineSize() {
        return this.engineSize;
    }
}
// Example usage:
const car = new Car('Honda', 'Civic', 2022, 5);
console.log(car.rent()); // "Honda Civic has been rented for $50 per day."
console.log(car.rent()); // "Honda Civic is already rented."
console.log(car.return()); // "Honda Civic has been returned."
const truck = new Truck('Ford', 'F-150', 2021, 5000);
console.log(truck.rent()); // "Ford F-150 has been rented for $100 per day."
console.log(truck.return()); // "Ford F-150 has been returned."
const motorcycle = new Motorcycle('Harley-Davidson', 'Sportster', 2020, 883);
console.log(motorcycle.rent()); // "Harley-Davidson Sportster has been rented for $30 per day."
console.log(motorcycle.return()); // "Harley-Davidson Sportster has been returned."
//# sourceMappingURL=app.js.map