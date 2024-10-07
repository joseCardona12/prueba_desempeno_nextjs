"use client";
import "./formRegisterStyles.css";
import {GroupInput} from "../index";
import { Button } from "../UI";
import { useEffect, useState } from "react";
import { IFormRegister } from "@/interfaces/formRegisterInterface";
import { useTranslations } from "next-intl";
export default function FormLogin():React.ReactElement{
    const translation = useTranslations("SignUpView");
    const [alertState, setAlertState] = useState<boolean>(false);
    const formRegisterInitial: IFormRegister = { //Create new state intial for the formRegister
        email: "",
        username: "",
        password: "",
        name:"",
        phone: ""
    };
    const [formDataRegister, setFormDataRegister] = useState<IFormRegister>(formRegisterInitial);

    const handleChange = (event:React.ChangeEvent<HTMLInputElement>):void =>{
        const {name, value} = event.target;
        setFormDataRegister({
            ...formDataRegister,
            [name]: value
        });
        console.log(formDataRegister);
    };
    const handleClick = ():void =>{
        if(!formDataRegister.email || !formDataRegister.username || !formDataRegister.password || !formDataRegister.name || !formDataRegister.phone){
            setAlertState(true);
            return;
        }
    }

    useEffect(()=>{
        setAlertState(false)
    }, [formDataRegister]);
    return(
        <form className="form-register">
            <div className="register-title">
                <h2 className="title">{translation("titleForm")}</h2>
            </div>

            <GroupInput
            label={translation("fieldEmail")}
            type="email"
            name="email"
            value={formDataRegister.email}
            onChange={(e)=>handleChange(e)}
            alert="Please enter your email"
            stateAlert={alertState}
            placeholder="example@gmail.com"
            />

            <GroupInput
            label={translation("fieldUsername")}
            type="text"
            name="username"
            value={formDataRegister.username}
            onChange={(e)=>handleChange(e)}
            alert="Pleaser enter your username"
            stateAlert={alertState}
            placeholder="example123"
            />

            <GroupInput
            label={translation("fieldPassword")}
            type="password"
            name="password"
            value={formDataRegister.password}
            onChange={(e)=>handleChange(e)}
            alert="Please enter your password"
            stateAlert={alertState}
            placeholder="********"
            />

            <GroupInput
            label={translation("fieldName")}
            type="name"
            name="name"
            value={formDataRegister.name}
            onChange={(e)=>handleChange(e)}
            alert="Please enter your name"
            stateAlert={false}
            placeholder="example"
            />

            <GroupInput
            label={translation("fieldPhone")}
            type="phone"
            name="phone"
            value={formDataRegister.phone}
            onChange={(e)=>handleChange(e)}
            alert="Please enter your phone number"
            stateAlert={false}
            placeholder="+57 0123456789"
            />

            <Button
            type="button"
            text={translation("button")}
            onClick={handleClick}
            />
        </form>
    )
}