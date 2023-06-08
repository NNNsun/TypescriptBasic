/**
 * readonly 프로퍼티
 */

class Idol{
    readonly name: string
    age: number
    constructor(name:string, age:number) {
        this.name = name
        this.age = age
    }
}

const yuJin = new Idol('안유진', 23)
yuJin.age = 32
// yuJin.name='코드팩토리' //readonly로 만들면 쉽게 바꾸지못하도록 할수있음, 접근, 변경 X