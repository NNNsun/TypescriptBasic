/**
 * Abstract class: 추상화, 인스턴스화를 못하게하는 것이 목적!, 공유되는 값
 */

abstract class ModelWithId{
    id: number
    
    constructor(id: number) {
        this.id=id
    }
}

// 직접 선언 불가능
// const modelWithId = new ModelWithId(123)

class Product extends ModelWithId{

}
const product = new Product(1)
product.id

abstract class ModelWithAbstractMethod{
    abstract shout(name:string):string
}

// 상속을 받았을때 메서드의 구현을 강제 할 수 있다
class Person extends ModelWithAbstractMethod{
    shout(name: string): string {
        return '소리질러!@'
    }
}