import Link from "next/link"

export const Header = () => {

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
                    <img style={{ width: "20px", height: "20px" }} src="Shape.png" alt="" />
                    <img style={{ width: "50px", height: "50px" }} src="avatar.png" alt="" />
                </div>
            </div>
            <div style={{ marginTop: "45px", border: "1px solid #E4E9F2" }}>

            </div>
        </>
    )
}