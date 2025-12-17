import { fetchUIConfig } from "../api/uiConfig.api";
import { createContext, useContext } from 'react';
import { useEffect, useState } from 'react';

const UIConfigContext = createContext(null);

export function UIConfigProvider({ children }) {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetchData();
    }, [])
    
    const fetchData = async () => {
        try {
            const response = await fetchUIConfig();
            setData(response);
        } catch (error) {
            console.error('Error:', error);
        }
    }
    
    return(
        <UIConfigContext.Provider value={{data}}>
            {children}
        </UIConfigContext.Provider>
    );
}

export function useUIConfig() {
    return useContext(UIConfigContext);
}

