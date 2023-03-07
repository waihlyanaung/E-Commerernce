import {
    createContext,
    useContext,
    useState,
    useEffect,
} from "react";



const StateContext = createContext();

// sarch1 and go to navbar
export const StateContextProvider = ({ children }) => {
    const [search, setSearch] = useState("");
    const data = {  search, setSearch  };
    return <StateContext.Provider value={data}>{children}</StateContext.Provider>;
};

export const useStateContext = () => useContext(StateContext);   


