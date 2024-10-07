declare module "next-auth" {
    interface User{
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
    interface Session{
        user: {
            id:string,
            email:string,
            username:string,
            name:string,
            phone:string,
            __v:number,
            accessToken:string
        }
}

declare module "next-auth/jwt"{
    interface JWT{
        tokenBack: string,
        name:string,
        email:string
    }
}