export const ProductWrapper = ({ product }) => {
    console.log(product.thumbnails[0]);
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
                            <span className="discountedPrice">125</span>
                            <span className="price">{product.price}</span>
                        </div>
                        <div className="productDiscount">
                            <span >{product.discount}%</span>
                        </div>
                    </div>

                    <div className="stockAndCart">
                        <div className="stock">
                            <span className="stockOut">-</span>
                            <span>0</span>
                            <span className="stockIn">+</span>
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