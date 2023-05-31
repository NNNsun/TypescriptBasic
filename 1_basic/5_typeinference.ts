/**
 * Type Inference
 * 타입 추론: 커서를 위에올리면 알아서 타입을 추론함
 */

let stringType='string'
let booleanType=true
let numberType = 10

booleanType = false
const constStringType = 'const string'
const constBooleanType = true // const를 사용하면 좀더 구체적인 타입추론을 할수있음

let yuJin = {
    name: '안유진',
    age:2003
}
const yuJin2 = {
    name: '안유진',
    age:2003
}
yuJin2.name = '코드팩토리'
console.log(yuJin2)

const yuJin3 = {
    name: '안유진' as const,
    age:2003,
}
yuJin3.name = '안유진' //'안유진' 외의 값은 사용불가능
console.log(yuJin3.name)

/**
 * Array
 */
let numbers = [1, 2, 3, 4, 5]
let numbersAndString = [1, 2, 3, '4', '5', '6']

// numbers.push(6)
const number = numbers[0]
const nos = numbersAndString[0]

// tuple: index까지 추론
const twoNumbers = [1, 3] as const

// twoNumbers[0] = 10
// twoNumbers.push(100)
const first = twoNumbers[0]
