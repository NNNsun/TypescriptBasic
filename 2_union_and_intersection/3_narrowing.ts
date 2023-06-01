/**
 * Narrowing
 * 
 * Narrowing은 Union 타입에서 더욱 구체적인 타입으로
 * 논리적으로 유추 할 수 있게 되는 것을 의미한다.
 */
// let numberOrString: number | string = 'Code Factory' // 타입이 두개여도 값을 통해 유추 "narrowing이 되었음"
// numberOrString
// const decimal = 12.3452
// console.log(decimal.toFixed(2)) //12.35

/**
 * Narrowing 종류
 * 
 * 1) Assignment Narrowing
 * 2) typeof Narrowing
 * 3) Truthiness Narrowing
 * 4) Equality Narrowing
 * 5) in operator narrowing
 * 6) instanceof narrowing
 * 7) discriminated union narrowing (차별된 유니언 내로잉)
 * 8) exhaustiveness checking
 */

// (1) aAssignment Narrowing
// 특정 값을 할당해서 내로잉
let numOrString: number | string = '아이유'

numOrString.toString()

// (2) typeof narrowing 
numOrString = Math.random() > 0.5 ? 1123 : '아이유'

if (typeof numOrString === 'string') {
    numOrString // string
} else {
    numOrString // number
}
// (3) Truthiness Narrowing
let nullOrString: null | string[] = Math.random() > 0.5 ? null : ['아이유', '레드벨벳']

if (nullOrString){
    nullOrString // string[]
} else {
    nullOrString //null
}

//(4) Equality Narrowing

let numOrString2: number | string = Math.random() > 0.5 ? 123 : '아이유'
let stringOrBool2: string | boolean = Math.random() > 0.5 ? '아이브' : true

if (numOrString2 === stringOrBool2) { 
    numOrString2 //같은 type의 경우를 유추
} else {
    numOrString2 // string | boolean (union타입)
    stringOrBool2
}

let numberOrStringOrNull: number | string | null = Math.random() > 0.5 ? 1123 : Math.random() > 0.5 ? '안유진' : null

if (typeof numberOrStringOrNull == 'number') {
    numberOrStringOrNull // number
} else {
    numberOrStringOrNull
}

// (5) in operator narrowing
interface Human{
    name: string
    age: number
}

interface Dog{
    name: string
    type: string
}

let human: Human = {
    name: '안유진',
    age:23,
}
let dog: Dog = {
    name: '오리',
    type:'꽥꽥',
}

let humanOrDog: Human | Dog = Math.random() > 0.5 ? human : dog

console.log('name' in human) // 존재하는 key값을 알수있다

if ('type' in humanOrDog) { // type은 Dog interface에만 있음
    humanOrDog // Dog
} else {
    humanOrDog // Human
}

// (6) instanceof narrowing
let dateOrString: Date | string = Math.random() > 0.5 ? new Date() : '코드팩토리'
if (dateOrString instanceof Date) {
    dateOrString // Date
} else {
    dateOrString // string
}
// (7) Discriminated Union Narrowing ⭐️
// interface들의 공통 성질을 정의할때, 하나의 interface로 묶는 것이 아니라
// interface는 하나의 성질만 가지고 있고, union type으로 공통 interface를 만들어 줘야 정확히 유추하는데 유리하다
// 잘못된 예시입니다❗️
interface Animal{
    type: 'dog' | 'human'
    height?: number // ?를 붙이는 것은 좋은 방법이 아니다!
    breed?:string
}
let animal: Animal = Math.random() > 0.5 ?
    {
        type: 'human',
        height:177,
    } : {
        type: 'dog',
        breed:'꽥꽥'
    }

if (animal.type === 'human') {
    animal.height
} else {
    animal.breed
    animal.height
}

interface Human2{
    type: 'human',
    height:number
}

interface Dog2{
    type: 'dog',
    breed:string
}

interface Fish2{
    type: 'fish'
    length:number
}

type HumanOrDog2 = Human2 | Dog2 | Fish2

let humanOrDog2: HumanOrDog2 = Math.random() > 0.5 ?
    {
        type: 'human',
        height:177,
    } : Math.random()>0.5? {
        type: 'dog',
        breed:'꽉꽉',
    } : {
            type: 'fish',
        length:12
    }
if (humanOrDog2.type === 'human') {
    humanOrDog2
} else {
    humanOrDog2
}

// (8) Exhaustiveness Checking
switch (humanOrDog2.type) {
    case 'human':
        humanOrDog2
        break
    case 'dog':
        humanOrDog2
        break
    case 'fish':
        humanOrDog2
        break
    default:
        humanOrDog2 // never: 그어떤 type도 될수없는 경우
        const _check: never = humanOrDog2 // type이 추가 삭제가 된경우 error를 발생
        break
}