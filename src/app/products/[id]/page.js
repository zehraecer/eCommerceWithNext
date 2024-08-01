"use client"
import Products from "@/data/product.json"
import { ProductWrapper } from "../productWrapper";
export default function ProductDetail({ params }) {
    const { id } = params
    const product = Products.find(product => product.id == id)
    console.log(product);
    return (
        <>
            <ProductWrapper product={product} />
        </>
    )
}