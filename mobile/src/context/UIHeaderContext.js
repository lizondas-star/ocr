// import { fetchUIConfig } from "../api/uiConfig.api";
import { createContext, useContext } from 'react';
import { useEffect, useState } from 'react';
import { apiGet } from "../api/client";

const UIHeaderContext = createContext(null);

export function UIHeaderProvider({ children }) {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetchData();
    }, [])
    
    const fetchData = async () => {
        try {
            const response = await apiGet('ui/header');
            setData(response);
        } catch (error) {
            console.error('Error:', error);
        }
    }

    const headerTopData = () => {
        const headerTop = data?.module?.filter(module => module.component === 'HeaderTop') || [];
        const elements = headerTop[0].element; 
        return elements;
    }
    
    return(
        <UIHeaderContext.Provider value={{
            data, 
            headerTopData
            }}>
            {children}
        </UIHeaderContext.Provider>
    );
}

export function useUIConfig() {
    return useContext(UIHeaderContext);
}

