/**
 * Generic in Promise
 */

const afterTwoSeconds = function () {
    return new Promise((resolve) => {
        setTimeout(()=>{
            resolve('done')
        },2000)
    })
}

const runner = async function () {
    const res = await afterTwoSeconds()
    console.log(res)
}
runner()

const afterOneSeconds = function (): Promise<string>{ // 비동기 return 값에 반환 타입 넣기 <string>으로 유추
       return new Promise((resolve) => {
        setTimeout(()=>{
            resolve('done')
        },1000)
    })
}
const runner2 = async function () {
    const res = await afterOneSeconds()
    console.log(res)
}

runner2()