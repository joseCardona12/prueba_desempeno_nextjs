"use client";
import "./formRegisterStyles.css";
import {GroupInput} from "../index";
import { Button } from "../UI";
import { useEffect, useState } from "react";
import { IFormRegister } from "@/interfaces/formRegisterInterface";
export default function FormLogin():React.ReactElement{
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
                <h2 className="title">Sign Up</h2>
            </div>

            <GroupInput
            label="Email"
            type="email"
            name="email"
            value={formDataRegister.email}
            onChange={(e)=>handleChange(e)}
            alert="Please enter your email"
            stateAlert={alertState}
            placeholder="example@gmail.com"
            />

            <GroupInput
            label="Username"
            type="text"
            name="username"
            value={formDataRegister.username}
            onChange={(e)=>handleChange(e)}
            alert="Pleaser enter your username"
            stateAlert={alertState}
            placeholder="example123"
            />

            <GroupInput
            label="Password"
            type="password"
            name="password"
            value={formDataRegister.password}
            onChange={(e)=>handleChange(e)}
            alert="Please enter your password"
            stateAlert={alertState}
            placeholder="********"
            />

            <GroupInput
            label="Name"
            type="name"
            name="name"
            value={formDataRegister.name}
            onChange={(e)=>handleChange(e)}
            alert="Please enter your name"
            stateAlert={false}
            placeholder="example"
            />

            <GroupInput
            label="Phone"
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
            text="Register"
            onClick={handleClick}
            />
        </form>
    )
}