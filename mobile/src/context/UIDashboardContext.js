import { createContext, useContext, useEffect } from "react";
import { useState } from 'react';
import { apiGet } from "../api/client";

const UIDashboardContext = createContext(null);

export function UIDashboardProvider({ children }) {    
    const [data, setData] = useState([]);
    useEffect(() => {
        fetchData();
    }, [])
    const fetchData = async () => {
        try {
            const response = await apiGet('ui/dashboard');
            setData(response);
        } catch (error) {
            console.error('Error:', error);
        }
    }
    
    return(
        <UIDashboardContext.Provider value={{
            cards: data?.cards,
            }}>
            {children}
        </UIDashboardContext.Provider>
    );
};

export function useUIDashboard() {
    return useContext(UIDashboardContext);
}