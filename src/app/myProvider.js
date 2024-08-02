"use client";

import { MyContext, MyProvider as Provider } from "./context";

export function MyProvider({ children }) {
    return <Provider>{children}</Provider>;
}