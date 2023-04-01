abstract class Vehicle {
  protected make: string;
  protected model: string;
  protected year: number;
  protected rented: boolean;

  constructor(make: string, model: string, year: number) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.rented = false;
  }

  getMake(): string {
    return this.make;
  }

  getModel(): string {
    return this.model;
  }

  getYear(): number {
    return this.year;
  }

  isRented(): boolean {
    return this.rented;
  }

  setRented(value: boolean): void {
    this.rented = value;
  }

  abstract rentalRate(): number;

  rent(): string {
    if (this.rented) {
      return `${this.make} ${this.model} is already rented.`;
    } else {
      this.rented = true;
      return `${this.make} ${this.model} has been rented for $${this.rentalRate()} per day.`;
    }
  }

  return(): string {
    if (this.rented) {
      this.rented = false;
      return `${this.make} ${this.model} has been returned.`;
    } else {
      return `${this.make} ${this.model} was not rented.`;
    }
  }
}

class Car extends Vehicle {
  private numSeats: number;

  constructor(make: string, model: string, year: number, numSeats: number) {
    super(make, model, year);
    this.numSeats = numSeats;
  }

  rentalRate(): number {
    return 50; // $50 per day
  }

  getNumSeats(): number {
    return this.numSeats;
  }
}

class Truck extends Vehicle {
  private maxLoad: number;

  constructor(make: string, model: string, year: number, maxLoad: number) {
    super(make, model, year);
    this.maxLoad = maxLoad;
  }

  rentalRate(): number {
    return 100; // $100 per day
  }

  getMaxLoad(): number {
    return this.maxLoad;
  }
}

class Motorcycle extends Vehicle {
  private engineSize: number;

  constructor(make: string, model: string, year: number, engineSize: number) {
    super(make, model, year);
    this.engineSize = engineSize;
  }

  rentalRate(): number {
    return 30; // $30 per day
  }

  getEngineSize(): number {
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