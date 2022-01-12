import React from 'react';
import '../App.css';

import Section1Desktop from './Section1/Section1Desktop';
import Section2Desktop from './Section2/Section2Desktop';


const Page = ({colortheme}) => {
     return (
        <div className='w-screen h-screen bg-black flex flex-row'>
            <Section2Desktop colortheme={colortheme} />
            <Section1Desktop colortheme={colortheme} />
        </div>
    );
}

export default Page;
