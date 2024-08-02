import { MyContext } from "@/app/context"
import { useContext, useEffect } from "react"

export const Basket = () => {
    const { cart, setCart, isClicked, setIsClicked, cartRef, reducedPrice, setReducedPrice } = useContext(MyContext)

    useEffect(() => {

        const showCart = () => {
            if (isClicked) {
                cartRef.current.style.display = "block"
            } else {
                cartRef.current.style.display = "none"
            }
        }
        showCart()
    }, [isClicked])
    return (
        <>
            <div className="basket" ref={cartRef}>
                <div className="cartSpan">
                    <span >Cart</span>
                </div>
                {cart.map(product => {

                    return (
                        <div key={product.id} className="basketDetail">
                            <div style={{ display: "flex", gap: "16px" }}>
                                <img style={{ width: "50px", height: "50px" }} src={`../${product.img}`} alt="" />
                                <div className="detailMiddle">
                                    <span className="fallSpan">{product.title}</span>
                                    <div className="detailMiddleOne">
                                        <span className="firstPrice">{reducedPrice}x <span>{product.piece}</span></span>
                                        <span className="totalPrice">$375.00</span>
                                    </div>
                                </div>
                            </div>
                            <img src="../bin.svg" alt="" />
                        </div>
                    )
                })}

                <div className="checkout">
                    <span>Checkout</span>
                </div>

            </div>
        </>
    )
}