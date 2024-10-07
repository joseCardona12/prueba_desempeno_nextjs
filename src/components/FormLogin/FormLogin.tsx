"use client";
import "./formLoginStyles.css";
import { IFormLogin } from "@/interfaces/formLoginInterface";
import {GroupInput} from "../index";
import { Button } from "../UI";
import { useState } from "react";
export default function FormLogin():React.ReactElement{

    const formLoginInitial: IFormLogin = { //Create new state intial for the formLogin
        username: "",
        password: ""
    };
    const [formDataLogin, setFormDataLogin] = useState<IFormLogin>(formLoginInitial);

    const handleChange = (event:React.ChangeEvent<HTMLInputElement>):void =>{
        const {name, value} = event.target;
        setFormDataLogin({
            ...formDataLogin,
            [name]: value
        });
        console.log(formDataLogin);
    };
    const handleClick = ():void =>{
        if(!formDataLogin.username){
            alert("Please enter your username");
        }
    }
    return(
        <form className="form-login">
            <div className="login-title">
                <h2 className="title">Form Login</h2>
            </div>
            <GroupInput
            label="username"
            type="text"
            name="username"
            value={formDataLogin.username}
            onChange={(e)=>handleChange(e)}
            />

            <GroupInput
            label="password"
            type="password"
            name="password"
            value={formDataLogin.password}
            onChange={(e)=>handleChange(e)}
            />
            <Button
            type="button"
            text="Login"
            onClick={handleClick}
            />
        </form>
    )
}