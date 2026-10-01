import { Children } from "react";
import { useState } from "react";
import { useContext } from "react";
import { createContext } from "react";

const Chaincontext = createContext();

export const usechain = () => useContext(Chaincontext);


export const Chainprovider = ({children}) => {
    const [chain,setchain] = useState([]);
    const data = {
        chain: chain,
        setchain: setchain
    };
    return(
    <Chaincontext value={data}>
        {children}
    </Chaincontext>
)}