export interface IUser{
    id:string,
    email:string,
    username:string,
    name:string,
    phone: string
}

export interface IUserLogin{
    data: {
        access_token:string,
        user: {
        _id:string,
        email:string,
        username:string,
        name:string,
        phone:string,
        __v:number
        }
    }
}