/**
 * Unknown Type
 */
let anyValue: any
anyValue = 24
anyValue = '아이유'
anyValue =false
anyValue =[]
anyValue ={}
anyValue = null
anyValue = undefined

let unknownValue: unknown
unknownValue = 24
unknownValue = '아이유'
unknownValue =false
unknownValue =[]
unknownValue ={}
unknownValue = null
unknownValue = undefined

// let anyType: any = anyValue
// let unknownType: unknown = anyValue
// let arrayType: string[] = anyValue
// let ObjectType: {} = anyValue
// let nullType: null = anyValue
// let undefinedType: undefined = anyValue

// any, unknown을 제외한 타입의 변수에 값을 할당할 때에는 문제가 생긴다
// let anyType: any = unknownValue
// let unknownType: unknown = unknownValue
// let arrayType: string[] = unknownValue
// let ObjectType: {} = unknownValue
// let nullType: null = unknownValue
// let undefinedType: undefined = unknownValue

// 실행은 되지않음
anyValue.toUpperCase()
anyValue.name
new anyValue()

 // 처음부터 에러 발생
// unknownValue.toUpperCase()
// unknownValue.name
// new unknownValue()

function isString(target:unknown):target is string {
    return typeof target ==='string'
}

let testVal: unknown
if (isString(testVal)) {
    testVal
}
/**
 * Union Type
 */

type uOrString = unknown | string // unknown에 흡수된다
type uOrBoolean = unknown | boolean // unknown에 흡수된다
type uOrNumber = unknown | number // unknown에 흡수된다
type uOrAny = unknown | any // any에 흡수된다
type anyOrU = any | unknown // any에 흡수된다

/**
 * Intersection Type
 */

type uAndString = unknown & string // string
type uAndBoolean = unknown & boolean //boolean
type uAndNumber = unknown & number // number
type uAndAny = unknown & any // any
type anyAnd = any & unknown // any

/**
 * Operator 사용
 */
let number1: unknown = 10
let number2: unknown = 20

// 에러
// number1 + number2
// number1 - number2
// number1 / number2
// number1 * number2

// 가능
number1 === number2
number1 == number2 // type을 제외하고 같은지
number1 !== number2
number1 != number2// type을 제외하고 다르냐