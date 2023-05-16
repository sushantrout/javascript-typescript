class Employee {
  constructor(
    public name: string,
    public age: number,
    public cast?: string,
    public gender = "male"
  ) {}
}

let emp = new Employee("Trupti", 23);
let emp1 = new Employee("Sushant", 23, "SC");
let emp2 = new Employee("SM", 23, "SC", "Other");

console.log(emp, emp1, emp2);

class Dog
{
    age: number
    breed: string    
    
    constructor(age: number, breed: string) 
    {
        this.age = age
        this.breed = breed
    }    
    
    getRelativeAge(): number
    {
        return this.age * 7
    }
}

let Luna = new Dog(2, 'Labrador');
console.log(Luna)
