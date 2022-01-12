import React from 'react';
import '../App.css';

import PageDesktop from './Page'
import PageMobile from './PageMobile'



const Main = () => {
    // Declare a new state variable with the "useState" Hook
    const [width, setWidth] = React.useState(window.innerWidth);
    const breakpoint = 1024;

    const colorthemes = [
        'slate', 'zinc', 'stone', 
        'red', 'amber', 'yellow', 
        'emerald', 'teal', 
        'cyan', 'blue', 'indigo', 
        'violet'
    ]

    let randomcolor = colorthemes[Math.floor(Math.random() * colorthemes.length)]
    
    console.log(randomcolor)

    React.useEffect(() => {
        window.addEventListener("resize", () => setWidth(window.innerWidth));
    }, []);

    return width < breakpoint ? <PageMobile colortheme={randomcolor}/> : <PageDesktop colortheme={randomcolor}/>;
}

export default Main;
