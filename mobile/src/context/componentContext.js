import { createContext, useContext, useEffect } from "react";
import { useState } from 'react';
import { apiGet } from "../api/client";

const ComponentContext = createContext();

export function ComponentProvider({ children }) {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async () => {
        try {
            const response = await apiGet('ui/components');
            setData(response);
        } catch (error) {
            console.error('Error:', error);
        }
    }

    const getComponent = (componentName) => {        
        return data[componentName] || [];
    }
    
    return(
        <ComponentContext.Provider value={{
            data,
            getComponent
        }}>
            {children}
        </ComponentContext.Provider>
    );
}

export function useComponent() {
    return useContext(ComponentContext);
}