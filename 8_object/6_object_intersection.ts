/**
 * Object Intersection
 */

type PrimitiveIntersection = string & number

type PersonType = {
    name: string
    age: number
}
type CompanyType = {
    company: string
    companyRegistrationNumber: string
}
type PersonAndCompany = PersonType & CompanyType

const jisoo: PersonAndCompany = {
    name: '지수',
    age: 23,
    company: 'YG',
    companyRegistrationNumber:'xxxyyyzzzz'
}
type PetType = {
    petName: string
    petAge:number
}

type CompanyOrPet = PersonType & (CompanyType | PetType) // 필수 & 유니언

const companyOrPet: CompanyOrPet = {
    // PersonType
    name: '코드팩토리',
    age: 32,
    
    // companyType
    company: 'SM',
    companyRegistrationNumber: 'zxzxz',

    // petType
    petName: '오리',
    petAge:2
}