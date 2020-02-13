import { useEffect } from 'react';
import useLocalStorage from './useLocalStorage';

const useDarkMode = () => {
     const[mode, setMode] = useLocalStorage('darkValue', false);

     useEffect(() => {
        const body = window.document.getElementsByTagName("body");
         if(mode === true) {
            setMode(body.classList.add("dark-mode"))
         } else {
             setMode(body.classList.remove("dark-mode"));
         }
     }, [mode]);

     return [mode];
}

export default useDarkMode;