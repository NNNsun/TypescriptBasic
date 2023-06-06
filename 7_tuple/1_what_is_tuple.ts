/**
 * Tuple: JS에선 없는 개념이지만 TS에선 빌드타임에 튜플기능으로 강제할수있음
 */

let iveTopMembers: string[] = ['안유진', '카리나', '조미연']

let numberAndStringTuple: [number, string] = [
    23,
    '코드팩토리',
]
numberAndStringTuple.push('아이유')
console.log(numberAndStringTuple)

let unmodifiableTuple: readonly [number, string] = [
    23,
    '코드팩토리'
]
// unmodifiableTuple.push() // readonly때문에 사용할 수 없음

/**
 * Tuple 유추하기
 */

let actresses = ['김고은', '박소담', '전여빈']
let actressesTuple = ['김고은', '박소담', '전여빈'] as const // 순서, 갯수, readonly로 구체적으로 타입 추론가능 
const actressesTupleConst = ['김고은', '박소담', '전여빈'] as const // 순서, 갯수, readonly로 구체적으로 타입 추론가능 

let stringArray: string[] = [
    ...actressesTuple,
    ...actressesTupleConst,
    // ...[1,2,3] 숫자는 못넣기때문에 에러발생
]
/**
 * Named Tuple: key와 type을 알수있음
 */
const namedTuple: [name: string, age:number] = [
    '코드팩토리',
    32,
]

/**
 * Assigning Tuple to Tuple
 * 
 * Tuple은 같은 타입끼리만 할당이 가능하다.
 */

const tuple1: [string, string] = ['아이유', '유애나']
const tuple2: [number, number] = [1, 2]
// let tuple3:[boolean,boolean] = tuple1
// let tuple4:[number,number,number] = tuple2

let tuple5: [number, number] = tuple2
/**
 * Tuple과 Array의 관계
 */

let ive: [string, string] = [// 구체적인 타입
    '장원영',
    '안유진'
]

// ive가 더 상세한 타입이기때문에 가능
let stringArr: string[] = ive // 덜구체적인 타입


// 반대는 불가능
// let ive2:[string,string] = stringArr 

/**
 * Multi Dimensional Tuple
 */
const tuple2D:[string,number][] = [
    ['코드팩토리', 32],
    ['카리나', 21],
    ['장원영', 19],
]