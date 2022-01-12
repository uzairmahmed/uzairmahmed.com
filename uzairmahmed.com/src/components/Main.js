import React from 'react';
import '../App.css';

import PageDesktop from './Page'
import PageMobile from './PageMobile'



const Main = () => {
    // Declare a new state variable with the "useState" Hook
    const [width, setWidth] = React.useState(window.innerWidth);
    const breakpoint = 1024;

    React.useEffect(() => {
        window.addEventListener("resize", () => setWidth(window.innerWidth));
    }, []);

    return width < breakpoint ? <PageMobile /> : <PageDesktop />;
}

export default Main;
