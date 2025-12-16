import { fetchUIConfig } from "../api/uiConfig.api";
import { createContext, useContext } from 'react';

const UIConfigContext = createContext(null);

export function UIConfigProvider({ children }) {

    return(
        <UIConfigContext>
            {children}
        </UIConfigContext>
    );
}

export function useUIConfig() {
    return useContext(UIConfigContext);
}

