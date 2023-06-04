/**
 *  Loop holes of Any
 */

let number: number
number = 10;
// number.toUpperCase() Error
    
   // (number as any).toUpperCase()

const multiplyTwo = (x: number, y: number) => {
        return x*y
}
let args1:any='코드팩토리'
let args2: any = true

multiplyTwo(args1, args2)
//multiplyTwo('코드팩토리',true)

let iu: any = { name: '아이유', age: 30 } // 자동완성 안됨

const callbackRunner = (x: number, y: number, callback: any) => { //any는  타입으로 인한 에러를 일으키지않기때문에 리팩토링시 굉장히 위험하다
    return callback(x,y)
}
const callback = (x:number, y:number) => {
    return x*y
}

callbackRunner(5,4,callback)