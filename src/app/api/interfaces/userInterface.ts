export interface IUserBack{
    accessToken: string,
    user: {
        _id:string,
        email:string,
        username:string,
        name:string,
        phone:string,
        __v:number
    }
}