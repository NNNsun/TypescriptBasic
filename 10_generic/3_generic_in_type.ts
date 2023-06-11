/**
 * Generic in Type
 */
type GenericSimpleType<T> = T
const genericString: GenericSimpleType<string> = '코드팩토리'
//const genericString2:GenericSimpleType='코드팩토링' // 에러발생: 디폴트 타입을 명시해야함

interface DoneState<T>{
    data:T[]
}

interface LoadingState{
    requestedAt:Date
}
interface ErrorState{
    error:string
}

type State<T> = DoneState<T> | LoadingState | ErrorState

let state: State<string> = {
    data:['aaa','123']
}

state = {
    requestedAt: new Date()
}
state = { error: 'error' }

let state2: State <number> = { // 또는 디폴트 값을 number로 변경
    data:[123,456]
}