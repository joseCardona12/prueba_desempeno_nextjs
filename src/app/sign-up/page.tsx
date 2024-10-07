"use client";
import "./signUpStyles.css";
import { FormRegister } from "@/components";
export default function SignUpView():React.ReactElement{
    return(
        <main className="main-register">
            <div className="register-content-hero">
                <h2>Welcome to Store</h2>
            </div>
            <FormRegister />
        </main>
    )
}