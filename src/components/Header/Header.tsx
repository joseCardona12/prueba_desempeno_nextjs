"use client";
import "./headerStyles.css";
import React from "react";
import Link from "next/link";
import { INavbarDataInterface } from "@/interfaces/navbarInterface";
import { FaHome,FaUserCheck,FaUser  } from "react-icons/fa";
import { SelectLanguage } from "../UI";
import { useTranslations } from "next-intl";

export default function Header():React.ReactElement {
    const translation = useTranslations("Header");
    const navbarData: INavbarDataInterface[] = [
        {name:translation("homeIcon"), href:"/", icon:<FaHome/>},
        {name:translation("loginIcon"), href:"/login", icon:<FaUserCheck />},
        {name:translation("signUpIcon"), href:"/sign-up", icon:< FaUser/>},
    ] 
    return (
        <header className="header-container">
            <div className="container-brand">
                <h2 className="brand-name">{translation("brand")}</h2>
            </div>
            <div className="container-navbar" style={{display:"flex", alignItems:"center", gap:"var(--padding-small)"}}>
                {navbarData.map(({name, href, icon}: INavbarDataInterface) => (
                    <Link key={name} href={href} style={{textDecoration:"none", color:"var(--paragraph-color)", display:"flex", alignItems:"center", gap:"var(--padding-small)"}}>
                        {icon}
                        {name}
                    </Link>
                ))}
                <SelectLanguage />
            </div>
        </header>
    )
}