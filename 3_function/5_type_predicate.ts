/**
 * Type Predicate
 */
function isNumber(input: any): input is number {

    // 반환되는 input은 'number'타입이다 => ⭐️ 정확한 타입을 유추&반환할수있다.
    return typeof input === 'number'
}

function isNumberExp(input: any): boolean {

    // 반환되는 input은 여전히 'any' 타입이다.
    return typeof input === 'number'
}

let number: any = 5

if (isNumber(number)) {
    number // number
}
if (isNumberExp(number)) {
    number // any
}

console.log(isNumber(10))

interface Doge{
    name: string
    age:number
}
interface Cat{
    name: string
    breed:string
}
type DogeOrCat = Doge | Cat

function isDoge(animal: DogeOrCat):animal is Doge {
    return(animal as Doge).age !== undefined
}
const doge: DogeOrCat = Math.random()>0.5? {
    name: '도지',
    age:3
} : {
        name: '오리',
        breed: '코리아 길냥이'
}
if (isDoge(doge)) {
    doge
} else {
    doge
}