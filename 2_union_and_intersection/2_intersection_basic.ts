/**
 * Intersection
 * And
 */

interface Human{
    name: string
    age:number
}

interface Contacts{
    phone: string
    address:string
}

type HumanAndContacts = Human & Contacts
let humanAndContacts: HumanAndContacts = {
    name: '코드팩토리',
    age: 32,
    phone: '01023525221',
    address:'경산'
}

type NumberAndString = number & string //never 타입: 절대존재할수없는 타입
// let numberAndString: NumberAndString='string'  
// let numberAndString: NumberAndString=never // '=' 이후의 value는 JS개념의 value이기때문에 error
