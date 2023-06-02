/**
 * Defining Function
 */

// JS 방식
// function printName(name) {
//     console.log(name)
// }

// TS 방식
function printName(name: string) {
     console.log(name)
}

function returnTwoCouples(person1: string, person2: string) { // 파라미터 타입 명시
    return `${person1}과 ${person2}는 사귀고 있습니다.`
}
console.log(returnTwoCouples('아이유', '코드팩토리')) // 파라미터 갯수 체크

// returnTwoCouples('아이유',1) // 파리미터 타입 체크

/**
 * Optional Parameter ('?'사용)
 */
function multiplyOrReturn(x:number, y?: number) {
    if (y) {
        return x*y
    } else {
        return x
    }
}
console.log(multiplyOrReturn(10, 20))
console.log(multiplyOrReturn(10))

function multiplyOrReturn2(x: number, y: number = 20) {
    return x*y
}
console.log(multiplyOrReturn2(10)) // y를 안넣어도 *20이 실행된다
console.log(multiplyOrReturn2(10, 20))

/**
 * 나머지 매개변수
 */

function getInfiniteParameters(...args:string[] ) {
    return args.map((x)=>`너무좋아 ${x}`)
}
console.log(getInfiniteParameters('아이유', '아이브', '블랙핑크'))

/**
 * Return Type
 */

function addTwoNumbers(x: number, y: number) {
    return x+y
}
addTwoNumbers(10, 20)

function randomNumber() {
    return Math.random() > 0.5 ? 10 : '랜덤'
    
}
randomNumber() // 10|'랜덤'

function subtractTwoNumbers(x: number, y: number): number{
    return x-y    
}

const subtractTwoNumbersArrow = (x: number, y: number) => {
    return x-y
}
/**
 * 특수 반환 타입
 * void / never
 */
function doNotReturn():void {
    console.log('저는 반환을 하지 않습니다.')
   // return 3
    return // void
}
function neverEndingLoop(): never{
    while (true) {
        
    }
}
// throwError() // 무한하게 돌아가기때문에 반환되지않음 => never type

function throwError2(): never{
   throw Error()
}