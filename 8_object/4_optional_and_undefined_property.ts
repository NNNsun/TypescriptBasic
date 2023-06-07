/**
 * Optional and Undefined Property
 */

interface Dog{
    name: string
    age: number
    breed?:string
}
const byulE: Dog={
    name: '별이',
    age: 2,
    breed:'치와와'
}
const ori: Dog={
    name: '오리',
    age: 4,
}

interface Cat{
    name: string
    age: number,
    breed?: string | undefined
}

const nabi: Cat = {
    name: '나비',
    age: 8,
}



