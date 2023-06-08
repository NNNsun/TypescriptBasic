/**
 * Property Initialization
 */

class Person{
    // 일반적인 필수값 선언법
    name: string
    
    //초기값 제공 선언법
    age:number =13
    
    // optional 값 선언법
    pet?: string
    // type of undefined 선언법
    patAge:number|undefined

    constructor(name: string, pet?:string) {
        this.name = name
        this.pet=pet
    }
}
class RouteStack{
    stack!: string[] // 인스턴스화 할때 stack의 값이 무조건 있다고 보장!, 무조건 초기화된다고 알려줌
    constructor() {
        this.initialize()
    }
    initialize() {
        this.stack=[]
    }
}

const routeStack = new RouteStack()
console.log(routeStack)