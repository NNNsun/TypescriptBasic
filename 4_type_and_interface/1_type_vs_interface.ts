/**
 * Type vs Interface
 */

// Object를 선언할때
interface IObject{
    x: number
    y: number
}
type TObject = {
    x: number
    y: number
}

// function을 선언할때
interface IFunction{
    (x: number, y: number): number
}

type TFunction = (x: number, y: number) => number

/**
 * Type에서는 할 수 있지만
 * interface에서는 할 수 없는 것들 
 */

// (1) primitive 타입 선언하기
type Name = string

// (2) union 타입 선언하기
type UnionType = string | number

// (3) primitive list 또는 tuple 타입 선언하기
type TupleType = [number, string]

/**
 * Interface에서는 할 수 있고
 * Type에서는 못하는 것
 */

// interface merging
interface IRectangle{
    height: number
}
interface IRectangle{
    width: number
}
let rectangle: IRectangle = { // 중복선언시 merging
    height: 200,
    width:100
}

/**
 *  interface Merging
 */

class Review{
    // 프로퍼티
    getY = (x: number) => { return x }
    
    // 메서드
    getX(x: number) {
        return x
    }
}

interface GetXnY{
    getX: (x: number) => number
    getY: (y: number) => number
}

interface GetXnY{
    getX: (x: number) => number // 프로퍼티 방식(함수로 표현가능)
    // getY: (y: string) => number
}

interface GetXnY2{
    getX(x: number): number // 메서드 방식
    getY(y:number):number
}
interface GetXnY2 {
    getX(x: number): number // 메서드 방식
    getY(y: string): number
}
const testMethod: GetXnY2 = {
    getX(x) {
        return x
    },
    getY(y) {
        return 1
    }
}