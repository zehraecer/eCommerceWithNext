"use client"
import Products from "@/data/product.json"
import Link from "next/link";
export default function GetProducts() {
    return (
        <>
            <div className="productsGrid">
                {Products.map(product => {
                    return (
                        <div key={product.id}>
                            <div className="product-one">
                                <Link href={`/products/${product.id}`} className="product-one-img">
                                    <img src={product.image} />
                                </Link>
                                <div className="product-one-first">
                                    <span>{product.name}</span>
                                    <p>{product.description}</p>
                                </div>
                                <div>
                                    <div className="product-one-second">

                                        <span>{product.price}₺</span>
                                        <p> stok:{product.stock}</p>
                                    </div>
                                    <span className="discountSpan">%{product.discount}  indirim</span>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </>
    )
}