
import { createContext, useState, useContext } from 'react';


const CheckedContext = createContext();

export function useCheckedContext() {
    return useContext(CheckedContext);
}

export function CheckedProvider({ children }) {
    const [checked, setChecked] = useState([0, 0, 0, 0]);

    const value = {
        checked,
        setChecked,
    };

    return (
        <CheckedContext.Provider value={ value }>
          { children }
        </CheckedContext.Provider>
    );
}
