/**
 * ./   현재폴더
 * ../14_namespace
 */

import Example from './1_export_default_1' // 'IdolModel'은 별칭일 뿐임

// const iu = new IdolModel('아이유', 23)
// console.log(iu) // Idol { age: 23, name: '아이유' }

// console.log(IdolModel)

// const cat: IdolModel = {
//     name: '냥냥이',
//     breed: '스코티시폴드'
// }
const yuJin = new Example.IdolModel('안유진', 23)