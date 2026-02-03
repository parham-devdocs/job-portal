

export interface LoginInfo{
    userType:UserType
    email:string
    password:string
}
export interface RegisterInfo{
    userType:UserType
    name:string
    email:string
    password:string
}
type UserType = "employee" | "employer"