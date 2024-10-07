"use client";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";

export default function Router({children}: {children: React.ReactNode }){
    const pathname:string = usePathname();
    const router = useRouter();
    if(pathname === "/dashboard" && !localStorage.getItem("token")){
        router.push("/login");
        return <div>Not authorized</div>
    };
    return (
        {children}
    )
}