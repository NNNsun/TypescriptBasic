/**
 * Never Type
 */
// never 타입인 경우
// (1) 함수에서 에러를 던질때
function throwError(): never{
    throw Error()
}

// (2) 무한루프
function infiniteLoop() :never{
    while (true) {
        
    }
}
// (3) 존재 할 수 없는 인터섹션

type StringAndNumber = string & number

// never 타입으로 선언하면 어떤 타입의 값이든 넣을수 없다 => 일어날수가 없는 상황을 알려주는 뉘앙스
// let neverType: never = 10
// let neverType: never =undefined
// let neverType: never =null