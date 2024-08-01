"use client"
import Products from "@/data/product.json"
import Link from "next/link";

export default function GetProducts() {

    console.log(Products);

    return (
        <>
            <div className="productsGrid">
                {Products.map(product => {
                    return (
                        <Link href={`/products/${product.id}`} key={product.id}>
                            <div className="product-one">
                                <div className="product-one-img">
                                    <img src={product.image} />
                                </div>
                                <div className="product-one-first">
                                    <span>{product.name}</span>
                                    <p>{product.description}</p>
                                </div>
                                <div className="product-one-second">
                                    <span>{product.price}₺</span>
                                    <p> stok:{product.stock}</p>
                                </div>
                                <span>Sepette %{product.discount}  indirim</span>
                            </div>
                        </Link>
                    )
                })}
            </div>
        </>
    )
}