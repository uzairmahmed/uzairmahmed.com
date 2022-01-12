import React from 'react';
import '../App.css';

import Section1Desktop from './Section1/Section1Desktop';
import Section2Desktop from './Section2/Section2Desktop';


const Main = () => {

    return (
        <div class='w-screen h-screen bg-black flex flex-row'>
            <Section2Desktop/>
            <Section1Desktop/>
        </div>
    );
}

export default Main;
