class Employee {
    constructor(name, age, salary){
        this._name = name;
        this._age = age;
        this._salary = salary;
    }
    get name(){
        return this._name
    }
    get age(){
        return this._age
    }
    get salary(){
        return this._salary
    }
    set name (value){
        this._name = value;
    }
    set age (value){
        this._age = value;
    }
    set salary (value){
        this._salary = value;
    }
}

class Programmer extends Employee{
    constructor(name, age, salary, lang){
        super(name, age, salary);
        this._lang = lang;
    }
    get salary(){
        return this._salary * 3
    }
}

let employee1 = new Programmer('Doanld', 33, 1000, 'js');
let employee2 = new Programmer('Trump', 77, 35000, 'js');
console.log(employee1.name);
console.log(employee2.salary);