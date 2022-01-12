import React from 'react';
import '../../App.css';
import datajson from '../../assets/data.json'

var classNames = require('classnames');


const Section1 = ({colortheme}) => {
    const headercolor = 'bg-'+colortheme+'-900'
    const textcolor = 'text-'+colortheme+'-50'
    
    var headerclass = classNames('bg-'+colortheme+'-900', 'p-10', 'w-9/12', 'h-screen', 'flex', 'justify-center', 'items-start', 'flex-col')
    var nameclass = classNames(textcolor, 'font-name', 'text-5xl', 'font-medium')
    var taglineclass = classNames('ml-1', 'mt-2', textcolor, 'font-name', 'text-lg', 'font-medium')

    return (
        <div className={headerclass}>
            <h1 className={nameclass}>
                {datajson.name}
            </h1>
            <h2 className={taglineclass}>
                {datajson.tagline}
            </h2>
        </div>
    );
}

export default Section1;
