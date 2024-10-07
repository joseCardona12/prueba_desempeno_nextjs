"use client";
import "./headerStyles.css";
import React from "react";
import Link from "next/link";
import { INavbarDataInterface } from "@/interfaces/navbarInterface";
import { FaHome,FaUserCheck,FaUser  } from "react-icons/fa";
import { SelectLanguage } from "../UI";


export default function Header():React.ReactElement {
    const navbarData: INavbarDataInterface[] = [
        {name:"Home", href:"/", icon:<FaHome/>},
        {name:"Login", href:"/login", icon:<FaUserCheck />},
        {name:"Sign Up", href:"/sign-up", icon:< FaUser/>},
    ] 
    return (
        <header className="header-container">
            <div className="container-brand">
                <h2 className="brand-name">storeCardona</h2>
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