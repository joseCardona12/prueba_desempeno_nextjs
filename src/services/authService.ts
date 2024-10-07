import { ENDPOINT_AUTH_REGISTER } from "@/connections/connections";
import { IFormRegister, IUser } from "@/interfaces";
import { fetchApi } from "@/utils/fetchApi";

export const signupService = async(user:Partial<IFormRegister>):Promise<IUser | null | {message:string}> =>{
    try{
        const data = await fetchApi(ENDPOINT_AUTH_REGISTER, {
            method:"POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        });
        return data;

    }catch(error:unknown){
        return({message: `Error with the signUp ${error}`})
    }
}