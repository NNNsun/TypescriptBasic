/**
 * Reflection Metadata
 */
import 'reflect-metadata'

const iu = {
    name: '아이유',
    age: 32,
    nationality:'korean'
}
console.log(iu)

/**
 * 파라미터의 정의
 * 
 * 1) 메타테이터의 키
 * 2) 메타테이터 키에 저장할 값
 * 3) 메타테이터를 저장할 객체
 * 4) 메타테이더를 젖아할 객체의 프로퍼티
 * 
 * 4번은 필수가 아니다.
 * 
 * 메타데이터가 무엇인가? - 데이터에 대한 데이터
 */
Reflect.defineMetadata('test-meta', 123, iu)
console.log(iu)
console.log(Reflect.getMetadata('test-meta', iu))

Reflect.defineMetadata('test-meta', 456, iu) // 같은 키에 값을 다르게 입력 -> 덮어씌우기
console.log(Reflect.getMetadata('test-meta', iu))

Reflect.defineMetadata('meta2', 789, iu)
console.log(Reflect.getMetadata('meta2', iu))
Reflect.defineMetadata('meta2', { name: '코드팩토리' }, iu) // 객체를 메타데이터에 저장
console.log(Reflect.getMetadata('meta2', iu))

/**
 * 프로퍼티에 저장하기
 */
Reflect.defineMetadata('object-meta', 999, iu, 'name')
console.log(Reflect.getMetadata('object-meta', iu,'name'))
// 프로퍼티를 메타데이터에서 삭제
Reflect.deleteMetadata('object-meta', iu, 'name')
console.log(Reflect.getMetadata('object-meta', iu, 'name')) // undefined

// 특정 프로퍼티가 메타데이터에 있는지 확인
console.log(Reflect.hasMetadata('object-meta', iu, 'name')) // false

// 메타데이터 key 목록
console.log(Reflect.getMetadataKeys(iu))
console.log(Reflect.getMetadataKeys(iu, 'name'))

Reflect.defineMetadata('prototype-data', '프로토타입 메타예요!', Object.getPrototypeOf(iu)) // Object(모든 객체의 부모)
console.log(Reflect.getMetadataKeys(iu)) // [ 'test-meta', 'meta2', 'prototype-data' ]
console.log(Reflect.getOwnMetadataKeys(iu)) // [ 'test-meta', 'meta2' ]