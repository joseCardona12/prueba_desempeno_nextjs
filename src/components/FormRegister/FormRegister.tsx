"use client";
import {GroupInput} from "../index";
import { Button } from "../UI";
import { useState } from "react";
import { IFormRegister } from "@/interfaces/formRegisterInterface";
export default function FormLogin():React.ReactElement{

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
        console.log(formDataRegister);
    }
    return(
        <form>
            <div>
                <h2>Sign Up</h2>
            </div>

            <GroupInput
            label="Email: "
            type="email"
            name="email"
            value={formDataRegister.email}
            onChange={(e)=>handleChange(e)}
            />

            <GroupInput
            label="Username: "
            type="text"
            name="username"
            value={formDataRegister.username}
            onChange={(e)=>handleChange(e)}
            />

            <GroupInput
            label="Password: "
            type="password"
            name="password"
            value={formDataRegister.password}
            onChange={(e)=>handleChange(e)}
            />

            <GroupInput
            label="Name: "
            type="name"
            name="name"
            value={formDataRegister.name}
            onChange={(e)=>handleChange(e)}
            />

            <GroupInput
            label="Phone:"
            type="phone"
            name="phone"
            value={formDataRegister.phone}
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