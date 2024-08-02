import { createContext, useState } from "react";

export const MyContext = createContext();

export const MyProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    return (
        <MyContext.Provider value={{ cart, setCart }}>
            {children}
        </MyContext.Provider>
    );
};
