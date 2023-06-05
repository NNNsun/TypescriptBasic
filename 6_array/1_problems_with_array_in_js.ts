/**
 * Problems with Array in JS
 */

const numbers = [1, 2, '3', 4, 5] // JS는 아무생각없음

let strings: string[] = ['1', '2', '3'] // TS 방식

// strings.push(1) // 에러
// (type1|type2) = 둘다 가능
let stringsOrNumbersArray: (string | number)[]=[
    1,
    '2',
    3,
    '4',
    5
]
// type1|type2 = 둘중 하나의 타입만 가능
let stringArrNumberArr: string[] | number[] = [
    1,
    2,
    3,
]
stringArrNumberArr=[
    '1',
    '2',
    '3',
]
let stringOrNumberArr: string | number[] = [
    1,2,3
]
stringOrNumberArr = '3'

let booleansArr = [true, false]
booleansArr.push(false)
// booleansArr.push(1) // 불가능

const onlyString = ['1', '2', '3']
const onlyNumbers = [1, 2, 3]
for (let i = 0; i < onlyString.length; i++){
    let item = onlyString[i] // item = string
}
for (let item of onlyNumbers) {
    
}
let number3 = onlyNumbers[0]
let number4 =onlyNumbers[9999] // 선언시엔 에러발생하지않음