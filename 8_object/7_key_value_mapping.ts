/**
 * Key Value Mapping
 */
enum State{
    loading,
    done,
    error,
}

type GlobalApiStatus = {
    getUser: State
    paginateUsers: State | undefined
    banUser: State|null
    getPosts:State
}

type UserApiStatus = {
    getUser: State
    paginateUsers: State | undefined
    banUser: State|null
}
type UserApiStatus2={
    getUser:GlobalApiStatus['getUser']
    paginateUsers:GlobalApiStatus['paginateUsers']
    banUser:GlobalApiStatus['banUser']
}

type UserApiStatus3 = {
    [k in 'getUser' | 'paginateUsers' | 'banUser']: GlobalApiStatus[k]
    // getUser(key): GlobalApiStatus[k](value)
}

type PickedUserApiStatus = Pick<GlobalApiStatus, 'getUser' | 'banUser' | 'paginateUsers'>

// getPosts 키만 빼고 타입을 다시만들고 싶음
type OmitUserApiStatus = Omit<GlobalApiStatus, 'getPosts'>

/**
 * keyof
 */

type AllKeys = keyof GlobalApiStatus

const key: AllKeys = 'banUser' // GlobalApiStatus에 해당한는 key값을 ' '에 넣어야함

type KetOfUserApiStatus = {
    [k in keyof GlobalApiStatus]:GlobalApiStatus[k]
}

type KeyOfUserApiStatus2 = { // GlobalApiStatus에 있는 getPosts만 빼고 만들었음
    [k in Exclude<keyof GlobalApiStatus,'getPosts'>]:GlobalApiStatus[k]
}
type KeyOfUserApiStatus3 = { 
    [k in Exclude<keyof GlobalApiStatus,'getPosts'>]?:GlobalApiStatus[k]
}

interface LoadingStatus{
    type: 'loading'
    data:string[]
}

interface ErrorStatus{
    type: 'error'
    message:string
}

type FetchStatus = LoadingStatus | ErrorStatus
type StatusType= FetchStatus['type']
