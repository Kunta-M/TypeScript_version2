// 1) создать интерфейс на основе user и протипизировать функции:

interface IUser {
    name: string;
    age: number;
    gender: string;
}

const user = {
    name: 'Max',
    age: 18,
    gender: 'male',
}

function sum (a: number, b: number): number {
    return a + b
}

function showSum (a: number, b: number): void {
    console.log(a + b);
}

function incAge (someUser: IUser, inc: number): IUser {
    someUser.age += inc;
    return someUser
}

console.log(sum(1, 2));
showSum(2, 3);
incAge(user, 2);

// 2)написать интерфейс Animal который описывает:
// -тип движения животного(плавает, ходит, бегает) типа стринг
// -что умеет говорить тип стринг
// -и функцию которая возвращает информацию о животном
//
// создать три класса Cat, Bird, Fish и имплементировать для каждого интерфейс Animal и переопредилить функцию


interface IAnimal {
    movement: string;
    sound: string;
    info (): string
}

class Cat implements IAnimal {
    movement: string;
    sound: string;

    constructor(movement: string, sound: string) {
        this.movement = movement;
        this.sound = sound;
    }

    info (): string {
        return `Cat ${this.movement} and say ${this.sound}`
    }
}

let cat = new Cat('couch', 'meow');
cat.info();

class Bird implements IAnimal {
    movement: string;
    sound: string;

    constructor(movement: string, sound: string) {
        this.movement = movement;
        this.sound = sound;
    }

    info (): string {
        return `Bird ${this.movement} and ${this.sound}`
    }
}

let bird = new Bird('fly', 'chirp');
bird.info();

class Fish implements IAnimal {
    movement: string;
    sound: string;

    constructor(movement: string, sound: string) {
        this.movement = movement;
        this.sound = sound
    }

    info (): string {
        return `Fich ${this.movement} and ${this.sound}`
    }
}

let fish = new Fish('swim', 'whist');
fish.info();

// 3) создать абстрактный класс Shape:
// добавить абстрактные методы perimeter() и area()
//
// создать два класса Triangle и Rectangle и унаследовать их от Shape
// переопределить для каждого класса методы под ваши фигуры
//
// кладем в массив экземпляры классов(количество может быть любым но мин 2)
// проходимся циклом по нему и и высчитываем площадь для каждой фигуры

abstract class Shape {
    abstract perimeter(): number;
    abstract area(): number;
}

class Triangle extends Shape {
    a: number;
    b: number;
    c: number;

    constructor(a: number, b: number, c: number) {
        super();
        this.a = a;
        this. b = b;
        this.c = c;
    }

    perimeter(): number {
        return this.a + this.b + this.c
    }

    area(): number {
        let p = this.perimeter()/2;

        return Math.sqrt(p*(p - this.a)*(p - this.b)*(p - this.c));
    }
}

let triangle = new Triangle(4, 8, 5);

class Rectangle extends Shape {
    a: number;
    b: number;

    constructor(a: number, b: number) {
        super();
        this.a = a;
        this.b = b;
    }

    perimeter(): number {
        return (this.a + this.b)*2
    }

    area(): number {
        return this.a * this.b;
    }
}

let rectangle = new Rectangle(4, 8);












