/**
 * Required Type
 */

interface Dog {
    name: string
    age?: number
    country?: string
}
const requiredDog: Required<Dog> = { // 모든 프로퍼티를 입력
    name: '모찌',
    age: 7,
    country:'한국'
}