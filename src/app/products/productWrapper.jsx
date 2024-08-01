import { useState } from "react";

export const ProductWrapper = ({ product }) => {

    const [count, setCount] = useState(0)
    const stockInBtn = (stock) => {
        if (count != stock) {
            setCount(count + 1)
        }
    }
    const stockOutBtn = () => {
        if (count > 0) {
            setCount(count - 1)
        }
    }

    console.log(typeof product.price);
    const calculateDiscount = () => {


        const deneme = Number(product.price) - (Number(product.price) * (Number(product.discount / 100)))
        return deneme
    }
    const x = calculateDiscount()
    console.log(typeof x);
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
                            <span className="discountedPrice">{Number(x.toFixed(2))}</span>
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
                            <span className="stockIn" onClick={() => stockInBtn(product.discount)}>+</span>
                        </div>

                        <div className="cart">
                            <img src="../white-shape.svg" alt="" />
                            Add to cart
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}