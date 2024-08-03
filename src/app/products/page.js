import Products from "@/data/product.json"
import Link from "next/link";
import { FilteredProducts } from "@/action";
export default function GetProducts({ searchParams }) {
    console.log(searchParams.productPrice);
    console.log(searchParams.productTitle);
    let filteredProduct = Products;
    if (searchParams.productName) {
        filteredProduct = filteredProduct.filter((product) => product.title.toLowerCase().includes(searchParams.productName.toLowerCase()))
    }
    if (searchParams.productTitle) {
        filteredProduct = filteredProduct.filter((product) => product.name === searchParams.productTitle)

    }
    if (searchParams.productPrice) {
        filteredProduct = filteredProduct.filter((product) => {
            const newPrice = product.price.toString().split(".")[0]
            return parseInt(newPrice) < parseInt(searchParams.productPrice);
        }

        )
    }

    return (
        <>
            <form action={FilteredProducts}>
                <input type="text" name="productTitle" />
                <select name="productName">
                    <option value="">seçiniz</option>
                    <option value="yüzük">yüzük</option>
                    <option value="kolye">kolye</option>
                    <option value="küpe">küpe</option>
                    <option value="bileklik">bileklik</option>
                </select>
                <select name="productPrice" >
                    <option value="250">100-250</option>
                    <option value="350">100-350</option>
                </select>
                <button type="submit">Filtrele</button>
            </form>
            <div className="productsGrid">
                {filteredProduct.map(product => {
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