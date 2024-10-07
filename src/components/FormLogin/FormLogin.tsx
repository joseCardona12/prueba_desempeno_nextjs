"use client";
import "./formLoginStyles.css";
import { IFormLogin } from "@/interfaces/formLoginInterface";
import {GroupInput} from "../index";
import { Button, InputAlert } from "../UI";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { loginService } from "@/services/authService";
import { IUserLogin } from "@/interfaces/userInteface";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
export default function FormLogin():React.ReactElement{
    const router = useRouter()
    const translation = useTranslations("LoginView");
    const formLoginInitial: IFormLogin = { //Create new state intial for the formLogin
        username: "",
        password: ""
    };
    const [formDataLogin, setFormDataLogin] = useState<IFormLogin>(formLoginInitial);
    const [alertState, setAlertState] = useState<boolean>(false);

    const handleChange = (event:React.ChangeEvent<HTMLInputElement>):void =>{
        const {name, value} = event.target;
        setFormDataLogin({
            ...formDataLogin,
            [name]: value
        });
    };
    const handleClick = async():Promise<void> =>{
        if(!formDataLogin.password || !formDataLogin.username){
            setAlertState(true);
            return;
        };
        const loginUser: IUserLogin | {message:string} | null = await loginService(formDataLogin.username, formDataLogin.password);
        const {data} = loginUser;
        if(!data || "message" in data){
            InputAlert(`${data.message}`, "error");
            return;
        }
        const {access_token,user} = data;
        localStorage.setItem("token", access_token);
        Cookies.set("AUTH_USER", JSON.stringify(user));
        router.push("/dashboard");
    }; 

    useEffect(()=>{
        setAlertState(false)
    }, [formDataLogin])
    return(
        <form className="form-login">
            <div className="login-title">
                <h2 className="title">{translation("titleForm")}</h2>
            </div>
            <GroupInput
            label={translation("fieldUsername")}
            type="text"
            name="username"
            value={formDataLogin.username}
            onChange={(e)=>handleChange(e)}
            alert="Please enter the username"
            stateAlert={alertState}
            placeholder="Example"
            />

            <GroupInput
            label={translation("fieldPassword")}
            type="password"
            name="password"
            value={formDataLogin.password}
            onChange={(e)=>handleChange(e)}
            alert="Please enter the password"
            stateAlert={alertState}
            placeholder="******"
            />
            <Link href={"/sign-up"}>{translation("textLink")}</Link>
            <Button
            type="button"
            text={translation("button")}
            onClick={handleClick}
            />
        </form>
    )
}