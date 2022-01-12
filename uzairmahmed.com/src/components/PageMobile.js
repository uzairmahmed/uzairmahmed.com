import React from 'react';
import '../App.css';

import Section1Mobile from './Section1/Section1Mobile';
import Section2Mobile from './Section2/Section2Mobile';



const Main = () => {

    const colorthemes = [
        'slate', 'zinc', 'neutral', 'stone', 
        'red', 'orange', 'amber', 'yellow', 
        'lime', 'green', 'emerald', 'teal', 
        'cyan', 'sky', 'blue', 'indigo', 
        'violet', 'purple', 'fushia', 'pink', 
        'rose'
    ]

    const randomcolor = colorthemes[Math.floor(Math.random() * colorthemes.length)]
    
    return (
        <div className='w-screen h-screen bg-black flex flex-col'>
            <Section1Mobile/>
            <Section2Mobile/>
        </div>
    );
}

export default Main;
