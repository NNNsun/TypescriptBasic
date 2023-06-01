/**
 * Union Basics
 * 유니언은 TS에서 타입을 병합 할 수 있는 수많은 방법중 하나이다.
*/

type StringOrBooleanType = string | boolean

let stringOrBooleanType: StringOrBooleanType = '아이브'
stringOrBooleanType = true

// stringOrBooleanType = undefined

type StrBoolNullType = string | boolean | null

type StateTypes = 'DONE' | 'LOADING' | 'ERROR'

let state: StateTypes = 'DONE'
state = 'LOADING'
// state ='INITIAL'

/**
 * 리스트의 유니언
 * 
 */
// 모두 string으로 구성된 리스트 또는 모두 boolean으로 구성된 리스트
type StringListOrBooleanList = string[] | boolean[]
let stringListOrBooleanList:StringListOrBooleanList = [
    '아이유',
    '김고은',
    '박소담'
]

stringListOrBooleanList = [
    true,
    false,
    false,
    true,
]
// type을 섞어서 사용 가능
type StrOrNumberList = (string | number )[]

let stringOrNumberList : StrOrNumberList = [
    'ddd',
    '아이유',
    1,2,3,
]

/**
 * Interface로 사용하는 union
 */

interface Animal{
    name: string
    age:number
}

interface Human{
    name: string
    age: number
    address:string
}

type AnimalOrHuman = Animal | Human

let animalOrHuman: AnimalOrHuman = {
    name: '최치호',
    age: 32,
    address:'대한민국'
} // Human

animalOrHuman = {
    name: '오리',
    age:9
} // animal

// 이미 type이 유추 되면 앞으로 해당 type으로 고정된다. 단 as Human으로 casting하면 type이 바뀐다.


// 서로 관계가 없는 유니언을 선언하면 어떻게 되는가?
type Person = {
    name: string,
    age: number
}
type Cat = {
    breed: string,
    country: string
}
type PersonOrCat = Person | Cat // Union은 합집합의 개념이다

const personOrCat: PersonOrCat = { // 최소한 어떤 type이든 모두 충족시켜야한다.
    name: '코드팩토리',
    age: 32,
    breed: '요크셔테리어',
    country:'영국'
}