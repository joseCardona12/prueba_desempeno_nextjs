"use client";
import { IProduct } from "@/interfaces/productInterface";
import { getProductsService } from "@/services/productService";
import { useEffect, useState } from "react";
import { SectionCard } from "@/components";
import { InputAlert } from "@/components/UI";

export default function Dashboard():React.ReactElement{
    const initialProducts: IProduct[] = [{
        id: 0,
        title:"",
        price:0,
        description: "",
        category: "",
        image:"",
        rating: {
            rate: 0,
            count: 0
        }
    }];

    const [products, setProducts] = useState<IProduct[]>(initialProducts);
    useEffect(()=>{
        const getProducts = async() =>{
            const data = await getProductsService(localStorage.getItem("token"));
            if(!data || "message" in data){
                InputAlert(`${data.message}`, "error");
                return;
            }
            setProducts(data)
        };
        getProducts();
    }, [])
    return(
       <main className="content-dashboard">
        <h2>Products</h2>
        <SectionCard data={products} />
       </main>
    )
}