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

    const deleteProduct = (element) => {
        let newCart = cart.filter(product => product.id != element)
        setCart(newCart)
    }

    if (cart.length > 0) {
        return (
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
                                        <span className="totalPrice">$ {(reducedPrice * product.piece).toFixed(2)}</span>
                                    </div>
                                </div>
                            </div>
                            <img style={{ cursor: "pointer" }} onClick={() => deleteProduct(product.id)} src="../bin.svg" alt="" />
                        </div>
                    )
                })}
                <div onClick={() => setIsClicked(!isClicked)} className="checkout">
                    <span>Checkout</span>
                </div>

            </div>
        )
    } else {


        return (
            <>
                <div className="basket" ref={cartRef}>
                    <div className="cartSpan">
                        <span >Cart</span>
                    </div>

                    <div className="emptyBasket" >
                        <span>Your cart is empty.</span>
                    </div>

                </div>
            </>
        )
    }
}