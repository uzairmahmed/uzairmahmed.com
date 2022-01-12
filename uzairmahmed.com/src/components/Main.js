import React from 'react';
import '../App.css';

import PageDesktop from './Page'
import PageMobile from './PageMobile'

const Main = () => {
    // Declare a new state variable with the "useState" Hook
    const [width, setWidth] = React.useState(window.innerWidth);
    const breakpoint = 1024;

    const colors = ['slate', 'zinc', 'stone', 'red', 'amber', 'yellow', 'emerald', 'teal', 'cyan', 'blue', 'indigo', 'violet']

    const color = colors[Math.floor(Math.random() * colors.length)]
    // const color = 'emerald'

    
    React.useEffect(() => {
        window.addEventListener("resize", () => setWidth(window.innerWidth));
    }, []);

    return width < breakpoint ? <PageMobile colortheme={color}/> : <PageDesktop colortheme={color}/>;
}

export default Main;
