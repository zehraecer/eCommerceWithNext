"use client"
import Products from "@/data/product.json"
import { ProductWrapper } from "../productWrapper";
import Error from "next/error";
import { notFound } from "next/navigation";
export default function ProductDetail({ params }) {
    const { id } = params
    const product = Products.find(product => product.id == id)
    if (product) {
        return (
            <ProductWrapper product={product} />
        )
    } else {
        return notFound()
    }

}