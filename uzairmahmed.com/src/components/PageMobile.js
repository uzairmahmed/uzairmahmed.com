import React from 'react';
import '../App.css';

import Section1Mobile from './Section1/Section1Mobile';
import Section2Mobile from './Section2/Section2Mobile';



const Main = ({colortheme}) => {
    return (
        <div className='w-screen h-screen bg-black flex flex-col'>
            <Section1Mobile colortheme={colortheme}/>
            <Section2Mobile colortheme={colortheme}/>
        </div>
    );
}

export default Main;
