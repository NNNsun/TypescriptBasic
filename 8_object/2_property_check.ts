/**
 *  Property Check
 * 
 *  초과 속성 검사
 */
type TName = {
    name:string
}
type TAge = {
    age:number
}
const iu = {
    name: '아이유',
    age:30,
}
const testName: TName = iu // 초과되는 값이있어도 할당이 된다
const testAge:TAge=iu