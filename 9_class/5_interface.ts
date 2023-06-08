/**
 * Interface
 */

interface Animal{
    name: string
    age: number
    jump():string
}


class Dog implements Animal{
    name: string
    age: number
    constructor(name: string, age: number) {
        this.age = age
        this.name=name
    }
    jump(): string {
           return `${this.name}가 점프를 합니다!` 
    }
    dance() {
        
    }
}

let ori :any = new Dog('오리', 3)

function instanceOfAnimal(object: any): object is Animal{
    return 'jump' in object // in object: 객체안에 어떤 key가 있는지 확인할 때 사용
}
if (instanceOfAnimal(ori)) {
    ori
}

/**
 * 다중 인터페이스 구현
 */

interface Pet{
    legsCount: number
    bark():void
}
class Cat implements Animal, Pet{
    // Animal
    name: string
    age: number
    // Pet
    legsCount: number

    constructor(name: string, age: number, legsCount: number) {
        this.age=age,this.legsCount=legsCount, this.name=name
    }
    // Animal
    jump(): string {
      return `${this.name}이 점프를 합니다.`
    }
    bark(): void {
       console.log('애옹~')
    }
 
}
// 다중 implements
type AnimalAndPet = Animal & Pet
class Cat2 implements AnimalAndPet{
       // Animal
    name: string
    age: number
    // Pet
    legsCount: number

    constructor(name: string, age: number, legsCount: number) {
        this.age=age,this.legsCount=legsCount, this.name=name
    }
    // Animal
    jump(): string {
      return `${this.name}이 점프를 합니다.`
    }
    bark(): void {
       console.log('애옹~')
    }
}

// interface를 다중 implements 하려할때 중복 프로퍼티가 존재하는 지 확인해야함!
interface WrongInterface1{
    name:string
}
interface WrongInterface2{
    name:number
}

// class Person implements WrongInterface1, WrongInterface2{
//        중복의 경우 never타입이 되어버림
//     // name: string
//     // name:number
// }

class Idol{
    name: string
    age: number
    
    constructor(name: string, age: number) {
        this.age = age,
        this.name = name
    }
}

// constructor를 interface화 했음
interface IdolConstructor{
    new (name: string, age: number):Idol
}

function createIdol(constructor:IdolConstructor,name:string,age:number) {
    return new Idol(name,age)
    // return new constructor(name,age)
}
createIdol(Idol, '아이유', 32)
