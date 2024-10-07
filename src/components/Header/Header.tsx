"use client";
import React from "react";
import Link from "next/link";
import { INavbarDataInterface } from "@/interfaces/navbarInterface";
import { FaHome,FaUserCheck,FaUser  } from "react-icons/fa";
import "./headerStyles.css";


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
            <div className="container-navbar">
                {navbarData.map(({name, href, icon}: INavbarDataInterface) => (
                    <Link key={name} href={href}>
                        {icon}
                        {name}
                    </Link>
                ))}
            </div>
        </header>
    )
}