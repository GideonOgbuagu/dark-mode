import { useState } from 'react';


const useLocalStorage = (key, firstValue) => {
    const [storedValue, setStoredValue] = useState(() => {
        if(JSON.parse(window.localStorage.getItem(key))) {
            return JSON.parse(window.localStorage.getItem(key))
        }else {
            return firstValue;
        }
    })
    const setValue = value => {
        setStoredValue(value);
        window.localStorage.setItem(key, JSON.stringify(value))
    }
    
    return [storedValue, setValue];
}

export default useLocalStorage;