"use client"
import Link from "next/link"
import { Basket } from "./cart"
import { MyContext } from "@/app/context"
import { useContext } from "react"

export const Header = () => {
    const { cart, setCart, isClicked, setIsClicked, cartRef } = useContext(MyContext)
    return (
        <>

            <div className="header">
                <div className="headerLeft">
                    <div>
                        <span>Parla</span>
                    </div>
                    <div className="headerBar">
                        <Link href="/homePage">Anasayfa</Link>
                        <Link href="/products">Ürünler</Link>
                        <Link href="/products">Kategori</Link>
                        <Link href="/products">Contact</Link>
                    </div>
                </div>
                <div className="headerRight">
                    <img style={{ width: "20px", height: "20px", cursor: "pointer" }} src="../Shape.png" alt="" onClick={() => setIsClicked(!isClicked)} />
                    <img style={{ width: "50px", height: "50px" }} src="../avatar.png" alt="" />
                </div>
            </div>
            <div style={{ marginTop: "45px", border: "1px solid #E4E9F2" }}>
                <Basket />
            </div>
        </>
    )
}