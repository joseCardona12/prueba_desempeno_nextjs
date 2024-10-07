import { fetchApi } from '@/utils/fetchApi';
import { ENDPOINT_AUTH_PRODUCTS } from './../connections/connections';
import { IProduct } from "@/interfaces/productInterface";
export async function getProductsService(token:string | null):Promise<IProduct[] | {message:string}>{
    try{
        const data = await fetchApi(ENDPOINT_AUTH_PRODUCTS,{
            method: "GET",
            headers: {
                authorization: `Bearer ${token}`,
                "Content-Type": "application/json"
            }
        });
        return data;

    }catch(error:unknown){
        return ({message: "Error to get products"});
    }
}

export async function getProductService(idProduct:number, token:string):Promise<IProduct | {message:string}>{
    try{
        const data = await fetchApi(`${ENDPOINT_AUTH_PRODUCTS}${idProduct}`,{
            method: "GET",
            headers: {
                authorization: `Bearer ${token}`,
                "Content-Type": "application/json"
            }
        });
        return data;

    }catch(error:unknown){
        return ({message: "Error to get products"});
    }
}