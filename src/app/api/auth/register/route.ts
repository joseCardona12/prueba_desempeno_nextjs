import verifyData from "@/utils/verifyData";
import { NextRequest, NextResponse } from "next/server";
import { loginUserService } from "../../services/loginService";


export async function POST(req:NextRequest):Promise<NextResponse>{
    try{
        const {username,password} = await req.json();
        const dataVerify = verifyData(username,password);
        if(!dataVerify)return NextResponse.json({message: "Is required all params"}, {status: 401});
        const data = await loginUserService({username,password});
        return NextResponse.json({data}, {status:200})

    }catch(error:unknown){
        return NextResponse.json({error}, {status:500})
    }
}