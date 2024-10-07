import { ENDPOINT_AUTH_LOGIN } from './../../../connections/connections';
import { fetchApi } from "@/utils/fetchApi";
import { IUserBack } from "../interfaces/userInterface";

export async function loginUserService(user: {username:string, password:string}):Promise<IUserBack | {message:string}>{
    try{
        const data = await fetchApi(ENDPOINT_AUTH_LOGIN, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        });
        return data;
        
    }catch(error:unknown){
        return ({message:`Error with loginService ${error}`})
    }
}