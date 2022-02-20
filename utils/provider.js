import {useContext, createContext, useState} from 'react';
import { site_theme } from './variables';

//the variables you want to provide to all the pages/components wrapped around this provider
const initialStates = {
    theme: "dark",
    setTheme: ()=>{},
}

const MyContext = createContext(initialStates);

export default function AppProvider({children}){
    //children all the pages/components insider this provider
    const[theme, setTheme] = useState(initialStates.theme);

    //put in the variables you want to share
    return <MyContext.Provider value={{theme, setTheme}}>
        <style jsx global>
            {
                `
                    html {
                        scrollbar-color: ${site_theme[theme].weak} ${site_theme[theme].scrollbar};
                    }

                    body {
                        background-color: ${site_theme[theme].background};
                    }

                    ::selection {
                        background: ${site_theme[theme].weak}; /* WebKit/Blink Browsers */
                    }

                    ::-moz-selection {
                        background: ${site_theme[theme].weak}; /* Gecko Browsers */
                    }
                `
            }
        </style>
        
        {children}
    </MyContext.Provider>
}

//use the Context to create Hooks like useTheme
export function useTheme() {
    const {theme, setTheme} = useContext(MyContext);
    return {theme, setTheme};
}