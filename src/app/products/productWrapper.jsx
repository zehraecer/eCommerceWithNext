import { useState } from "react";
import { useContext } from "react";
import { MyContext } from "../context";

export const ProductWrapper = ({ product }) => {
    const { cart, setCart, reducedPrice, setReducedPrice } = useContext(MyContext)
    const [count, setCount] = useState(0)

    const addToCart = (param) => {
        let deneme = cart.filter(cart => cart.id === param)
        setCount(0)

        if (param === product.id) {
            if (deneme.length > 0) {
                console.log("var");
                let newPiece = cart.map((item) => {
                    if (item.id === param) {
                        if (item.piece < product.stock) {
                            return (
                                { ...item, piece: item.piece + count }
                            )
                        } else {
                            return (
                                { ...item, piece: product.stock }
                            )
                        }
                    }
                })
                setCart(newPiece)
            } else {
                const itemsInCart = {
                    id: product.id,
                    name: product.name,
                    title: product.title,
                    piece: count,
                    img: product.image,
                    price: product.price
                }
                setCart([...cart, itemsInCart])
            }
        }
    }

    const stockInBtn = (stock) => { count != stock ? setCount(count + 1) : setCount(count) }
    const stockOutBtn = () => { count > 0 ? setCount(count - 1) : setCount(count) }

    const calculateDiscount = () => {
        const price = Number(product.price) - (Number(product.price) * (Number(product.discount / 100)))
        setReducedPrice(price)
    }

    // const reducedPrice = calculateDiscount()
    calculateDiscount()
    return (

        <>
            <div className="productWrapper">
                <div className="productWrapper-left">
                    <img style={{ width: "445px", height: "445px", borderRadius: "15px" }} src={`../${product.image}`} />
                    <div className="productThumbnails" >
                        {product.thumbnails.map((thumbnail, index) => {
                            return (
                                <img key={index} src={`../${thumbnail}`} />
                            )
                        })}
                    </div>
                </div>
                <div className="productWrapper-right">
                    <span className="productName">{product.name}</span>
                    <span className="productTitle">{product.title}</span>
                    <span className="productDescription">{product.description}</span>

                    <div className="priceDiv">
                        <div>
                            <span className="discountedPrice">{Number(reducedPrice.toFixed(2))}</span>
                            <span className="price">{product.price}</span>
                        </div>
                        <div className="productDiscount">
                            <span >{product.discount}%</span>
                        </div>
                    </div>

                    <div className="stockAndCart">
                        <div className="stock">
                            <span className="stockOut" onClick={stockOutBtn}>-</span>
                            <span>{count}</span>
                            <span className="stockIn" onClick={() => stockInBtn(product.stock)}>+</span>
                        </div>

                        <div className="cart" onClick={() => addToCart(product.id)}>
                            <img src="../white-shape.svg" alt="" />
                            Add to cart
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}