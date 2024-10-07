"use client";
import "./loginStyles.css";
import { FormLogin } from "@/components"
export default function LoginView():React.ReactElement{
    return(
        <main className="main-login">
            <FormLogin />
        </main>
    )
}