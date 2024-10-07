"use client";
import { useTranslations} from "next-intl";
import "./signUpStyles.css";
import { FormRegister } from "@/components";
export default function SignUpView():React.ReactElement{
    const translation = useTranslations("SignUpView");
    return(
        <main className="main-register">
            <div className="register-content-hero">
                <h2>{translation("title")}</h2>
            </div>
            <FormRegister />
        </main>
    )
}