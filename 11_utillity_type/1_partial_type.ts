/**
 * Partial Type
 */

interface Idol{
    name: string
    age: number
    groupName: string
}
const yuJin: Idol = {
    name: '안유진',
    age: 23,
    groupName:'아이브'
}

function updateIdol(original: Idol, updates:Partial<Idol>):Idol { // Partial: <Interface>의 특정 프로퍼티들만 변경 또는 빈값으로 변경
    return {
        ...original,
        ...updates
    }
}
console.log(updateIdol(yuJin, {
    age:27,
}))