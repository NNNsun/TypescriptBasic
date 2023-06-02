/**
 * Overloading
 * 
 * 유지보수 측면에서 오버로딩을 만들지않고 따로 함수를 선언해서 사용하는것이 바람직하다
 */
/**
 * 파라미터를
 * 1) 하나를 받거나
 * 2) 3개를 받는 함수
 */
function stringOrStrings(members: string): string 
function stringOrStrings(member1:string,member2:string,member3:string):string
/**  
 * 만약에 하나의 파라미터만 입력받는다면
 * 아이돌 멤버을 하나의 스트링으로 입력받는다.
 * 예) '안유진,장원영,레이'
 * 
 * 만약 3개의 파라미터를 받는다면
 * 각각 아이돌을 각각의 파라미터의 값으로 입력한다.
 * 예) '안유진', '장원영'
 * 
 */
function stringOrStrings(memberOrMembers: string, member2?: string, member3?:string) {
    if (member2 && member3) {
        return `아이브: ${memberOrMembers}, ${member2}, ${member3}`
    } else {
        return `아이브: ${memberOrMembers}`
    }
}

console.log(stringOrStrings('안유진, 장원영, 레이'))
console.log(stringOrStrings('안유진'))