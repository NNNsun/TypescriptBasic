/**
 * Extension
 */

interface IName{
    name:string
}

interface IIdol extends IName {
    age:number
}

const idol: IIdol = {
    name: '안유진',
    age:20
}

type TName = {
    name:string
}
type TIdol = TName & {
    age:number
}

const idol2: TIdol = {
    name: '아이유',
    age:20
}

interface IIdol2 extends TName{
    age:number
}
const idol3: IIdol2 = {
    name: '제니',
    age:29
}

type TIdol2 = IName & {
    age:number
}

const idol4: IIdol2 = {
    name: '지수',
    age:24
}

/**
 * extending multiple
 */

type DogName = {
    name:string
}

type DogAge = {
    age:number
}
type DogBreed = {
    breed:string
}

type Dog = DogName & DogAge & DogBreed 

const dog: Dog = {
    name: '코드팩토리',
    age: 32,
    breed:'푸들'
}

interface CatName{
    name: string
}
interface CatAge{
        age:number
}
interface Cat extends CatName, CatAge{
    breed: string
}

const cat: Cat = {
    name: '오리',
    age: 7,
    breed:'코리안 애옹이'
}

/**
 * Overriding
 */
type THeight = {
    height: number
}

type TRectangle = THeight & {
       height: string,
    width:number
}

// const rectangle: TRectangle = {
//     // height:20, never 타입
//     width:100
// }

// Union type을 사용한다면?
type TWidth = {
    width: number | string
}
type TRectangle2 = TWidth & {
    width: number
    height: number
}
const rectangle: TRectangle2 = {
    height: 100,
    width: 200, // never타입이 되지않고 number로 네로잉이 되었음
}

interface IHeight{
    height:number
}
// interface IRectangle extends IHeight{
//     height: string
//     width: number
// }

interface IWidth{
    width: number | string
}
interface IRectangle extends IWidth{
    height: number
    width: number | string // 부모와 같은 타입이거나 상세한 타입은 가능
}
