"use client"
import Products from "@/data/product.json"
import Link from "next/link";

export default function GetProducts() {

    console.log(Products);

    return (
        <>
            {Products.map(product => {
                return (
                    <Link href={`/products/${product.id}`}>
                        <div>
                            <span>{product.description}</span>
                            <img style={{ width: "100px", height: "100px" }} src={product.image} />
                        </div>
                    </Link>
                )
            })}
        </>
    )
}