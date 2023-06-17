/**
 * Readonly Type
 */

interface Cat{
    name: string
    age:number
}
const nyaong: Cat = {
    name: '애옹',
    age:8
}

nyaong.name = '코드팩토리'
const bori: Readonly<Cat> = {
    name: '보리',
    age:7
}
bori.name // 가능
// bori.name='아이유' // 불가능

Object.freeze(bori)