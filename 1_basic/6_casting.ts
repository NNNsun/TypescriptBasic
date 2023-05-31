/**
 * Casting
 * 
 * TS에서 Casting을 하면 JS에서는 적용이 안된다.
 */

const codefactory = 'code factory' 
let testNumber = 3
console.log(codefactory.toUpperCase()) // CODE FACTORY


let sampleNumber:any=5
//console.log(sampleNumber.toUpperCase())
console.log(sampleNumber as string) // type 강제

let number = 5
console.group((number as any).toUpperCase())
