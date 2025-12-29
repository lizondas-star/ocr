import { createContext, useContext } from 'react';
import { useEffect, useState } from 'react';
import { apiGet } from "../api/client";

const UIHeaderContext = createContext(null);

export function UIHeaderProvider({ children, screen }) {    
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
     
    return(
        <UIHeaderContext.Provider value={{
            data, 
            loading,
            screen
            }}>
            {children}
        </UIHeaderContext.Provider>
    );
}

export function useUIHeaderConfig() {
    return useContext(UIHeaderContext);
}

