"use client";
import Cookies from "js-cookie";
import {useRouter } from "next/navigation";
export default function SelectLanguage():React.ReactElement{
    const router = useRouter();
    const handleChange = (e:React.ChangeEvent<HTMLSelectElement>):void =>{
        Cookies.set("NEXT_LOCALE", e.target.value);
        router.refresh();
    };
    return(
        <select name="select-language" onChange={(e)=>handleChange(e)}>
            <option value="en">English</option>
            <option value="es">Spanish</option>
        </select>
    );
}