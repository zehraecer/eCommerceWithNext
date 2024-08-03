"use server"

import { redirect } from "next/navigation";

export const FilteredProducts = (formData) => {

    const query = []
    const productName = formData.get("productTitle")
    const productTitle = formData.get("productName")
    const productPrice = formData.get("productPrice")
    if (productName) {
        query.push(`productName=${productName}`)
    }
    if (productTitle) {
        query.push(`productTitle=${productTitle}`)
    }
    if (productPrice) {
        query.push(`productPrice=${productPrice}`)
    }
    console.log(query);
    return redirect(`/products?${query.join("&")}`)

}