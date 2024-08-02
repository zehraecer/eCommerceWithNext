import { createContext, useRef, useState } from "react";

export const MyContext = createContext();

export const MyProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const cartRef = useRef()
    const [isClicked, setIsClicked] = useState(false)
    const [reducedPrice, setReducedPrice] = useState(0)

    return (
        <MyContext.Provider value={{ cart, setCart, isClicked, setIsClicked, cartRef, reducedPrice, setReducedPrice }}>
            {children}
        </MyContext.Provider>
    );
};
