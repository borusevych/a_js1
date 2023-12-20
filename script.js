class Employee {
    constructor(name, age, salary){
        this.name = name;
        this.age = age;
        this.salary = salary;
    }
    get employee(){
        return `name: ${this.name}, age: ${this.age}, salary: ${this.salary}`
    }
    set employee (value){
        this.salary = value;
    }
}

class Programmer extends Employee{
    constructor(name, age, salary, lang){
        super(name, age, salary);
        this.lang = lang;
    }
    get employee(){
        return `name: ${this.name}, age: ${this.age}, salary: ${this.salary * 3}, lang: ${this.lang}`
    }
}

let employee1 = new Programmer('Doanld', 33, 1000, 'js');
let employee2 = new Programmer('Trump', 77, 35000, 'js');
console.log(employee1.employee);
console.log(employee2.employee);