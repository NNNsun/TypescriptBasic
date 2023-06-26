/**
 * Export
 */

 class IdolModel{
    name: string
    age: number
    
    constructor(name: string, age: number) {
        this.age = age
        this.name=name
    }
}

const number = 12

interface ICat{
    name: string
    breed: string
}

export default {
    IdolModel,
    number
}