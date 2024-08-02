"use server"

import { redirect } from "next/navigation";

export const FilteredProducts = (formData) => {
    const productName = formData.get("productName")
    const productTitle = formData.get("productTitle")
    const productPrice = formData.get("productPrice")
    console.log(productName);
    console.log(formData);
    if (productName) {
        return redirect(`/products/?productName=${productName}`)
    }
    if (productTitle) {
        return redirect(`/products/?productTitle=${productTitle}`)
    }
    if (productPrice) {
        return redirect(`/products/?productPrice=${productPrice}`)
    }

}