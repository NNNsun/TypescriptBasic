/**
 * Generic in Interface
 */

interface Cache<T>{
    data: T[]
    lastUpdate:Date
}

const cache1: Cache<string> = {
    data: ['data1', 'data2'],
    lastUpdate:new Date()
}

// const cache2: Cache<number> = {
//     data: [1,2],
//     lastUpdate:new Date()
// }

interface DefaultGeneric<T = string>{ // 디폴드값 정의 가능
    data: T[]
}
const cache3: DefaultGeneric = {
    data:['123','456']
}