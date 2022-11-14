import React, { useEffect, useState } from "react";

import { BsFillSunFill } from "react-icons/bs";
import { BsFillMoonStarsFill } from "react-icons/bs";

function SunMoon(){
    const [theme, setTheme] = useState(null);
    
    useEffect(() => {
    if(window.matchMedia('(prefers-color-scheme: dark)').matches){
            setTheme('dark');
        }else{
            setTheme('light');
        }
    }, []);
    
    useEffect(() => {
        if(theme === 'dark'){
            document.documentElement.classList.add('dark');
        }else{
            document.documentElement.classList.remove('dark');
    }
    }, [theme]);
        const handleThemeSwitch = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    }


return (
    <>
        <button
            type= 'button'
            onClick={handleThemeSwitch}
            className="">
            {theme === 'dark' ? <BsFillMoonStarsFill size="lg"/> : <BsFillSunFill size="lg"/> }
        </button>
    </>
    )
}

export default SunMoon; 