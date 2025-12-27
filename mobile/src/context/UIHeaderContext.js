// import { fetchUIConfig } from "../api/uiConfig.api";
import { createContext, useContext } from 'react';
import { useEffect, useState } from 'react';
import { apiGet } from "../api/client";

const UIHeaderContext = createContext(null);

export function UIHeaderProvider({ children }) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetchData();
    }, [])
    
    const fetchData = async () => {
        try {
            setLoading(true);
            const response = await apiGet('ui/header');
            setData(response);
        } catch (error) {
            console.error('Error:', error);
        } finally {
            setLoading(false);
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
            headerTopData,
            loading
            }}>
            {children}
        </UIHeaderContext.Provider>
    );
}

export function useUIConfig() {
    return useContext(UIHeaderContext);
}

