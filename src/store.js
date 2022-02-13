import { createContext, useState } from "react";

export const StoreContext = createContext({})



export const StoreProvider = ({children}) => {
    const [shoe, setShoe] = useState({
        nameShoe : '',
        img  : '',
        price : ''
    })


    return(
        <StoreContext.Provider value={{shoe , setShoe}}>
            {children}
        </StoreContext.Provider>
       
    )
}